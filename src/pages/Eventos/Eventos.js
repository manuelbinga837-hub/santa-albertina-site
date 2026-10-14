import { getPublicEvents } from "../../services/events.js";

const DEFAULT_EVENT_IMAGE =
  "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200";

let eventItems = [];
let eventsRequestId = 0;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatEventDate(value) {
  if (!value) return "Data a confirmar";

  const match = String(value).match(
    /^(\d{4})-(\d{2})-(\d{2})/
  );

  if (!match) return String(value);

  const [, year, month, day] = match;

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    12
  );

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  const formatted = date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function formatEventTime(startTime, endTime) {
  if (!startTime && !endTime) {
    return "Horário a confirmar";
  }

  if (startTime && endTime) {
    return `${startTime} – ${endTime}`;
  }

  return startTime || endTime;
}

function normalizeEvent(event) {
  return {
    id: event.id,
    title: event.title || "Evento escolar",
    date: formatEventDate(event.event_date),
    time: formatEventTime(event.start_time, event.end_time),
    location: event.location || "Local a confirmar",
    image: event.cover_url || DEFAULT_EVENT_IMAGE,
    description:
      event.description ||
      event.summary ||
      event.content ||
      "Sem descrição disponível."
  };
}

function renderEventCards() {
  const grid = document.querySelector(".events-grid");

  if (!grid) return;

  if (!eventItems.length) {
    grid.innerHTML = `
      <div class="events-empty">
        <p>Nenhum evento disponível neste momento.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = eventItems
    .map(
      (event, index) => `
        <button
          type="button"
          class="event-card"
          data-event-index="${index}"
        >
          <div class="event-card-image">
            <img
              src="${escapeHtml(event.image)}"
              alt="${escapeHtml(event.title)}"
              loading="lazy"
            >
          </div>

          <div class="event-card-content">
            <h3>${escapeHtml(event.title)}</h3>

            <div class="event-card-meta">
              <span>${escapeHtml(event.date)}</span>
              <span>${escapeHtml(event.time)}</span>
              <span>${escapeHtml(event.location)}</span>
            </div>

            <p>${escapeHtml(event.description)}</p>
          </div>
        </button>
      `
    )
    .join("");

  grid.querySelectorAll("[data-event-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.eventIndex);
      window.openSchoolEvent(index);
    });
  });
}

function loadPublicEvents() {
  const requestId = ++eventsRequestId;

  getPublicEvents()
    .then((events) => {
      if (requestId !== eventsRequestId) return;

      eventItems = events.map(normalizeEvent);
      renderEventCards();
    })
    .catch((error) => {
      if (requestId !== eventsRequestId) return;

      console.error("Erro ao carregar eventos:", error);

      const grid = document.querySelector(".events-grid");

      if (!grid) return;

      grid.innerHTML = `
        <div class="events-empty">
          <p>Não foi possível carregar os eventos.</p>
        </div>
      `;
    });
}

export function Eventos() {
  eventItems = [];

  const html = `
    <main class="events-page">

      <section class="events-hero">
        <div class="events-hero-overlay"></div>

        <div class="events-hero-content">
          <span class="events-hero-eyebrow">Santa Albertina</span>

          <h1>Eventos</h1>

          <p>
            Acompanhe os principais eventos e actividades
            da nossa comunidade escolar.
          </p>
        </div>
      </section>

      <section class="events-section">
        <div class="events-container">

          <div class="events-section-heading">
            <span class="section-eyebrow">Agenda</span>

            <h2>Eventos da Santa Albertina</h2>

            <p>
              Consulte os próximos eventos e actividades
              da nossa escola.
            </p>
          </div>

          <div class="events-grid">
            <div class="events-empty">
              <p>Carregando eventos...</p>
            </div>
          </div>

        </div>
      </section>

      <div
        id="event-lightbox"
        class="event-lightbox"
        aria-hidden="true"
      >
        <div class="event-lightbox-backdrop"></div>

        <div
          class="event-lightbox-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-lightbox-title"
        >

          <button
            type="button"
            class="event-lightbox-close"
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            type="button"
            class="event-lightbox-prev"
            aria-label="Evento anterior"
          >
            ‹
          </button>

          <div class="event-lightbox-image-wrapper">
            <img
              id="event-lightbox-image"
              src=""
              alt=""
            >
          </div>

          <div class="event-lightbox-info">

            <span id="event-lightbox-counter"></span>

            <h2 id="event-lightbox-title"></h2>

            <div class="event-lightbox-meta">
              <span id="event-lightbox-date"></span>
              <span id="event-lightbox-time"></span>
              <span id="event-lightbox-location"></span>
            </div>

            <p id="event-lightbox-description"></p>

          </div>

          <button
            type="button"
            class="event-lightbox-next"
            aria-label="Próximo evento"
          >
            ›
          </button>

        </div>
      </div>

    </main>
  `;

  setTimeout(loadPublicEvents, 0);

  return html;
}

window.schoolEventCurrentIndex = 0;

window.openSchoolEvent = function (index) {
  if (!eventItems.length) return;

  const event = eventItems[index];

  if (!event) return;

  window.schoolEventCurrentIndex = index;

  const lightbox = document.getElementById("event-lightbox");

  if (!lightbox) return;

  const image = document.getElementById("event-lightbox-image");
  const title = document.getElementById("event-lightbox-title");
  const date = document.getElementById("event-lightbox-date");
  const time = document.getElementById("event-lightbox-time");
  const location = document.getElementById(
    "event-lightbox-location"
  );
  const description = document.getElementById(
    "event-lightbox-description"
  );
  const counter = document.getElementById(
    "event-lightbox-counter"
  );

  if (image) {
    image.src = event.image;
    image.alt = event.title;
  }

  if (title) {
    title.textContent = event.title;
  }

  if (date) {
    date.textContent = event.date;
  }

  if (time) {
    time.textContent = event.time;
  }

  if (location) {
    location.textContent = event.location;
  }

  if (description) {
    description.textContent = event.description;
  }

  if (counter) {
    counter.textContent =
      `${index + 1} / ${eventItems.length}`;
  }

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("event-lightbox-open");
};

function closeEventLightbox() {
  const lightbox = document.getElementById("event-lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("event-lightbox-open");

  const image = document.getElementById("event-lightbox-image");

  if (image) {
    image.src = "";
  }
}

function showPreviousEvent() {
  if (!eventItems.length) return;

  const current = window.schoolEventCurrentIndex;

  const previous =
    (current - 1 + eventItems.length) %
    eventItems.length;

  window.openSchoolEvent(previous);
}

function showNextEvent() {
  if (!eventItems.length) return;

  const current = window.schoolEventCurrentIndex;

  const next =
    (current + 1) % eventItems.length;

  window.openSchoolEvent(next);
}

function setupEventLightbox() {
  const lightbox = document.getElementById("event-lightbox");

  if (!lightbox || lightbox.dataset.initialized === "true") {
    return;
  }

  lightbox.dataset.initialized = "true";

  const closeButton = lightbox.querySelector(
    ".event-lightbox-close"
  );

  const previousButton = lightbox.querySelector(
    ".event-lightbox-prev"
  );

  const nextButton = lightbox.querySelector(
    ".event-lightbox-next"
  );

  const backdrop = lightbox.querySelector(
    ".event-lightbox-backdrop"
  );

  closeButton?.addEventListener(
    "click",
    closeEventLightbox
  );

  previousButton?.addEventListener(
    "click",
    showPreviousEvent
  );

  nextButton?.addEventListener(
    "click",
    showNextEvent
  );

  backdrop?.addEventListener(
    "click",
    closeEventLightbox
  );
}

document.addEventListener("keydown", (event) => {
  const lightbox = document.getElementById("event-lightbox");

  if (!lightbox?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeEventLightbox();
  }

  if (event.key === "ArrowLeft") {
    showPreviousEvent();
  }

  if (event.key === "ArrowRight") {
    showNextEvent();
  }
});

setTimeout(() => {
  setupEventLightbox();
}, 0);
