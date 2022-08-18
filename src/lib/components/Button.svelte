<script lang="ts">
	export let style: string;
	export let onClick: () => void;
</script>

<button on:click={onClick} {style}>
	<slot />
</button>

<style>
	:global button {
		border: none;
		font-size: medium;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		color: white;
		background-color: rgb(252, 159, 82);
	}

	:global button:hover {
		cursor: pointer;
		animation-duration: 0.25s;
		animation-name: button-hover;
		animation-fill-mode: forwards;
	}

	:global button:active {
		background-color: rgb(243, 147, 91);
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
			background-color: rgb(255, 179, 92);
		}
	}
</style>
