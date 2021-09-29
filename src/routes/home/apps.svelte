<script>
    import Card from "$lib/Card.svelte";
</script>

<div class="columns">
    <div class="column">
        <Card   title="Streker"
                img_src="/streker.png"
                href="http://streker.no"
                datetime="Aug 2020"
                tags={["Godot", "Branchlet ANS"]}
        ></Card>
    </div>
    <div class="column">
        <Card   title="Pixel Editor"
                img_src="/pixel.png"
                href="https://github.com/magnetenstad/pixel"
                datetime="Apr 2021"
                tags={["Java", "JavaFX"]}
        ></Card>
    </div>
</div>