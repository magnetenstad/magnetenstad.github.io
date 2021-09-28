<script>
    import Card from "$lib/Card.svelte";
</script>

<div class="columns">
    <div class="column">
        <Card   title="Poll.stream"
                img_src="/pollstream.png"
                href="https://poll.stream"
                datetime="Jun 2021"
                tags={["JavaScript", "Svelte", "Firebase"]}
        ></Card>
    </div>
    <div class="column">
        <Card   title="Groceries"
                img_src="/groceries.png"
                href="https://kosi.dev/groceries"
                datetime="Oct 2020"
                tags={["JavaScript", "HTML", "CSS"]}
        ></Card>
    </div>
</div>