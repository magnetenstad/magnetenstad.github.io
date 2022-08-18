<script lang="ts">
	import type { Message } from '$lib/Message';

	export let imgSrc: string;
	export let messages: Array<Message>;
</script>

<div class="window">
	<div class="scroll-wrapper">
		<div class="messages-wrapper">
			{#each messages as message, i}
				{#if message.incoming}
					<div class="message message-left">
						{#if !messages[i + 1]?.incoming ?? false}
							<img class="message-img" src={imgSrc} alt="" />
						{/if}
						<p>{message.text}</p>
					</div>
				{:else}
					<div class="message message-right">
						<p class="user">{message.text}</p>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<input class="text-input" />
</div>

<style>
	.window {
		width: 80%;
		height: 80%;
		max-width: 25em;

		display: flex;
		flex-direction: column;
		justify-content: end;

		background-color: var(--color-background);
		padding: 1em;
		margin: 2em auto;
		border-radius: 2em;
		box-shadow: 0em 1em 2em var(--color-shadow);
	}

	.scroll-wrapper {
		overflow: auto;
	}

	.scroll-wrapper::-webkit-scrollbar {
		display: none;
	}

	.messages-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	.message {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0.5em;
		max-width: 60%;
	}

	.message-left {
		align-self: flex-start;
	}

	.message-right {
		align-self: flex-end;
	}

	p {
		background-color: white;
		border-radius: 2em;
		box-shadow: 0em 0.5em 1em var(--color-shadow);
		padding: 0.5em 1em;
		margin: 0;
		margin-left: 1em;
		height: min-content;
	}

	p.user {
		background-color: var(--color-primary);
		color: white;
	}

	.message-img {
		flex: 0;
		width: 3em;
		height: 3em;
		border-radius: 2em;
		box-shadow: 0em 0.5em 1em var(--color-shadow);
	}

	.text-input {
		flex: 0;
		width: 90%;
		min-height: 2em;
		outline: none;
		border-radius: 2em;
		border-style: solid;
		border-color: transparent;
		padding: 0em 1em;
		margin: 1em 0;
	}

	.text-input:focus {
		border-color: var(--color-primary);
	}
</style>
