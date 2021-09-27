
<script>
    import { goto } from "$app/navigation";
    export let tab = "";
</script>

<div class="tabs is-boxed">
    <ul>
        <li class={tab == "resume" ? "is-active" : ""}>
        <a on:click={() => goto("resume")}>
            <span>Résumé</span>
        </a>
        </li>
        <li class={tab == "game-development" ? "is-active" : ""}>
        <a on:click={() => goto("game-development")}>
            <span>Game Development</span>
        </a>
        </li>
        <li class={tab == "web-development" ? "is-active" : ""}>
            <a on:click={() => goto("web-development")}>
            <span>Web Development</span>
        </a>
        </li>
        <li class={tab == "documents" ? "is-active" : ""}>
        <a on:click={() => goto("documents")}>
            <span>Documents</span>
        </a>
        </li>
    </ul>
</div>