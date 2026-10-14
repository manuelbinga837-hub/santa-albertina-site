import { getPublicVideos } from "../../services/videos.js";

let videoItems = [];
let videosRequestId = 0;

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getYouTubeId(url = "") {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/")[2] || "";
      }

      return parsedUrl.searchParams.get("v") || "";
    }

    return "";
  } catch {
    return "";
  }
}

function normalizeVideo(video) {
  const source = video.video_url || "";
  const provider = String(video.provider || "").toLowerCase();
  const youtubeId = getYouTubeId(source);

  const isYouTube =
    provider.includes("youtube") ||
    provider.includes("youtu.be") ||
    Boolean(youtubeId);

  return {
    id: video.id,
    type: isYouTube ? "youtube" : "local",
    source,
    title: video.title || video.publication_title || "Vídeo da Santa Albertina",
    description: video.description || video.summary || "",
    thumbnail: video.thumbnail_url || ""
  };
}

function renderVideoCards() {
  const grid = document.querySelector(".videos-grid");
  if (!grid) return;

  if (!videoItems.length) {
    grid.innerHTML = `
      <p class="videos-empty">
        Ainda não existem vídeos publicados nesta secção.
      </p>
    `;
    return;
  }

  grid.innerHTML = videoItems.map((video, index) => {
    const title = escapeHtml(video.title);
    const source = escapeHtml(video.source);
    const thumbnail = escapeHtml(video.thumbnail);
    const youtubeId = getYouTubeId(video.source);

    let preview;

    if (thumbnail) {
      preview = `
        <div class="video-item__youtube-preview">
          <img src="${thumbnail}" alt="" loading="lazy">
        </div>
      `;
    } else if (video.type === "youtube" && youtubeId) {
      preview = `
        <div class="video-item__youtube-preview">
          <img
            src="https://img.youtube.com/vi/${encodeURIComponent(youtubeId)}/hqdefault.jpg"
            alt=""
            loading="lazy"
          >
        </div>
      `;
    } else {
      preview = `
        <video
          class="video-item__preview"
          src="${source}"
          preload="metadata"
          muted
          playsinline
        ></video>
      `;
    }

    return `
      <button
        class="video-item"
        type="button"
        data-video-index="${index}"
        aria-label="Abrir ${title}"
      >
        ${preview}
        <span class="video-item__play" aria-hidden="true">▶</span>
        <span class="video-item__info">
          <strong>${title}</strong>
          <small>${video.type === "youtube" ? "YouTube" : "Vídeo local"}</small>
        </span>
      </button>
    `;
  }).join("");

  grid.querySelectorAll("[data-video-index]").forEach((button) => {
    button.addEventListener("click", () => {
      window.openSchoolVideo(Number(button.dataset.videoIndex));
    });
  });
}

export function Videos() {
  const requestId = ++videosRequestId;

  videoItems = [];

  const page = `
    <div class="videos-page">
      <section class="videos-hero">
        <div class="videos-hero__image">
          <img
            src="https://assets.modelslab.ai/guides/thumbnails/video-duration-settings-jvTjfwLu.png"
            alt="Imagem conceptual relacionada com vídeo e comunicação"
          >
          <div class="videos-hero__overlay" aria-hidden="true"></div>
          <div class="videos-hero__container container">
            <div class="videos-hero__content">
              <span class="videos-hero__eyebrow">Vídeos</span>
              <h1 class="videos-hero__title">
                Histórias que ganham <span>vida em vídeo.</span>
              </h1>
              <p class="videos-hero__description">
                Acompanhe vídeos, momentos e conteúdos audiovisuais
                partilhados pela comunidade escolar da Santa Albertina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="videos-list section">
        <div class="videos-list__container container">
          <div class="videos-list__heading">
            <span class="section__eyebrow">Publicações</span>
            <h2>Vídeos da Santa Albertina</h2>
            <p>
              Explore os conteúdos audiovisuais publicados
              pela equipa de Comunicação da escola.
            </p>
          </div>

          <div class="videos-grid" aria-live="polite">
            <p>A carregar vídeos publicados pela escola...</p>
          </div>
        </div>
      </section>

      <div class="video-lightbox" id="video-lightbox" aria-hidden="true">
        <button
          class="video-lightbox__backdrop"
          type="button"
          aria-label="Fechar vídeo"
          onclick="window.closeSchoolVideo()"
        ></button>

        <button
          class="video-lightbox__close"
          type="button"
          aria-label="Fechar vídeo"
          onclick="window.closeSchoolVideo()"
        >×</button>

        <button
          class="video-lightbox__previous"
          type="button"
          aria-label="Vídeo anterior"
          onclick="window.previousSchoolVideo()"
        >‹</button>

        <div class="video-lightbox__content">
          <div id="video-lightbox-player" class="video-lightbox__player"></div>
          <div class="video-lightbox__info">
            <h2 id="video-lightbox-title"></h2>
            <p id="video-lightbox-description"></p>
            <span id="video-lightbox-counter"></span>
          </div>
        </div>

        <button
          class="video-lightbox__next"
          type="button"
          aria-label="Próximo vídeo"
          onclick="window.nextSchoolVideo()"
        >›</button>
      </div>
    </div>
  `;

  getPublicVideos()
    .then((videos) => {
      if (requestId !== videosRequestId) return;

      videoItems = videos
        .map(normalizeVideo)
        .filter((video) => video.source);

      renderVideoCards();
    })
    .catch((error) => {
      if (requestId !== videosRequestId) return;

      console.error("Erro ao carregar vídeos públicos:", error);

      const grid = document.querySelector(".videos-grid");
      if (grid) {
        grid.innerHTML = `
          <p class="videos-error">
            Não foi possível carregar os vídeos neste momento.
            Tente novamente mais tarde.
          </p>
        `;
      }
    });

  return page;
}

window.schoolVideoCurrentIndex = 0;

window.openSchoolVideo = function(index) {
  if (!videoItems.length) return;

  const lightbox = document.querySelector("#video-lightbox");
  const player = document.querySelector("#video-lightbox-player");
  const title = document.querySelector("#video-lightbox-title");
  const description = document.querySelector("#video-lightbox-description");
  const counter = document.querySelector("#video-lightbox-counter");

  if (!lightbox || !player || !title || !description || !counter) return;

  window.schoolVideoCurrentIndex =
    (Number(index) + videoItems.length) % videoItems.length;

  const current = videoItems[window.schoolVideoCurrentIndex];

  player.innerHTML = "";

  if (current.type === "youtube") {
    const youtubeId = getYouTubeId(current.source);

    if (!youtubeId) {
      player.textContent = "Não foi possível identificar este vídeo do YouTube.";
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.src =
      `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&controls=1&rel=0`;
    iframe.title = current.title;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;

    player.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.src = current.source;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("controlsList", "nodownload");

    player.appendChild(video);
  }

  title.textContent = current.title;
  description.textContent = current.description;
  counter.textContent =
    `${window.schoolVideoCurrentIndex + 1} / ${videoItems.length}`;

  lightbox.classList.add("video-lightbox--open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("video-lightbox-open");
};

window.previousSchoolVideo = function() {
  window.openSchoolVideo(window.schoolVideoCurrentIndex - 1);
};

window.nextSchoolVideo = function() {
  window.openSchoolVideo(window.schoolVideoCurrentIndex + 1);
};

window.closeSchoolVideo = function() {
  const lightbox = document.querySelector("#video-lightbox");
  const player = document.querySelector("#video-lightbox-player");

  if (!lightbox) return;

  if (player) player.innerHTML = "";

  lightbox.classList.remove("video-lightbox--open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("video-lightbox-open");
};

document.addEventListener("keydown", (event) => {
  const lightbox = document.querySelector("#video-lightbox");

  if (!lightbox || !lightbox.classList.contains("video-lightbox--open")) {
    return;
  }

  if (event.key === "Escape") {
    window.closeSchoolVideo();
  } else if (event.key === "ArrowLeft") {
    window.previousSchoolVideo();
  } else if (event.key === "ArrowRight") {
    window.nextSchoolVideo();
  }
});
