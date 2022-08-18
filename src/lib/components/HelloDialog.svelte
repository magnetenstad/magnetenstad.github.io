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
		max-width: 24rem;
		padding: 2rem;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
	}

	.body {
		max-width: 75%;
	}
</style>
