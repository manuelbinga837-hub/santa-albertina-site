const eventItems = [
  {
    slug: "exemplo",
    title: "Feira de Ciências",
    date: "20 de Setembro de 2026",
    time: "09:00",
    location: "Santa Albertina",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Evento de exemplo dedicado à ciência, à aprendizagem e à apresentação de trabalhos desenvolvidos pelos alunos."
  },
  {
    slug: "exemplo-2",
    title: "Encontro da Comunidade Escolar",
    date: "28 de Setembro de 2026",
    time: "10:00",
    location: "Santa Albertina",
    image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Momento de exemplo para representar um encontro entre diferentes membros da comunidade escolar."
  },
  {
    slug: "exemplo-3",
    title: "Actividade Académica",
    date: "05 de Outubro de 2026",
    time: "08:30",
    location: "Santa Albertina",
    image: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Actividade de exemplo relacionada com aprendizagem, conhecimento e desenvolvimento académico."
  },
  {
    slug: "exemplo-4",
    title: "Dia da Escola",
    date: "15 de Outubro de 2026",
    time: "09:30",
    location: "Santa Albertina",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Evento de exemplo para representar um momento especial de celebração e convivência da comunidade escolar."
  }
];

function getEventBySlug(slug) {
  return eventItems.find(
    (event) => event.slug === slug
  );
}

export function EventoDetalhe(slug) {
  const event = getEventBySlug(slug);

  if (!event) {
    return `
      <section class="event-detail event-detail--not-found section">
        <div class="container">
          <a
            href="/eventos"
            data-route
            class="event-detail__back"
          >
            ← Voltar aos eventos
          </a>

          <div class="event-detail__not-found">
            <span class="section__eyebrow">
              Eventos
            </span>

            <h1>Evento não encontrado</h1>

            <p>
              O evento que procura não está disponível.
            </p>

            <a
              href="/eventos"
              data-route
              class="event-detail__button"
            >
              Ver eventos
            </a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <article class="event-detail">

      <section class="event-detail__hero">
        <div class="event-detail__hero-image">
          <img
            src="${event.image}"
            alt="${event.title}"
          />

          <div
            class="event-detail__hero-overlay"
            aria-hidden="true"
          ></div>

          <div class="container event-detail__hero-container">
            <div class="event-detail__hero-content">

              <a
                href="/eventos"
                data-route
                class="event-detail__back event-detail__back--light"
              >
                ← Voltar aos eventos
              </a>

              <span class="event-detail__eyebrow">
                Evento
              </span>

              <h1>
                ${event.title}
              </h1>

            </div>
          </div>
        </div>
      </section>

      <section class="event-detail__content section">
        <div class="container event-detail__layout">

          <main class="event-detail__main">

            <div class="event-detail__intro">
              <p>
                ${event.description}
              </p>
            </div>

            <div class="event-detail__info">

              <div class="event-detail__info-item">
                <span class="event-detail__info-label">
                  Data
                </span>
                <strong>
                  ${event.date}
                </strong>
              </div>

              <div class="event-detail__info-item">
                <span class="event-detail__info-label">
                  Horário
                </span>
                <strong>
                  ${event.time}
                </strong>
              </div>

              <div class="event-detail__info-item">
                <span class="event-detail__info-label">
                  Local
                </span>
                <strong>
                  ${event.location}
                </strong>
              </div>

            </div>

            <div class="event-detail__description">
              <span class="section__eyebrow">
                Sobre o evento
              </span>

              <h2>
                Um momento de aprendizagem e comunidade
              </h2>

              <p>
                ${event.description}
              </p>

            </div>

          </main>

          <aside class="event-detail__sidebar">

            <div class="event-detail__sidebar-card">

              <span class="section__eyebrow">
                Informações
              </span>

              <h2>
                ${event.title}
              </h2>

              <div class="event-detail__sidebar-meta">
                <span>${event.date}</span>
                <span>${event.time}</span>
                <span>${event.location}</span>
              </div>

              <a
                href="/eventos"
                data-route
                class="event-detail__button"
              >
                Ver todos os eventos
              </a>

            </div>

          </aside>

        </div>
      </section>

    </article>
  `;
}
