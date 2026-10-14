export function PublicLayout(content = "") {
  return `
    <div class="public-layout">
      <header id="site-header"></header>

      <main id="site-main">
        ${content}
      </main>

      <footer id="site-footer"></footer>
    </div>
  `;
}
