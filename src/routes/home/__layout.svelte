<script>
  import { goto } from "$app/navigation";
</script>

<div class="tabs is-centered is-boxed">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <div on:click={() => goto("/videos")}>
        <a>
          <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
          <span>Documents</span>
        </a>
      </div>
    </li>
  </ul>
</div>

<slot></slot>
