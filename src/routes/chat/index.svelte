<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import { Message } from '$lib/Message';
	let messages: Array<Message> = [
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(true, 'hey there!'),
		new Message(false, 'hey there!'),
		new Message(false, 'hey there!'),
		new Message(false, 'hey there!'),
		new Message(true, 'hey there!')
	];
</script>

<div class="wrapper">
	<div class="body">
		<Chat imgSrc="https://avatars.githubusercontent.com/u/46494695" {messages} />
	</div>
</div>

<style>
	.wrapper {
		background-color: var(--color-background);
		min-height: 100vh;
		overflow: hidden;
	}

	.body {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		height: 100vh;
	}
</style>
