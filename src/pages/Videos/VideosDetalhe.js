const videoItems = [
  {
    slug: "video-youtube-1",
    type: "youtube",
    source: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    title: "Vídeo YouTube de exemplo 1",
    description: "Conteúdo audiovisual publicado no YouTube."
  },
  {
    slug: "video-youtube-2",
    type: "youtube",
    source: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    title: "Vídeo YouTube de exemplo 2",
    description: "Conteúdo audiovisual publicado no YouTube."
  },
  {
    slug: "video-local-3",
    type: "local",
    source: "/uploads/videos/video-exemplo-3.mp4",
    title: "Vídeo local de exemplo 3",
    description: "Vídeo hospedado no servidor da Santa Albertina."
  },
  {
    slug: "video-local-4",
    type: "local",
    source: "/uploads/videos/video-exemplo-4.mp4",
    title: "Vídeo local de exemplo 4",
    description: "Vídeo hospedado no servidor da Santa Albertina."
  }
];

function getVideoBySlug(slug) {
  return videoItems.find((video) => video.slug === slug);
}

function getYouTubeId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    return parsedUrl.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

export function VideosDetalhe(slug) {
  const video = getVideoBySlug(slug);

  if (!video) {
    return `
      <section class="video-detail-not-found section">
        <div class="container">

          <span class="section__eyebrow">
            Vídeos
          </span>

          <h1>Vídeo não encontrado</h1>

          <p>
            O vídeo que procura não está disponível.
          </p>

          <a
            href="/videos"
            data-route
            class="button button--primary"
          >
            ← Voltar para Vídeos
          </a>

        </div>
      </section>
    `;
  }

  const player = video.type === "youtube"
    ? `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${getYouTubeId(video.source)}"
        title="${video.title}"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    `
    : `
      <video
        src="${video.source}"
        controls
        playsinline
        preload="metadata"
      ></video>
    `;

  return `
    <article class="video-detail">

      <section class="video-detail__hero">

        <div class="container">

          <a
            href="/videos"
            data-route
            class="video-detail__back"
          >
            <span aria-hidden="true">←</span>
            <span>Voltar para Vídeos</span>
          </a>

          <span class="section__eyebrow">
            ${video.type === "youtube" ? "YouTube" : "Vídeo local"}
          </span>

          <h1 class="video-detail__title">
            ${video.title}
          </h1>

          <p class="video-detail__description">
            ${video.description}
          </p>

        </div>

      </section>

      <section class="video-detail__main section">

        <div class="container">

          <div class="video-detail__player">
            ${player}
          </div>

          <div class="video-detail__footer">

            <a
              href="/videos"
              data-route
              class="video-detail__back-link"
            >
              ← Ver todos os vídeos
            </a>

          </div>

        </div>

      </section>

    </article>
  `;
}
