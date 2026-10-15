const BASE_PATH = "/santa-albertina-site";

const routes = {
  "/": "Home",
  "/sobre": "Sobre",
  "/academico": "Academico",
  "/vida-escolar": "VidaEscolar",
  "/noticias": "Noticias",
  "/eventos": "Eventos",
  "/galeria": "Galeria",
  "/videos": "Videos",
  "/contactos": "Contactos",
  "/comunicacao": "Comunicacao"
};

const dynamicRoutes = [
  { pattern: /^\/noticias\/([^/]+)$/, type: "NoticiaDetalhe" },
  { pattern: /^\/eventos\/([^/]+)$/, type: "EventoDetalhe" },
  { pattern: /^\/galeria\/([^/]+)$/, type: "GaleriaDetalhe" },
  { pattern: /^\/videos\/([^/]+)$/, type: "VideoDetalhe" }
];

export function getCurrentPath() {
  let path = window.location.pathname;

  if (path === BASE_PATH || path === `${BASE_PATH}/`) {
    return "/";
  }

  if (path.startsWith(`${BASE_PATH}/`)) {
    path = path.slice(BASE_PATH.length);
  }

  return path || "/";
}

export function getRoute(path = getCurrentPath()) {
  if (routes[path]) {
    return {
      type: routes[path],
      params: {}
    };
  }

  for (const route of dynamicRoutes) {
    const match = path.match(route.pattern);

    if (match) {
      return {
        type: route.type,
        params: {
          slug: match[1]
        }
      };
    }
  }

  return null;
}

export function navigateTo(path) {
  if (path === getCurrentPath()) {
    return;
  }

  const destination = `${BASE_PATH}${path === "/" ? "/" : path}`;

  window.history.pushState({}, "", destination);

  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function initRouter(onRouteChange) {
  const handleRouteChange = () => {
    onRouteChange(getCurrentPath(), getRoute());
  };

  window.addEventListener("popstate", handleRouteChange);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");

    if (!link) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("/")) {
      return;
    }

    event.preventDefault();

    navigateTo(href);
  });

  handleRouteChange();
}