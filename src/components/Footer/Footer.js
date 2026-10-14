const footerNavigation = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Académico", href: "/academico" },
  { label: "Vida Escolar", href: "/vida-escolar" },
  { label: "Notícias", href: "/noticias" },
  { label: "Eventos", href: "/eventos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Vídeos", href: "/videos" },
  { label: "Contactos", href: "/contactos" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">

      <div class="site-footer__main">
        <div class="site-footer__container">

          <div class="site-footer__brand">

            <a
              href="/"
              data-route
              class="site-footer__brand-link"
              aria-label="Santa Albertina - Início"
            >
              <span class="site-footer__logo" aria-hidden="true">
                <span>S</span>
                <span>A</span>
              </span>

              <span class="site-footer__brand-name">
                Santa Albertina
              </span>
            </a>

            <p class="site-footer__description">
              Educação, conhecimento e formação para construir um futuro melhor.
            </p>

          </div>

          <nav
            class="site-footer__navigation"
            aria-label="Navegação do rodapé"
          >
            <h2 class="site-footer__title">
              Navegação
            </h2>

            <ul class="site-footer__links">
              ${footerNavigation.map((link) => `
                <li>
                  <a href="${link.href}" data-route>
                    ${link.label}
                  </a>
                </li>
              `).join("")}
            </ul>
          </nav>

          <div class="site-footer__location">

            <h2 class="site-footer__title">
              Onde estamos
            </h2>

            <address class="site-footer__address">
              <p>Alfa 5</p>
              <p>Município de Kazenga</p>
              <p>Província de Luanda</p>
              <p>Angola</p>
            </address>

            <a
              href="/contactos"
              data-route
              class="site-footer__contact-link"
            >
              Ver contactos
            </a>

          </div>

        </div>
      </div>

      <div class="site-footer__bottom">
        <div class="site-footer__bottom-container">

          <p>
            © ${currentYear} Santa Albertina.
            Todos os direitos reservados.
          </p>

          <p>
            Luanda, Angola
          </p>

        </div>
      </div>

    </footer>
  `;
}
