<script lang="ts">
	import HelloDialog from '$lib/components/HelloDialog.svelte';
	import Portrait from '$lib/components/Portrait.svelte';
	import Button from '$lib/components/Button.svelte';
	import GlobalCss from '$lib/GlobalCss.svelte';
	import { goto } from '$app/navigation';
</script>

<GlobalCss />
<div class="wrapper">
	<HelloDialog>
		<h1>Hey, I'm Magne Tenstad 👋</h1>
		<ul>
			<li>CS student at NTNU</li>
			<li>Proficient game and web developer</li>
			<li>Open to work this summer</li>
		</ul>
		<div class="portrait-wrapper">
			<Portrait
				imgSrc="https://avatars.githubusercontent.com/u/46494695"
				imgAlt="Portrait of Magne Tenstad"
			/>
		</div>
		<br />
		<Button onClick={() => goto('/chat')} style="margin-left: 50%;">Hello! 👋</Button>
	</HelloDialog>
</div>

<style>
	.wrapper {
		background-color: var(--color-background);
		min-height: 100vh;
		overflow: hidden;
	}

	.portrait-wrapper {
		position: fixed;
		left: 65%;
		top: -15%;
		width: 16em;
	}
</style>
