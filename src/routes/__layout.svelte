
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light">
            Give Feedback
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<div style="min-height: 100vh; padding-bottom:20pt;">
  <slot></slot>
</div>


<footer class="footer">
  <div class="content has-text-centered">
    <p>
      Site by Magne Tenstad.
      Built with <a href="https://kit.svelte.dev/">SvelteKit</a>
      and <a href="https://bulma.io">Bulma</a>.
      Hosted by <a href="https://pages.github.com/">GitHub</a>.
    </p>
  </div>
</footer>