<script lang="ts">
</script>

<div class="dialog">
	<div class="body">
		<slot />
	</div>
</div>

<style>
	.dialog {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-width: 24em;
		padding: 2em;
		background-color: white;
		border-radius: 1em;
		box-shadow: 0 1em 2em var(--color-shadow);
	}

	.body {
		max-width: 75%;
	}
</style>
