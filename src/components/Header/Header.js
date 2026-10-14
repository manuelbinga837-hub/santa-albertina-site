const navigationItems = [
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

export function Header() {
  return `
    <header class="site-header">
      <div class="site-header__container">

        <a
          class="site-header__brand"
          href="/"
          data-route
          aria-label="Santa Albertina - Início"
        >
          <span class="site-header__logo" aria-hidden="true">
            <span class="site-header__logo-letter">S</span>
            <span class="site-header__logo-letter">A</span>
          </span>

          <span class="site-header__brand-name">
            Santa Albertina
          </span>
        </a>

        <div class="site-header__actions">

          <a
            class="site-header__communication"
            href="/comunicacao"
            data-route
          >
            Comunicação
          </a>

          <button
            class="site-header__menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="site-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        <nav
          id="site-navigation"
          class="site-navigation"
          aria-label="Navegação principal"
        >
          <ul class="site-navigation__list">
            ${navigationItems.map((item) => `
              <li class="site-navigation__item">
                <a
                  class="site-navigation__link"
                  href="${item.href}"
                  data-route
                >
                  ${item.label}
                </a>
              </li>
            `).join("")}
          </ul>
        </nav>

      </div>
    </header>
  `;
}
