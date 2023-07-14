<script lang="ts">
	interface Country {
		name: {
			common: string,
			official: string
		},
		flags: {
			png: string
		}
	}

	async function getData(filter: string)
	{
		let countries : Country[] = await fetch('https://restcountries.com/v3.1/all?fields=name,flags').then( (result) => result.json());
		return countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
	}
	let filter = "";
	$: countries = getData(filter)
</script>

<div>
	<input bind:value={filter} />
</div>

{#await countries then data}
	<ul class="list-inside list-disc border-2">
		{#each data as country}
			<li>{country.name.common} : official {country.name.official} <img src={country.flags.png} alt=""/></li>
		{/each}
	</ul>
{/await}

<style>
</style>
