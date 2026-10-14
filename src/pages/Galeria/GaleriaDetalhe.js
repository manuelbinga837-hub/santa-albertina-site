const albums = [
  {
    slug: "exemplo",
    title: "Aprendizagem",
    description: "Momentos relacionados com aprendizagem e desenvolvimento académico.",
    images: [
      "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ]
  },
  {
    slug: "exemplo-2",
    title: "Estudos",
    description: "Registos visuais relacionados com estudo e conhecimento.",
    images: [
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ]
  },
  {
    slug: "exemplo-3",
    title: "Comunidade",
    description: "Momentos de colaboração e convivência da comunidade escolar.",
    images: [
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ]
  },
  {
    slug: "exemplo-4",
    title: "Tecnologia",
    description: "Imagens conceptuais relacionadas com tecnologia e educação.",
    images: [
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ]
  },
  {
    slug: "exemplo-5",
    title: "Trabalho em equipa",
    description: "Momentos relacionados com colaboração e trabalho em equipa.",
    images: [
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400"
    ]
  }
];

export function GaleriaDetalhe(slug) {
  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    return `
      <section class="gallery-detail-not-found">
        <div class="container">
          <div class="gallery-detail-not-found__content">
            <span class="section__eyebrow">Galeria</span>

            <h1>Álbum não encontrado</h1>

            <p>
              O álbum que procura não está disponível ou já não existe.
            </p>

            <a
              href="/galeria"
              data-route
              class="button button--primary"
            >
              <span aria-hidden="true">←</span>
              Voltar para Galeria
            </a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <main class="gallery-detail">

      <section class="gallery-detail__intro">
        <div class="container">

          <a
            href="/galeria"
            data-route
            class="gallery-detail__back"
          >
            <span aria-hidden="true">←</span>
            <span>Voltar para Galeria</span>
          </a>

          <div class="gallery-detail__heading">
            <span class="section__eyebrow">Álbum</span>

            <h1>${album.title}</h1>

            <p>${album.description}</p>
          </div>

        </div>
      </section>

      <section class="gallery-detail__content">
        <div class="container">

          <div class="gallery-detail__gallery">
            ${album.images.map((image, index) => `
              <figure class="gallery-detail__photo">
                <img
                  src="${image}"
                  alt="${album.title} — imagem ${index + 1}"
                  loading="${index === 0 ? "eager" : "lazy"}"
                />
              </figure>
            `).join("")}
          </div>

        </div>
      </section>

    </main>
  `;
}
