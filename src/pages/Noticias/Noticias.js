import { getPublicNews } from "../../services/news.js";

let newsItems = [];
let loadError = false;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatNewsDate(value) {
  if (!value) return "Sem data";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Sem data";

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function renderNewsCards() {
  if (loadError) {
    return `
      <div class="news-list__message">
        <p>Não foi possível carregar as notícias.</p>
        <button class="button button--primary" type="button"
          onclick="window.retrySchoolNews()">Tentar novamente</button>
      </div>
    `;
  }

  if (!newsItems.length) {
    return `
      <div class="news-list__message">
        <p>Ainda não existem notícias publicadas.</p>
      </div>
    `;
  }

  return newsItems.map((news) => {
    const title = escapeHtml(news.title || "Sem título");
    const category = escapeHtml(news.category || "Geral");
    const date = escapeHtml(formatNewsDate(news.published_at));
    const image = escapeHtml(news.cover_url || "");

    return `
      <a href="/noticias/${encodeURIComponent(news.id)}"
        data-route class="news-card"
        aria-label="Ler notícia: ${title}">
        <div class="news-card__image">
          ${
            image
              ? `<img src="${image}" alt="${title}" loading="lazy">`
              : `<div class="news-card__image-placeholder" aria-hidden="true"></div>`
          }
        </div>
        <div class="news-card__content">
          <span class="news-card__category">${category}</span>
          <h3>${title}</h3>
          <span class="news-card__date">${date}</span>
        </div>
      </a>
    `;
  }).join("");
}

export async function Noticias() {
  newsItems = [];
  loadError = false;

  const page = `
    <div class="news-page">
      <section class="news-hero">
        <div class="news-hero__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
            alt="Imagem relacionada com notícias e conhecimento">
          <div class="news-hero__overlay" aria-hidden="true"></div>
          <div class="news-hero__container container">
            <div class="news-hero__content">
              <span class="news-hero__eyebrow">Notícias</span>
              <h1 class="news-hero__title">
                Informação que aproxima
                <span>a comunidade escolar.</span>
              </h1>
              <p class="news-hero__description">
                Acompanhe as principais notícias, informações
                e acontecimentos da Santa Albertina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="news-list section">
        <div class="news-list__container container">
          <div class="news-list__heading">
            <span class="section__eyebrow">Publicações</span>
            <h2>Notícias da Santa Albertina</h2>
            <p>Explore as notícias e informações publicadas
              pela comunidade escolar.</p>
          </div>

          <div class="news-grid" id="public-news-grid">
            <p>A carregar notícias...</p>
          </div>
        </div>
      </section>

      <div class="news-lightbox" id="news-lightbox" aria-hidden="true">
        <button class="news-lightbox__backdrop" type="button"
          aria-label="Fechar notícia"
          onclick="window.closeSchoolNews()"></button>

        <button class="news-lightbox__close" type="button"
          aria-label="Fechar notícia"
          onclick="window.closeSchoolNews()">×</button>

        <button class="news-lightbox__previous" type="button"
          aria-label="Notícia anterior"
          onclick="window.previousSchoolNews()">‹</button>

        <article class="news-lightbox__content">
          <div class="news-lightbox__image">
            <img id="news-lightbox-image" src="" alt="">
          </div>
          <div class="news-lightbox__body">
            <span id="news-lightbox-category"
              class="news-lightbox__category"></span>
            <h2 id="news-lightbox-title"></h2>
            <span id="news-lightbox-date"
              class="news-lightbox__date"></span>
            <p id="news-lightbox-description"></p>
            <span id="news-lightbox-counter"
              class="news-lightbox__counter"></span>
          </div>
        </article>

        <button class="news-lightbox__next" type="button"
          aria-label="Próxima notícia"
          onclick="window.nextSchoolNews()">›</button>
      </div>
    </div>
  `;

  try {
    newsItems = await getPublicNews();
  } catch (error) {
    console.error("Erro ao carregar notícias públicas:", error);
    loadError = true;
  }

  return page.replace(
    '<div class="news-grid" id="public-news-grid">\n            <p>A carregar notícias...</p>\n          </div>',
    `<div class="news-grid" id="public-news-grid">${renderNewsCards()}</div>`
  );
}

window.schoolNewsCurrentIndex = 0;

window.openSchoolNews = function(index) {
  if (!newsItems.length) return;

  const lightbox = document.querySelector("#news-lightbox");
  const image = document.querySelector("#news-lightbox-image");
  const category = document.querySelector("#news-lightbox-category");
  const title = document.querySelector("#news-lightbox-title");
  const date = document.querySelector("#news-lightbox-date");
  const description = document.querySelector("#news-lightbox-description");
  const counter = document.querySelector("#news-lightbox-counter");

  if (!lightbox || !image || !category || !title || !date ||
      !description || !counter) return;

  window.schoolNewsCurrentIndex =
    (Number(index) + newsItems.length) % newsItems.length;

  const current = newsItems[window.schoolNewsCurrentIndex];

  image.src = current.cover_url || "";
  image.alt = current.title || "Imagem da notícia";
  category.textContent = current.category || "Geral";
  title.textContent = current.title || "Sem título";
  date.textContent = formatNewsDate(current.published_at);
  description.textContent = current.summary || current.content || "";
  counter.textContent =
    `${window.schoolNewsCurrentIndex + 1} / ${newsItems.length}`;

  lightbox.classList.add("news-lightbox--open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("news-lightbox-open");
};

window.previousSchoolNews = function() {
  window.openSchoolNews(window.schoolNewsCurrentIndex - 1);
};

window.nextSchoolNews = function() {
  window.openSchoolNews(window.schoolNewsCurrentIndex + 1);
};

window.closeSchoolNews = function() {
  const lightbox = document.querySelector("#news-lightbox");
  const image = document.querySelector("#news-lightbox-image");

  if (!lightbox) return;

  lightbox.classList.remove("news-lightbox--open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("news-lightbox-open");

  if (image) {
    image.src = "";
    image.alt = "";
  }
};

window.retrySchoolNews = function() {
  const grid = document.querySelector("#public-news-grid");
  if (!grid) return;

  grid.innerHTML = "<p>A carregar notícias...</p>";

  getPublicNews()
    .then((items) => {
      newsItems = items;
      loadError = false;
      grid.innerHTML = renderNewsCards();
    })
    .catch((error) => {
      console.error("Erro ao tentar carregar notícias:", error);
      loadError = true;
      grid.innerHTML = renderNewsCards();
    });
};

document.addEventListener("keydown", (event) => {
  const lightbox = document.querySelector("#news-lightbox");

  if (!lightbox ||
      !lightbox.classList.contains("news-lightbox--open")) return;

  if (event.key === "Escape") window.closeSchoolNews();
  if (event.key === "ArrowLeft") window.previousSchoolNews();
  if (event.key === "ArrowRight") window.nextSchoolNews();
});
