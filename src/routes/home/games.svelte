<script>
    import GameCard from "$lib/GameCard.svelte";
</script>

<div class="columns">
    <div class="column">
        <GameCard   title="CoderBear"
                    img_src="/coderbear.png"
                    href="https://store.steampowered.com/app/994360/CoderBear"
                    datetime="Jun 2019"
                    tags={["Solo", "Paid"]}
        ></GameCard>
        <GameCard   title="Hungry Jungle"
                    img_src="/hungryjungle.png"
                    href="https://mitsuartemius.itch.io/jungle"
                    datetime="Apr 2021"
                    tags={["Ludum Dare", "Team", "Free", "Web"]}
        ></GameCard>
    </div>
    <div class="column">
        <GameCard   title="Void"
                    img_src="/void.png"
                    href="https://mitsuartemius.itch.io/void"
                    datetime="Oct 2019"
                    tags={["Ludum Dare", "Solo", "Free"]}
        ></GameCard>
        <GameCard   title="Space Run"
                    img_src="/spacerun.png"
                    href="https://mitsuartemius.itch.io/space-run"
                    datetime="Aug 2018"
                    tags={["Ludum Dare", "Solo", "Free"]}
        ></GameCard>
    </div>
</div>