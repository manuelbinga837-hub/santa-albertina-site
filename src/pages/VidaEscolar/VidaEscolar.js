const schoolLifeImages = {
  hero:
    "https://images.pexels.com/photos/13042101/pexels-photo-13042101.jpeg?auto=compress&cs=tinysrgb&w=1800",

  activities:
    "https://images.pexels.com/photos/419635/notebook-empty-design-paper-419635.jpeg?auto=compress&cs=tinysrgb&w=1400",

  momentsLarge:
    "https://images.pexels.com/photos/9489944/pexels-photo-9489944.jpeg?auto=compress&cs=tinysrgb&w=1400",

  momentsSmall:
    "https://images.pexels.com/photos/12940778/pexels-photo-12940778.jpeg?auto=compress&cs=tinysrgb&w=1200",

  technology:
    "https://images.pexels.com/photos/13279389/pexels-photo-13279389.jpeg?auto=compress&cs=tinysrgb&w=1400",

  projects:
    "https://images.pexels.com/photos/8036340/pexels-photo-8036340.jpeg?auto=compress&cs=tinysrgb&w=1500",

  detail:
    "https://images.pexels.com/photos/13042101/pexels-photo-13042101.jpeg?auto=compress&cs=tinysrgb&w=1200",

  video:
    "https://images.pexels.com/photos/8036340/pexels-photo-8036340.jpeg?auto=compress&cs=tinysrgb&w=1400",

  community:
    "https://images.pexels.com/photos/12940778/pexels-photo-12940778.jpeg?auto=compress&cs=tinysrgb&w=1400"
};

export function VidaEscolar() {
  return `
    <main class="school-life">

      <!-- HERO -->
      <section class="school-life-hero">

        <div class="school-life-hero__media">
          <img
            src="${schoolLifeImages.hero}"
            alt="Composição conceptual relacionada com conhecimento e aprendizagem"
          />

          <div class="school-life-hero__overlay"></div>
        </div>

        <div class="container school-life-hero__container">

          <div class="school-life-hero__content">

            <span class="section__eyebrow school-life-hero__eyebrow">
              Vida Escolar
            </span>

            <h1>
              A escola também
              <span>se vive.</span>
            </h1>

            <p>
              Para além das aulas, existem descobertas,
              actividades, projectos e experiências que
              ajudam a construir o percurso escolar.
            </p>

            <a
              href="/eventos"
              data-route
              class="button button--primary"
            >
              Explorar eventos
              <span aria-hidden="true">→</span>
            </a>

          </div>

          <div class="school-life-hero__index" aria-hidden="true">
            <strong>02</strong>
            <span>Experiência</span>
            <span>Comunidade</span>
            <span>Crescimento</span>
          </div>

        </div>

      </section>


      <!-- INTRO -->
      <section class="school-life-intro section">

        <div class="container school-life-intro__grid">

          <div>
            <span class="section__eyebrow">
              Para além da sala
            </span>

            <h2>
              Momentos que também
              fazem parte da aprendizagem.
            </h2>
          </div>

          <div class="school-life-intro__text">

            <p>
              A experiência escolar não acontece apenas
              dentro da sala de aula. Existem actividades,
              projectos, descobertas e encontros que
              complementam o percurso académico.
            </p>

            <p>
              Esta área apresenta diferentes dimensões
              da vida escolar e estará preparada para
              receber os conteúdos publicados pela
              Comunicação da Santa Albertina.
            </p>

          </div>

        </div>

      </section>


      <!-- ACTIVIDADES -->
      <section class="school-life-feature section">

        <div class="container school-life-feature__grid">

          <div class="school-life-feature__image">
            <img
              src="${schoolLifeImages.activities}"
              alt="Composição conceptual com elementos relacionados com aprendizagem"
              loading="lazy"
            />

            <span class="school-life-feature__number">
              01
            </span>
          </div>

          <div class="school-life-feature__content">

            <span class="section__eyebrow">
              Actividades
            </span>

            <h2>
              Aprender também acontece
              quando fazemos.
            </h2>

            <p>
              Actividades escolares criam oportunidades para
              experimentar, colaborar, comunicar e desenvolver
              capacidades que complementam a aprendizagem.
            </p>

            <div class="school-life-points">

              <article>
                <span>01</span>
                <div>
                  <h3>Participação</h3>
                  <p>Envolvimento activo na experiência escolar.</p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Colaboração</h3>
                  <p>Experiências construídas através da partilha.</p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Criatividade</h3>
                  <p>Espaço para descobrir novas formas de criar.</p>
                </div>
              </article>

            </div>

          </div>

        </div>

      </section>


      <!-- MOMENTOS -->
      <section class="school-life-moments section">

        <div class="container">

          <div class="school-life-section-heading">

            <div>
              <span class="section__eyebrow">
                Momentos
              </span>

              <h2>
                Histórias que fazem
                parte da experiência.
              </h2>
            </div>

            <p>
              Cada momento acrescenta uma nova dimensão
              à vida escolar.
            </p>

          </div>

          <div class="school-life-moments__grid">

            <article class="school-life-moment school-life-moment--large">

              <img
                src="${schoolLifeImages.momentsLarge}"
                alt="Livros e ambiente conceptual relacionado com conhecimento"
                loading="lazy"
              />

              <div>
                <span>Conhecimento</span>
                <h3>Descobrir novas ideias</h3>
              </div>

            </article>

            <article class="school-life-moment">

              <img
                src="${schoolLifeImages.momentsSmall}"
                alt="Ambiente conceptual relacionado com estudo"
                loading="lazy"
              />

              <div>
                <span>Descoberta</span>
                <h3>Explorar novas possibilidades</h3>
              </div>

            </article>

            <article class="school-life-moment">

              <img
                src="${schoolLifeImages.technology}"
                alt="Tecnologia e aprendizagem em ambiente conceptual"
                loading="lazy"
              />

              <div>
                <span>Tecnologia</span>
                <h3>Criar com novas ferramentas</h3>
              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- PROJECTOS -->
      <section class="school-life-projects section">

        <div class="container school-life-projects__grid">

          <div class="school-life-projects__content">

            <span class="section__eyebrow">
              Projectos e iniciativas
            </span>

            <h2>
              Ideias que ganham
              espaço para acontecer.
            </h2>

            <p>
              Projectos e iniciativas podem transformar a escola
              num espaço de participação, descoberta e criação.
              Esta área estará preparada para apresentar essas
              experiências à comunidade escolar.
            </p>

            <a
              href="/eventos"
              data-route
              class="button button--secondary"
            >
              Ver eventos
              <span aria-hidden="true">→</span>
            </a>

          </div>

          <div class="school-life-projects__visual">

            <div class="school-life-projects__main">
              <img
                src="${schoolLifeImages.projects}"
                alt="Composição conceptual relacionada com criatividade e projectos"
                loading="lazy"
              />
            </div>

            <div class="school-life-projects__detail">
              <img
                src="${schoolLifeImages.detail}"
                alt="Detalhe conceptual relacionado com aprendizagem"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </section>


      <!-- GALERIA -->
      <section class="school-life-gallery section">

        <div class="container">

          <div class="school-life-section-heading">

            <div>
              <span class="section__eyebrow">
                Galeria
              </span>

              <h2>
                Uma história também
                pode ser vista.
              </h2>
            </div>

            <a
              href="/galeria"
              data-route
              class="button button--secondary"
            >
              Explorar galeria
              <span aria-hidden="true">→</span>
            </a>

          </div>

          <div class="school-life-gallery__grid">

            <div class="school-life-gallery__item school-life-gallery__item--wide">
              <img
                src="${schoolLifeImages.momentsLarge}"
                alt="Livros em ambiente conceptual"
                loading="lazy"
              />
            </div>

            <div class="school-life-gallery__item">
              <img
                src="${schoolLifeImages.technology}"
                alt="Tecnologia em ambiente conceptual"
                loading="lazy"
              />
            </div>

            <div class="school-life-gallery__item">
              <img
                src="${schoolLifeImages.projects}"
                alt="Criatividade e projectos em ambiente conceptual"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </section>


      <!-- VÍDEOS -->
      <section class="school-life-video section">

        <div class="container school-life-video__grid">

          <div class="school-life-video__image">

            <img
              src="${schoolLifeImages.video}"
              alt="Ambiente conceptual relacionado com conteúdos educativos"
              loading="lazy"
            />

            <div class="school-life-video__play" aria-hidden="true">
              <span>▶</span>
            </div>

          </div>

          <div class="school-life-video__content">

            <span class="section__eyebrow">
              Vídeos
            </span>

            <h2>
              Algumas histórias também
              podem ser vistas em movimento.
            </h2>

            <p>
              Actividades, eventos e outros momentos poderão
              ser apresentados em vídeo através do sistema
              de comunicação da escola.
            </p>

            <a
              href="/videos"
              data-route
              class="button button--primary"
            >
              Ver vídeos
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </section>


      <!-- COMUNIDADE -->
      <section class="school-life-community section">

        <div class="container school-life-community__grid">

          <div class="school-life-community__image">
            <img
              src="${schoolLifeImages.community}"
              alt="Composição conceptual relacionada com comunidade e aprendizagem"
              loading="lazy"
            />
          </div>

          <div class="school-life-community__content">

            <span class="section__eyebrow">
              Comunidade escolar
            </span>

            <h2>
              Uma escola é feita
              de experiências partilhadas.
            </h2>

            <p>
              A comunicação aproxima a escola das famílias,
              estudantes, professores e de toda a comunidade.
              Esta área poderá apresentar os momentos que
              tornam essa ligação visível.
            </p>

            <a
              href="/contactos"
              data-route
              class="button button--secondary"
            >
              Contactar a escola
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

      </section>


      <!-- CTA -->
      <section class="school-life-cta">

        <div class="container school-life-cta__inner">

          <div>
            <span class="school-life-cta__eyebrow">
              Continue a explorar
            </span>

            <h2>
              Descubra mais da
              experiência Santa Albertina.
            </h2>

            <p>
              Explore notícias, eventos, imagens e vídeos
              publicados pela comunidade escolar.
            </p>
          </div>

          <div class="school-life-cta__actions">

            <a
              href="/noticias"
              data-route
              class="button button--primary"
            >
              Ver notícias
            </a>

            <a
              href="/galeria"
              data-route
              class="button button--secondary"
            >
              Ver galeria
            </a>

          </div>

        </div>

      </section>

    </main>
  `;
}
