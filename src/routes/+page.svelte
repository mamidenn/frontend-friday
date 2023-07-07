<script lang="ts">
	import { counter, increment } from '../lib/counter';

	let name = fetch("https://restcountries.com/v3.1/all?fields=name")

	name.
</script>

<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class="rounded-md border-2 border-black px-4 font-medium shadow-md" on:click={increment}>
	Click me!
</button>
<p>Button clicked <span class="font-medium">{$counter}</span> times.</p>

{#await}
{/await}

<style>
</style>
