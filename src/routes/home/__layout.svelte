<script>
  import { goto } from "$app/navigation";
  let tab = "resume";

  function goto_tab(tabname) {
    goto(tabname);
    tab = tabname;
  }

</script>

<div class="columns">
  <div class="column is-1"></div>

  <div class="column is-one-fifth">
    <div class="block">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="avatar.jpg" alt="Avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Magne Tenstad</p>
              <p class="subtitle is-6">@magnetenstad</p>
            </div>
          </div>
      
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="card">
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="tabs is-boxed">
      <ul>
          <li class={tab == "resume" ? "is-active" : ""}>
          <a on:click={() => goto_tab("resume")}>
              <span>Résumé</span>
          </a>
          </li>
          <li class={tab == "game-development" ? "is-active" : ""}>
          <a on:click={() => goto_tab("game-development")}>
              <span>Game Development</span>
          </a>
          </li>
          <li class={tab == "web-development" ? "is-active" : ""}>
              <a on:click={() => goto_tab("web-development")}>
              <span>Web Development</span>
          </a>
          </li>
          <li class={tab == "documents" ? "is-active" : ""}>
          <a on:click={() => goto_tab("documents")}>
              <span>Documents</span>
          </a>
          </li>
      </ul>
    </div>

    <slot></slot>
  </div>

  <div class="column is-1"></div>
</div>
