<script lang="ts">
	export let imgSrc: string;
	export let imgAlt: string;
</script>

<img class="portrait" src={imgSrc} alt={imgAlt} />

<style>
	img.portrait {
		border-radius: 50%;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
		width: 100%;
	}
</style>
