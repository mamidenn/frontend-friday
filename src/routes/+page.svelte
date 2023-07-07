<script lang="ts">
	function getData()
	{
		return fetch('https://restcountries.com/v3.1/all?fields=name,flags').then( (result) => result.json())
	}
</script>

{#await getData() then data}
	<ul class="list-inside list-disc border-2">
		{#each data as country}
			<li>{country.name.common} : official {country.name.official} <img src={country.flags.png} alt=""/></li>
		{/each}
	</ul>
{/await}

<style>
</style>
