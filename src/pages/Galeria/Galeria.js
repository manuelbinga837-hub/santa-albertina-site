import { getPublicAlbums, getPublicAlbumPhotos } from "../../services/gallery.js";

const DEFAULT_GALLERY_IMAGE =
  "https://images.pexels.com/photos/11000394/pexels-photo-11000394.jpeg?auto=compress&cs=tinysrgb&w=1600";

let galleryImages = [];
let galleryAlbums = [];
let galleryRequestId = 0;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePhoto(photo, albumTitle) {
  return {
    src: photo.url || DEFAULT_GALLERY_IMAGE,
    alt:
      photo.caption ||
      `${albumTitle || "Galeria"} — fotografia`
  };
}

function renderGalleryPhotos() {
  const grid = document.querySelector(".gallery-grid");

  if (!grid) return;

  if (!galleryImages.length) {
    grid.innerHTML = `
      <div class="gallery-empty">
        <p>Nenhuma fotografia disponível neste momento.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = galleryImages
    .map(
      (image, index) => `
        <button
          class="gallery-photo"
          type="button"
          data-gallery-index="${index}"
          aria-label="Abrir fotografia ${index + 1}"
        >
          <img
            src="${escapeHtml(image.src)}"
            alt="${escapeHtml(image.alt)}"
            loading="${index === 0 ? "eager" : "lazy"}"
          />
        </button>
      `
    )
    .join("");

  grid.querySelectorAll(".gallery-photo").forEach((photo) => {
    photo.addEventListener("click", () => {
      const index = Number(
        photo.getAttribute("data-gallery-index")
      );

      window.openGalleryPhoto(index);
    });
  });
}

async function loadGalleryData() {
  const requestId = ++galleryRequestId;

  try {
    const albums = await getPublicAlbums();

    if (requestId !== galleryRequestId) return;

    galleryAlbums = Array.isArray(albums) ? albums : [];

    const photoLists = await Promise.all(
      galleryAlbums.map(async (album) => {
        try {
          const photos = await getPublicAlbumPhotos(album.id);

          return photos.map((photo) =>
            normalizePhoto(photo, album.title)
          );
        } catch (error) {
          console.error(
            `Erro ao carregar fotos do álbum ${album.id}:`,
            error
          );

          return [];
        }
      })
    );

    if (requestId !== galleryRequestId) return;

    galleryImages = photoLists.flat();

    renderGalleryPhotos();
  } catch (error) {
    if (requestId !== galleryRequestId) return;

    console.error("Erro ao carregar a Galeria:", error);

    const grid = document.querySelector(".gallery-grid");

    if (!grid) return;

    grid.innerHTML = `
      <div class="gallery-empty">
        <p>Não foi possível carregar a galeria.</p>
      </div>
    `;
  }
}

export function Galeria() {
  galleryImages = [];
  galleryAlbums = [];

  const html = `
    <div class="gallery-page">

      <section class="gallery-hero">

        <div class="gallery-hero__image">

          <img
            src="${DEFAULT_GALLERY_IMAGE}"
            alt="Imagem conceptual relacionada com galeria e exposição"
          />

          <div class="gallery-hero__overlay" aria-hidden="true"></div>

          <div class="gallery-hero__container container">

            <div class="gallery-hero__content">

              <span class="gallery-hero__eyebrow">
                Galeria
              </span>

              <h1 class="gallery-hero__title">
                Momentos que ficam
                <span>guardados na memória.</span>
              </h1>

              <p class="gallery-hero__description">
                Explore fotografias e momentos que representam
                a vida escolar e as experiências vividas pela
                comunidade da Santa Albertina.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section class="gallery-content section">

        <div class="gallery-content__container container">

          <div class="gallery-content__heading">

            <span class="section__eyebrow">
              Fotografias
            </span>

            <h2>
              Momentos da Santa Albertina
            </h2>

            <p>
              Veja momentos e experiências da comunidade escolar
              através das fotografias.
            </p>

          </div>

          <div class="gallery-grid">

            <div class="gallery-empty">
              <p>Carregando fotografias...</p>
            </div>

          </div>

        </div>

      </section>

      <div
        class="gallery-lightbox"
        id="gallery-lightbox"
        aria-hidden="true"
      >

        <button
          class="gallery-lightbox__backdrop"
          id="gallery-lightbox-backdrop"
          type="button"
          aria-label="Fechar fotografia"
        ></button>

        <button
          class="gallery-lightbox__close"
          id="gallery-lightbox-close"
          type="button"
          aria-label="Fechar fotografia"
          onclick="window.closeGalleryPhoto()"
        >
          ×
        </button>

        <button
          class="gallery-lightbox__previous"
          id="gallery-lightbox-previous"
          type="button"
          aria-label="Fotografia anterior"
          onclick="window.previousGalleryPhoto()"
        >
          ‹
        </button>

        <div class="gallery-lightbox__content">

          <img
            id="gallery-lightbox-image"
            src=""
            alt=""
          />

        </div>

        <button
          class="gallery-lightbox__next"
          id="gallery-lightbox-next"
          type="button"
          aria-label="Próxima fotografia"
          onclick="window.nextGalleryPhoto()"
        >
          ›
        </button>

        <div
          class="gallery-lightbox__counter"
          id="gallery-lightbox-counter"
          aria-live="polite"
        ></div>

      </div>

    </div>
  `;

  setTimeout(() => {
    setupGalleryLightbox();
    loadGalleryData();
  }, 0);

  return html;
}

window.galleryCurrentIndex = 0;

window.openGalleryPhoto = function(index) {
  if (!galleryImages.length) {
    return;
  }

  const lightbox = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-image");
  const counter = document.querySelector("#gallery-lightbox-counter");

  if (!lightbox || !image || !counter) {
    return;
  }

  window.galleryCurrentIndex =
    (Number(index) + galleryImages.length) %
    galleryImages.length;

  const current = galleryImages[window.galleryCurrentIndex];

  image.src = current.src;
  image.alt = current.alt;

  counter.textContent =
    `${window.galleryCurrentIndex + 1} / ${galleryImages.length}`;

  lightbox.classList.add("gallery-lightbox--open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("gallery-lightbox-open");
};

window.previousGalleryPhoto = function() {
  if (!galleryImages.length) return;

  window.openGalleryPhoto(
    window.galleryCurrentIndex - 1
  );
};

window.nextGalleryPhoto = function() {
  if (!galleryImages.length) return;

  window.openGalleryPhoto(
    window.galleryCurrentIndex + 1
  );
};

window.closeGalleryPhoto = function() {
  const lightbox = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-image");

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("gallery-lightbox--open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("gallery-lightbox-open");

  if (image) {
    image.src = "";
    image.alt = "";
  }
};

function setupGalleryLightbox() {
  const lightbox = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-image");
  const close = document.querySelector("#gallery-lightbox-close");
  const previous = document.querySelector("#gallery-lightbox-previous");
  const next = document.querySelector("#gallery-lightbox-next");
  const backdrop = document.querySelector("#gallery-lightbox-backdrop");
  const counter = document.querySelector("#gallery-lightbox-counter");

  if (
    !lightbox ||
    !image ||
    !close ||
    !previous ||
    !next ||
    !backdrop ||
    !counter
  ) {
    return;
  }

  if (lightbox.dataset.initialized === "true") {
    return;
  }

  lightbox.dataset.initialized = "true";

  close.onclick = window.closeGalleryPhoto;
  backdrop.onclick = window.closeGalleryPhoto;
  previous.onclick = window.previousGalleryPhoto;
  next.onclick = window.nextGalleryPhoto;

  document.onkeydown = (event) => {
    if (!lightbox.classList.contains("gallery-lightbox--open")) {
      return;
    }

    if (event.key === "Escape") {
      window.closeGalleryPhoto();
    }

    if (event.key === "ArrowLeft") {
      window.previousGalleryPhoto();
    }

    if (event.key === "ArrowRight") {
      window.nextGalleryPhoto();
    }
  };
}

export function initGallery() {
  setupGalleryLightbox();
}
