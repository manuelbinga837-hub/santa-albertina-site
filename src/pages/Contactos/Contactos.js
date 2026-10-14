export function Contactos() {
  return `
    <div class="contacts-page">

      <section class="contacts-hero">
        <div class="contacts-hero__container container">

          <div class="contacts-hero__content">

            <span class="contacts-hero__eyebrow">
              Contactos
            </span>

            <h1 class="contacts-hero__title">
              Estamos aqui para
              <span>ouvir e ajudar.</span>
            </h1>

            <p class="contacts-hero__description">
              Entre em contacto com a Santa Albertina para
              esclarecer dúvidas, enviar uma mensagem ou
              obter mais informações.
            </p>

          </div>

          <div class="contacts-hero__visual">
            <div class="contacts-hero__image-frame">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/08/05/39/communication-6605648_1280.jpg"
                alt="Imagem conceptual de um smartphone e diferentes formas de comunicação"
              />

              <div
                class="contacts-hero__image-overlay"
                aria-hidden="true"
              ></div>

              <div
                class="contacts-hero__visual-label"
                aria-hidden="true"
              >
                <span>SA</span>
                <small>Comunicação · Contacto</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="contacts-content section">

        <div class="contacts-content__container container">

          <div class="contacts-grid">

            <div class="contacts-information">

              <span class="section__eyebrow">
                Onde estamos
              </span>

              <h2>
                Visite-nos
              </h2>

              <p>
                A Santa Albertina está localizada em:
              </p>

              <address class="contacts-address">

                <div class="contacts-address__item">
                  <strong>Localização</strong>
                  <span>Alfa 5</span>
                </div>

                <div class="contacts-address__item">
                  <strong>Município</strong>
                  <span>Kazenga</span>
                </div>

                <div class="contacts-address__item">
                  <strong>Província</strong>
                  <span>Luanda</span>
                </div>

                <div class="contacts-address__item">
                  <strong>País</strong>
                  <span>Angola</span>
                </div>

              </address>

            </div>

            <div class="contacts-form-wrapper">

              <div class="contacts-form-heading">

                <span class="section__eyebrow">
                  Fale connosco
                </span>

                <h2>
                  Envie uma mensagem
                </h2>

                <p>
                  Preencha o formulário e envie a sua
                  mensagem para a escola.
                </p>

              </div>

              <form
                class="contacts-form"
                id="contacts-form"
              >

                <div class="contacts-form__row">

                  <div class="contacts-form__field">

                    <label for="contact-name">
                      Nome
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="O seu nome"
                      autocomplete="name"
                      required
                    />

                  </div>

                  <div class="contacts-form__field">

                    <label for="contact-contact">
                      Contacto ou e-mail
                    </label>

                    <input
                      id="contact-contact"
                      name="contact"
                      type="text"
                      placeholder="Contacto ou e-mail"
                      autocomplete="email"
                      required
                    />

                  </div>

                </div>

                <div class="contacts-form__field">
                  <label for="contact-email">E-mail (opcional)</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="O seu endereço de e-mail"
                    autocomplete="email"
                  />
                </div>

                <div class="contacts-form__field">

                  <label for="contact-subject">
                    Assunto
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Assunto da mensagem"
                    required
                  />

                </div>

                <div class="contacts-form__field">

                  <label for="contact-message">
                    Mensagem
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="7"
                    placeholder="Escreva a sua mensagem..."
                    required
                  ></textarea>

                </div>

                <button
                  class="contacts-form__submit"
                  type="submit"
                >
                  Enviar mensagem
                </button>

                <p
                  class="contacts-form__status"
                  id="contacts-form-status"
                  aria-live="polite"
                ></p>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  `;
}


export function setupContactForm() {
  const form = document.querySelector("#contacts-form");
  const status = document.querySelector("#contacts-form-status");

  if (!form || !status || form.dataset.apiReady === "true") return;
  form.dataset.apiReady = "true";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const button = form.querySelector('[type="submit"]');
    const originalText = button?.textContent || "Enviar mensagem";

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      contact: String(formData.get("contact") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    status.textContent = "A enviar a sua mensagem...";
    status.setAttribute("role", "status");
    if (button) {
      button.disabled = true;
      button.textContent = "A enviar...";
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || result.error || "Não foi possível enviar a mensagem."
        );
      }

      status.textContent = result.message || "Mensagem enviada com sucesso!";
      status.dataset.state = "success";
      form.reset();
    } catch (error) {
      status.textContent =
        error.message === "Failed to fetch"
          ? "Não foi possível contactar o servidor. Confirme se o backend está ligado."
          : (error.message || "Ocorreu um erro ao enviar a mensagem.");
      status.dataset.state = "error";
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  });
}
