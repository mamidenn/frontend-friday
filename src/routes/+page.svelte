<script lang="ts">
	import { counter, increment } from '../lib/counter';

	let name;
	async function getData(){
		name = fetch("https://restcountries.com/v3.1/all?fields=name")
	}
</script>

{#await await(await fetch("https://restcountries.com/v3.1/all?fields=name")).json()}
{:then data}
<p>{data}</p>
{:catch}
{/await}

<style>
</style>
