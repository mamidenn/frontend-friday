<script lang="ts">
	import { json } from '@sveltejs/kit';
	import { counter, increment } from '../lib/counter';

	let name;
	async function getData() {
		name = fetch('https://restcountries.com/v3.1/all?fields=name');
	}
</script>

{#await fetch('https://restcountries.com/v3.1/all?fields=name').then( (result) => result.json() ) then data}
	<ul class="list-inside list-disc border-2">
		{#each data as country}
			<li>{country.name.common} : official {country.name.official}</li>
		{/each}
	</ul>

	<p>{data[0]}</p>
	<p>{JSON.stringify(data)}</p>
{/await}

<style>
</style>
