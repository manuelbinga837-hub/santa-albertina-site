import { getPublicNewsById } from "../../services/news.js";

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

  if (Number.isNaN(date.getTime())) {
    return "Sem data";
  }

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function createNewsSlug(id) {
  return String(id);
}

function renderNewsNotFound() {
  return `
    <section class="news-detail-not-found section">
      <div class="container">
        <span class="section__eyebrow">
          Notícias
        </span>

        <h1>Notícia não encontrada</h1>

        <p>
          A notícia que procura não está disponível.
        </p>

        <a
          href="/noticias"
          data-route
          class="button button--primary"
        >
          ← Voltar para Notícias
        </a>
      </div>
    </section>
  `;
}

function renderNewsError() {
  return `
    <section class="news-detail-not-found section">
      <div class="container">
        <span class="section__eyebrow">
          Notícias
        </span>

        <h1>Não foi possível carregar a notícia</h1>

        <p>
          Ocorreu um problema ao carregar esta publicação.
          Tente novamente mais tarde.
        </p>

        <a
          href="/noticias"
          data-route
          class="button button--primary"
        >
          ← Voltar para Notícias
        </a>
      </div>
    </section>
  `;
}

function renderNewsDetail(news) {
  const title = escapeHtml(news.title || "Sem título");
  const category = escapeHtml(news.category || "Geral");
  const summary = escapeHtml(
    news.summary || "Esta publicação ainda não possui um resumo."
  );
  const content = escapeHtml(
    news.content || "Esta publicação ainda não possui conteúdo."
  );
  const date = formatNewsDate(news.published_at);
  const coverUrl = news.cover_url
    ? escapeHtml(news.cover_url)
    : "";

  const image = coverUrl
    ? `
        <figure class="news-detail__cover">
          <img
            src="${coverUrl}"
            alt="${title}"
          />
        </figure>
      `
    : "";

  const contentHtml = content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  return `
    <article class="news-detail">

      <section class="news-detail__hero">

        <div class="news-detail__hero-container container">

          <a
            href="/noticias"
            data-route
            class="news-detail__back"
          >
            <span aria-hidden="true">←</span>
            <span>Voltar para Notícias</span>
          </a>

          <div class="news-detail__meta">

            <span class="news-detail__category">
              ${category}
            </span>

            <time class="news-detail__date">
              ${date}
            </time>

          </div>

          <h1 class="news-detail__title">
            ${title}
          </h1>

          <p class="news-detail__summary">
            ${summary}
          </p>

        </div>

      </section>

      <section class="news-detail__main section">

        <div class="container">

          ${image}

          <div class="news-detail__layout">

            <div class="news-detail__content">

              ${contentHtml}

            </div>

            <aside class="news-detail__aside">

              <span class="news-detail__aside-label">
                Publicado em
              </span>

              <time>
                ${date}
              </time>

              <a
                href="/noticias"
                data-route
                class="news-detail__aside-link"
              >
                ← Ver todas as notícias
              </a>

            </aside>

          </div>

        </div>

      </section>

    </article>
  `;
}

export async function NoticiasDetalhe(id) {
  try {
    const news = await getPublicNewsById(id);

    if (!news) {
      return renderNewsNotFound();
    }

    return renderNewsDetail(news);
  } catch (error) {
    console.error("Erro ao carregar notícia:", error);
    return renderNewsError();
  }
}
