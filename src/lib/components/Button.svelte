<script lang="ts">
	export let style: string;
	export let onClick: () => void;
</script>

<button on:click={onClick} {style}>
	<slot />
</button>

<style>
	button {
		border: none;
		font-size: medium;
		padding: 0.5em 1em;
		border-radius: 1em;
		color: white;
		background-color: var(--color-primary);
	}

	button:hover {
		cursor: pointer;
		animation-duration: 0.25s;
		animation-name: button-hover;
		animation-fill-mode: forwards;
	}

	button:active {
		background-color: var(--color-primary-dark);
		animation-duration: 0.2s;
		animation-name: button-click;
	}

	@keyframes button-click {
		from {
			transform: translateY(4px);
		}

		to {
			transform: translateY(0px);
		}
	}

	@keyframes button-hover {
		from {
			transform: translateY(0px);
		}

		to {
			transform: translateY(-4px);
			background-color: var(--color-primary-light);
			box-shadow: 0 4px 1em rgba(var(--color-primary-rgb), 0.5);
		}
	}
</style>
