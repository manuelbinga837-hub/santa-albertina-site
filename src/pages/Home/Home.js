export function Home() {
  return `
    <div class="home">

      <!-- HERO -->
      <section class="home-hero">
        <div class="home-hero__background" aria-hidden="true"></div>

        <div class="home-hero__container">

          <div class="home-hero__content">

            <span class="home-hero__eyebrow">
              Educação • Conhecimento • Futuro
            </span>

            <h1 class="home-hero__title">
              Onde o conhecimento
              <span>abre novos caminhos.</span>
            </h1>

            <p class="home-hero__description">
              Um espaço dedicado à aprendizagem, ao crescimento
              e à construção de um futuro com mais possibilidades.
            </p>

            <div class="home-hero__actions">
              <a
                href="/sobre"
                data-route
                class="home-hero__button home-hero__button--primary"
              >
                Conheça a nossa escola
              </a>

              <a
                href="/academico"
                data-route
                class="home-hero__button home-hero__button--secondary"
              >
                Conheça a área académica
              </a>
            </div>

          </div>

          <div class="home-hero__visual">

            <div class="home-hero__image-frame">

              <div class="home-hero__image-placeholder">

                <img
                  src="/src/assets/images/home/hero-knowledge.jpg"
                  alt="Imagem conceptual relacionada com conhecimento e aprendizagem"
                />

              </div>

            </div>

          </div>

        </div>

        <div
          class="home-hero__scroll-indicator"
          aria-hidden="true"
        >
          <span></span>
        </div>

      </section>


      <!-- SOBRE A ESCOLA -->
      <section class="home-about section">

        <div class="home-about__container container">

          <div class="home-about__visual">

            <div class="home-about__image-frame">

              <div class="home-about__image-placeholder">

                <img
                  src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
                  alt="Biblioteca com livros, representando conhecimento e aprendizagem"
                />

              </div>

            </div>

          </div>

          <div class="home-about__content">

            <span class="section__eyebrow">
              Sobre a escola
            </span>

            <h2 class="home-about__title">
              Um espaço para aprender,
              crescer e construir o futuro.
            </h2>

            <p class="home-about__description">
              A educação vai além da sala de aula. É um processo de
              aprendizagem, descoberta e desenvolvimento que prepara
              cada etapa do caminho.
            </p>

            <p class="home-about__description">
              Conheça melhor a nossa escola, a sua organização,
              a proposta académica e os diferentes espaços que
              fazem parte da vida escolar.
            </p>

            <a
              href="/sobre"
              data-route
              class="home-about__button"
            >
              Conheça a nossa escola
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </section>


      <!-- DESTAQUES ACADÉMICOS -->
      <section class="home-academic section">

        <div class="home-academic__container container">

          <div class="section__header home-academic__header">

            <span class="section__eyebrow">
              Área académica
            </span>

            <h2 class="section__title">
              Aprender é construir possibilidades.
            </h2>

            <p class="section__description">
              Uma experiência de aprendizagem envolve conhecimento,
              acompanhamento, descoberta e desenvolvimento ao longo
              do percurso escolar.
            </p>

          </div>


          <div class="home-academic__grid">

            <article class="home-academic__card">

              <div class="home-academic__icon" aria-hidden="true">
                <span>01</span>
              </div>

              <div class="home-academic__card-content">

                <h3>
                  Aprendizagem
                </h3>

                <p>
                  Desenvolver conhecimentos e competências através
                  de uma aprendizagem contínua e significativa.
                </p>

              </div>

              <span
                class="home-academic__card-line"
                aria-hidden="true"
              ></span>

            </article>


            <article class="home-academic__card">

              <div class="home-academic__icon" aria-hidden="true">
                <span>02</span>
              </div>

              <div class="home-academic__card-content">

                <h3>
                  Acompanhamento
                </h3>

                <p>
                  Valorizar o acompanhamento do percurso de cada
                  aluno e o seu desenvolvimento académico.
                </p>

              </div>

              <span
                class="home-academic__card-line"
                aria-hidden="true"
              ></span>

            </article>


            <article class="home-academic__card">

              <div class="home-academic__icon" aria-hidden="true">
                <span>03</span>
              </div>

              <div class="home-academic__card-content">

                <h3>
                  Conhecimento
                </h3>

                <p>
                  Estimular a curiosidade, a descoberta e a procura
                  constante por novos conhecimentos.
                </p>

              </div>

              <span
                class="home-academic__card-line"
                aria-hidden="true"
              ></span>

            </article>


            <article class="home-academic__card">

              <div class="home-academic__icon" aria-hidden="true">
                <span>04</span>
              </div>

              <div class="home-academic__card-content">

                <h3>
                  Desenvolvimento
                </h3>

                <p>
                  Promover o crescimento académico e pessoal
                  ao longo da experiência escolar.
                </p>

              </div>

              <span
                class="home-academic__card-line"
                aria-hidden="true"
              ></span>

            </article>

          </div>


          <div class="home-academic__footer">

            <a
              href="/academico"
              data-route
              class="home-academic__button"
            >
              Explorar a área académica
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </section>


      <!-- VIDA ESCOLAR -->
      <section class="home-school-life section">

        <div class="home-school-life__container container">

          <div class="home-school-life__visual">

            <div class="home-school-life__visual-inner">

              <span class="home-school-life__visual-eyebrow">
                Vida escolar
              </span>

              <strong class="home-school-life__visual-number">
                03
              </strong>

              <p class="home-school-life__visual-text">
                Aprender também acontece através
                das experiências vividas na escola.
              </p>

              <div
                class="home-school-life__visual-decoration"
                aria-hidden="true"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>


          <div class="home-school-life__content">

            <span class="section__eyebrow">
              Vida escolar
            </span>

            <h2 class="home-school-life__title">
              Uma experiência que vai
              além da sala de aula.
            </h2>

            <p class="home-school-life__description">
              A vida escolar reúne diferentes experiências que
              contribuem para o crescimento, a convivência e o
              desenvolvimento ao longo do percurso académico.
            </p>


            <div class="home-school-life__items">

              <article class="home-school-life__item">

                <span
                  class="home-school-life__item-number"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>
                  <h3>
                    Convivência
                  </h3>

                  <p>
                    Valorizar o respeito, a colaboração e a
                    convivência no ambiente escolar.
                  </p>
                </div>

              </article>


              <article class="home-school-life__item">

                <span
                  class="home-school-life__item-number"
                  aria-hidden="true"
                >
                  02
                </span>

                <div>
                  <h3>
                    Atividades
                  </h3>

                  <p>
                    Dar espaço a experiências que complementam
                    a aprendizagem e enriquecem a vida escolar.
                  </p>
                </div>

              </article>


              <article class="home-school-life__item">

                <span
                  class="home-school-life__item-number"
                  aria-hidden="true"
                >
                  03
                </span>

                <div>
                  <h3>
                    Comunidade
                  </h3>

                  <p>
                    Fortalecer a ligação entre a escola e as
                    pessoas que fazem parte da sua comunidade.
                  </p>
                </div>

              </article>

            </div>


            <a
              href="/vida-escolar"
              data-route
              class="home-school-life__button"
            >
              Conhecer a vida escolar
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </section>


      <!-- NOTÍCIAS -->
      <section class="home-news section">

        <div class="home-news__container container">

          <div class="home-news__intro">

            <div class="home-news__image-frame">

              <div class="home-news__image-overlay"></div>

              <img
                src="https://images.pexels.com/photos/3866816/pexels-photo-3866816.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Jornais empilhados representando notícias e informação"
                class="home-news__image"
              />

              <div class="home-news__image-content">

                <span>
                  Informação
                </span>

                <strong>
                  Notícias
                </strong>

              </div>

            </div>


            <div class="home-news__heading">

              <span class="section__eyebrow">
                Notícias
              </span>

              <h2 class="home-news__title">
                Informação que aproxima
                a comunidade escolar.
              </h2>

              <p class="home-news__description">
                Acompanhe as principais notícias, comunicados
                e informações partilhadas pela escola.
              </p>

            </div>

          </div>


          <div class="home-news__content">

            <div class="home-news__cards">

              <article class="home-news__card">

                <div class="home-news__card-image">
                  <span>Imagem</span>
                </div>

                <div class="home-news__card-body">

                  <div class="home-news__card-meta">
                    <span>Categoria</span>
                    <span>Data</span>
                  </div>

                  <h3>
                    Título da notícia
                  </h3>

                  <p>
                    Resumo da notícia que será preenchido
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/noticias/novo-ano-escolar"
                    data-route
                    class="home-news__card-link"
                  >
                    Ler notícia
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>


              <article class="home-news__card">

                <div class="home-news__card-image">
                  <span>Imagem</span>
                </div>

                <div class="home-news__card-body">

                  <div class="home-news__card-meta">
                    <span>Categoria</span>
                    <span>Data</span>
                  </div>

                  <h3>
                    Título da notícia
                  </h3>

                  <p>
                    Resumo da notícia que será preenchido
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/noticias/aprendizagem-em-destaque"
                    data-route
                    class="home-news__card-link"
                  >
                    Ler notícia
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>


              <article class="home-news__card">

                <div class="home-news__card-image">
                  <span>Imagem</span>
                </div>

                <div class="home-news__card-body">

                  <div class="home-news__card-meta">
                    <span>Categoria</span>
                    <span>Data</span>
                  </div>

                  <h3>
                    Título da notícia
                  </h3>

                  <p>
                    Resumo da notícia que será preenchido
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/noticias/momentos-da-comunidade"
                    data-route
                    class="home-news__card-link"
                  >
                    Ler notícia
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>

            </div>


            <div class="home-news__footer">

              <a
                href="/noticias"
                data-route
                class="home-news__button"
              >
                Ver todas as notícias
                <span aria-hidden="true">→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      <!-- VÍDEOS -->
      <section class="home-videos section">

        <div class="home-videos__container container">

          <div class="home-videos__intro">

            <div class="home-videos__image-frame">

              <div class="home-videos__image-overlay"></div>

              <img
                src="https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Claquete de cinema representando produção audiovisual"
                class="home-videos__image"
              />

              <div class="home-videos__image-content">

                <span>
                  Conteúdo audiovisual
                </span>

                <strong>
                  Vídeos
                </strong>

              </div>

              <span
                class="home-videos__play"
                aria-hidden="true"
              >
                ▶
              </span>

            </div>


            <div class="home-videos__heading">

              <span class="section__eyebrow">
                Vídeos
              </span>

              <h2 class="home-videos__title">
                Momentos que também
                podem ser vistos.
              </h2>

              <p class="home-videos__description">
                Um espaço preparado para reunir vídeos,
                atividades e outros conteúdos audiovisuais
                publicados pela escola.
              </p>

            </div>

          </div>


          <div class="home-videos__content">

            <div class="home-videos__cards">

              <article class="home-videos__card">

                <div class="home-videos__card-thumbnail">

                  <div
                    class="home-videos__card-play"
                    aria-hidden="true"
                  >
                    ▶
                  </div>

                  <span>
                    Vídeo
                  </span>

                </div>

                <div class="home-videos__card-body">

                  <span class="home-videos__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do vídeo
                  </h3>

                  <p>
                    Descrição curta que será preenchida
                    com os dados reais do backend.
                  </p>

                  <a
                    href="/videos/video-youtube-1"
                    data-route
                    class="home-videos__card-link"
                  >
                    Assistir vídeo
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>


              <article class="home-videos__card">

                <div class="home-videos__card-thumbnail">

                  <div
                    class="home-videos__card-play"
                    aria-hidden="true"
                  >
                    ▶
                  </div>

                  <span>
                    Vídeo
                  </span>

                </div>

                <div class="home-videos__card-body">

                  <span class="home-videos__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do vídeo
                  </h3>

                  <p>
                    Descrição curta que será preenchida
                    com os dados reais do backend.
                  </p>

                  <a
                    href="/videos/video-youtube-2"
                    data-route
                    class="home-videos__card-link"
                  >
                    Assistir vídeo
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>


              <article class="home-videos__card">

                <div class="home-videos__card-thumbnail">

                  <div
                    class="home-videos__card-play"
                    aria-hidden="true"
                  >
                    ▶
                  </div>

                  <span>
                    Vídeo
                  </span>

                </div>

                <div class="home-videos__card-body">

                  <span class="home-videos__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do vídeo
                  </h3>

                  <p>
                    Descrição curta que será preenchida
                    com os dados reais do backend.
                  </p>

                  <a
                    href="/videos/video-local-3"
                    data-route
                    class="home-videos__card-link"
                  >
                    Assistir vídeo
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>

            </div>


            <div class="home-videos__footer">

              <a
                href="/videos"
                data-route
                class="home-videos__button"
              >
                Ver todos os vídeos
                <span aria-hidden="true">→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      <!-- EVENTOS -->
      <section class="home-events section">

        <div class="home-events__container container">

          <div class="home-events__header">

            <div class="home-events__heading">

              <span class="section__eyebrow">
                Eventos
              </span>

              <h2 class="home-events__title">
                A escola também
                acontece em movimento.
              </h2>

              <p class="home-events__description">
                Descubra atividades, encontros e momentos
                importantes que fazem parte da experiência
                escolar.
              </p>

            </div>

            <a
              href="/eventos"
              data-route
              class="home-events__header-button"
            >
              Ver todos os eventos
              <span aria-hidden="true">→</span>
            </a>

          </div>


          <div class="home-events__timeline">

            <article class="home-events__item">

              <div class="home-events__date">

                <span class="home-events__date-month">
                  MÊS
                </span>

                <strong>
                  01
                </strong>

                <span class="home-events__date-year">
                  2026
                </span>

              </div>


              <div class="home-events__line" aria-hidden="true">
                <span></span>
              </div>


              <div class="home-events__card">

                <div class="home-events__card-image">

                  <div class="home-events__card-image-content">

                    <span>
                      Evento
                    </span>

                    <strong>
                      01
                    </strong>

                  </div>

                </div>


                <div class="home-events__card-body">

                  <span class="home-events__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do evento
                  </h3>

                  <p>
                    Descrição curta do evento que será preenchida
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/eventos/exemplo"
                    data-route
                    class="home-events__card-link"
                  >
                    Ver evento
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </div>

            </article>


            <article class="home-events__item">

              <div class="home-events__date">

                <span class="home-events__date-month">
                  MÊS
                </span>

                <strong>
                  02
                </strong>

                <span class="home-events__date-year">
                  2026
                </span>

              </div>


              <div class="home-events__line" aria-hidden="true">
                <span></span>
              </div>


              <div class="home-events__card">

                <div class="home-events__card-image">

                  <div class="home-events__card-image-content">

                    <span>
                      Evento
                    </span>

                    <strong>
                      02
                    </strong>

                  </div>

                </div>


                <div class="home-events__card-body">

                  <span class="home-events__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do evento
                  </h3>

                  <p>
                    Descrição curta do evento que será preenchida
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/eventos/exemplo-2"
                    data-route
                    class="home-events__card-link"
                  >
                    Ver evento
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </div>

            </article>


            <article class="home-events__item">

              <div class="home-events__date">

                <span class="home-events__date-month">
                  MÊS
                </span>

                <strong>
                  03
                </strong>

                <span class="home-events__date-year">
                  2026
                </span>

              </div>


              <div class="home-events__line" aria-hidden="true">
                <span></span>
              </div>


              <div class="home-events__card">

                <div class="home-events__card-image">

                  <div class="home-events__card-image-content">

                    <span>
                      Evento
                    </span>

                    <strong>
                      03
                    </strong>

                  </div>

                </div>


                <div class="home-events__card-body">

                  <span class="home-events__card-category">
                    Categoria
                  </span>

                  <h3>
                    Título do evento
                  </h3>

                  <p>
                    Descrição curta do evento que será preenchida
                    posteriormente com dados reais.
                  </p>

                  <a
                    href="/eventos/exemplo-3"
                    data-route
                    class="home-events__card-link"
                  >
                    Ver evento
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- GALERIA -->
      <section class="home-gallery section">

        <div class="home-gallery__container container">

          <div class="home-gallery__header">

            <div class="home-gallery__heading">

              <span class="section__eyebrow">
                Galeria
              </span>

              <h2 class="home-gallery__title">
                Momentos que ficam
                na memória.
              </h2>

              <p class="home-gallery__description">
                Um espaço para reunir fotografias de atividades,
                projetos, celebrações e outros momentos da
                vida escolar.
              </p>

            </div>

            <a
              href="/galeria"
              data-route
              class="home-gallery__button"
            >
              Explorar a galeria
              <span aria-hidden="true">→</span>
            </a>

          </div>


          <div class="home-gallery__grid">

            <a
              href="/galeria/exemplo"
              data-route
              class="home-gallery__item home-gallery__item--large"
            >

              <div class="home-gallery__image">

                <img
                  src="https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Imagem conceptual relacionada com aprendizagem"
                />

                <div class="home-gallery__overlay"></div>

                <div class="home-gallery__item-content">

                  <span>
                    Álbum
                  </span>

                  <strong>
                    Aprendizagem
                  </strong>

                  <small>
                    Ver álbum →
                  </small>

                </div>

              </div>

            </a>


            <a
              href="/galeria/exemplo-2"
              data-route
              class="home-gallery__item"
            >

              <div class="home-gallery__image">

                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Imagem conceptual relacionada com estudo"
                />

                <div class="home-gallery__overlay"></div>

                <div class="home-gallery__item-content">

                  <span>
                    Álbum
                  </span>

                  <strong>
                    Estudos
                  </strong>

                  <small>
                    Ver álbum →
                  </small>

                </div>

              </div>

            </a>


            <a
              href="/galeria/exemplo-3"
              data-route
              class="home-gallery__item"
            >

              <div class="home-gallery__image">

                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Imagem conceptual relacionada com colaboração"
                />

                <div class="home-gallery__overlay"></div>

                <div class="home-gallery__item-content">

                  <span>
                    Álbum
                  </span>

                  <strong>
                    Comunidade
                  </strong>

                  <small>
                    Ver álbum →
                  </small>

                </div>

              </div>

            </a>


            <a
              href="/galeria/exemplo-4"
              data-route
              class="home-gallery__item"
            >

              <div class="home-gallery__image">

                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Imagem conceptual relacionada com tecnologia e educação"
                />

                <div class="home-gallery__overlay"></div>

                <div class="home-gallery__item-content">

                  <span>
                    Álbum
                  </span>

                  <strong>
                    Tecnologia
                  </strong>

                  <small>
                    Ver álbum →
                  </small>

                </div>

              </div>

            </a>


            <a
              href="/galeria/exemplo-5"
              data-route
              class="home-gallery__item home-gallery__item--wide"
            >

              <div class="home-gallery__image">

                <img
                  src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Imagem conceptual relacionada com trabalho em equipa"
                />

                <div class="home-gallery__overlay"></div>

                <div class="home-gallery__item-content">

                  <span>
                    Álbum
                  </span>

                  <strong>
                    Trabalho em equipa
                  </strong>

                  <small>
                    Ver álbum →
                  </small>

                </div>

              </div>

            </a>

          </div>

        </div>

      </section>

      <!-- CTA FINAL -->
      <section class="home-cta section">

        <div class="home-cta__background" aria-hidden="true"></div>

        <div class="home-cta__container container">

          <div class="home-cta__content">

            <span class="home-cta__eyebrow">
              Santa Albertina
            </span>

            <h2 class="home-cta__title">
              O próximo passo
              começa aqui.
            </h2>

            <p class="home-cta__description">
              Conheça melhor a nossa escola, descubra a nossa
              proposta educativa e acompanhe tudo o que acontece
              na comunidade escolar.
            </p>

            <div class="home-cta__actions">

              <a
                href="/sobre"
                data-route
                class="home-cta__button home-cta__button--primary"
              >
                Conhecer a escola
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/contactos"
                data-route
                class="home-cta__button home-cta__button--secondary"
              >
                Falar connosco
              </a>

            </div>

          </div>

          <div class="home-cta__visual" aria-hidden="true">

            <div class="home-cta__visual-card">

              <span class="home-cta__visual-letter">S</span>

              <span class="home-cta__visual-line"></span>

              <span class="home-cta__visual-letter home-cta__visual-letter--accent">
                A
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  `;
}
