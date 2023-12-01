<script lang="ts">
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
	import { counter, increment } from '../lib/counter';
</script>

<div class="min-h-screen bg-white dark:bg-black dark:text-white">
	<DarkModeToggle />
	<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<button
		class="rounded-md border-2 border-black px-4 font-medium shadow-md dark:border-white"
		on:click={increment}
	>
		Click me!
	</button>
	<p>Button clicked <span class="font-medium">{$counter}</span> times.</p>
</div>

<style>
</style>
