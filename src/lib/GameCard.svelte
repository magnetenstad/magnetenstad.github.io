<script>
    export let title = "Untitled";
    export let img_src = "https://bulma.io/images/placeholders/1280x960.png";
    export let img_alt = title + " Cover";
    export let href = ".";
    export let datetime = "";
    export let tags = [];
    let button_text = "Play";
    if (href.includes("steam")) {
        button_text += " on Steam"
    }
    if (href.includes("itch")) {
        button_text += " on Itch"
    }
</script>

<div class="block">
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <img src={img_src} alt={img_alt}>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <p class="title is-4">{title}</p>
                    <p class="subtitle is-6"><time {datetime}>{datetime}</time></p>
                </div>
                <div class="media-right">
                    <div class="tags">
                        {#each tags as tag, i}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="content">
                <!-- Content -->
            </div>
            <a {href} class="button is-link">{button_text}</a>
        </div>
    </div>
</div>
