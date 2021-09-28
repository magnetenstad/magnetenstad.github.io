<script>
    import Card from "$lib/Card.svelte";
</script>

<div class="columns">
    <div class="column">
        <Card   title="CoderBear"
                img_src="/coderbear.png"
                href="https://store.steampowered.com/app/994360/CoderBear"
                datetime="Jun 2019"
                tags={["Solo", "Paid"]}
        ></Card>
        <Card   title="Hungry Jungle"
                img_src="/hungryjungle.png"
                href="https://mitsuartemius.itch.io/jungle"
                datetime="Apr 2021"
                tags={["Ludum Dare", "Team", "Free", "Web"]}
        ></Card>
    </div>
    <div class="column">
        <Card   title="Void"
                img_src="/void.png"
                href="https://mitsuartemius.itch.io/void"
                datetime="Oct 2019"
                tags={["Ludum Dare", "Solo", "Free"]}
        ></Card>
        <Card   title="Space Run"
                img_src="/spacerun.png"
                href="https://mitsuartemius.itch.io/space-run"
                datetime="Aug 2018"
                tags={["Ludum Dare", "Solo", "Free"]}
        ></Card>
    </div>
</div>