
<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  let tab = "";
  let url = null;

  onMount(() => {
    tab = window.location.pathname.split("/").pop();
    url = window.location.pathname;
    if (url.endsWith("/")) {
      url = url.substring(0, url.length-1)
      goto(url)
    }
  });
  
  function goto_tab(tabname) {
    goto("./" + tabname, {noscroll: true, state:{tab: tabname}});
    tab = tabname;
  }
</script>

<div class="container">
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="block">
        <div class="card has-background-light">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img class="is-rounded" src="/avatar.jpg" alt="Avatar">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Magne Tenstad</p>
                <p class="subtitle is-6">@magnetenstad @magneet</p>
              </div>
            </div>
        
            <div class="content">
              Studying Computer Science at NTNU. Teaching assistant.
            </div>
            <div class="buttons is-right">
              <a class="button is-link is-outlined" href="mailto:contact@magne.dev">
                  Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="card has-background-light">
          <div class="card-content">
            <div class="content">
              <h4>Links</h4>
              <a href="https://www.linkedin.com/in/magne-tenstad/">LinkedIn</a> <br>
              <a href="https://github.com/magnetenstad">GitHub</a> <br>
              <a href="https://gitlab.stud.idi.ntnu.no/magneet">GitLab</a> <br>
              <a href="https://store.steampowered.com/search/?developer=Magne%20Tenstad">Steam</a> <br>
              <a href="https://mitsuartemius.itch.io/">Itch.io</a> <br>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <div class="column">
      <div class="tabs is-boxed">
        <ul>
            <li class={tab == "resume" ? "is-active" : ""}>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={() => goto_tab("resume")}>
                <span>Résumé</span>
              </a>
            </li>
            <li class={tab == "apps" ? "is-active" : ""}>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={() => goto_tab("apps")}>
                <span>Apps</span>
              </a>
            </li>
            <li class={tab == "web" ? "is-active" : ""}>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={() => goto_tab("web")}>
                  <span>Web</span>
              </a>
            </li>
            <li class={tab == "games" ? "is-active" : ""}>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click={() => goto_tab("games")}>
                <span>Games</span>
              </a>
            </li>
        </ul>
      </div>

      <slot></slot>

    </div>
  </div>
</div>