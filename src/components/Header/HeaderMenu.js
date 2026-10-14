export function initHeaderMenu() {
  const button = document.querySelector(".site-header__menu-button");
  const navigation = document.querySelector("#site-navigation");

  if (!button || !navigation) {
    return;
  }

  const closeMenu = () => {
    navigation.classList.remove("site-navigation--open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("mobile-menu-open");
  };

  const openMenu = () => {
    navigation.classList.add("site-navigation--open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Fechar menu");
    document.body.classList.add("mobile-menu-open");
  };

  const toggleMenu = () => {
    const isOpen = navigation.classList.contains("site-navigation--open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  button.onclick = toggleMenu;

  navigation.onclick = (event) => {
    const link = event.target.closest("a[data-route]");

    if (link) {
      closeMenu();
    }
  };

  window.onresize = () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  };
}
