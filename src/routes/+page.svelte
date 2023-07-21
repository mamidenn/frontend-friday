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

	let allCountries : Promise<Country[]> = fetch('https://restcountries.com/v3.1/all?fields=name,flags').then( (result) => result.json());

	let additionalInfoVisible=false;
	function handleClick() 
	{
		additionalInfoVisible = !additionalInfoVisible;
	}

	async function filterCountries(filter: string)
	{		
		return (await allCountries).filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
	}
	let filter = "";
	$: countries = filterCountries(filter)
</script>

<div class="justify-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-7">
	<input 
		class="text-center text-2xl border-none outline-none"
		placeholder="Search..." 
		bind:value={filter} 
	/>
</div>
<div class="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-7">
	<div>
		<div>
			{#await countries then data}
				<ul class="list-inside">
					{#each data as country}
						<li class="font-medium py-6 text-center">
							<div class="py-2">
								<p class="text-2xl">{country.name.common}</p>
								<p class="text-m">({country.name.official})</p>
							</div>
							<div class="py-2">
								<img on:click={handleClick} class="px-56" src={country.flags.png} alt=""/>
							</div>
						</li>
					{/each}
				</ul>
			{/await}
		</div>
	</div>
</div>



<style>
	:global(body) {
        background-color: #e5e7eb;
    }
</style>
