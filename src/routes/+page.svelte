<script lang="ts">
	interface Country {
		name: {
			common: string;
			official: string;
		};
		flags: {
			png: string;
		};
		capital: {};
		cca3: string;
	}

	let allCountries: Promise<Country[]> = fetch('https://restcountries.com/v3.1/all').then(
		(result) => result.json()
	);

	async function filterCountries(filter: string) {
		return (await allCountries).filter((country) =>
			country.name.common.toLowerCase().includes(filter.toLowerCase())
		);
	}
	let filter = '';
	$: countries = filterCountries(filter);
</script>

<div
	class="mx-auto my-7 flex max-w-sm items-center justify-center space-x-4 rounded-xl bg-white p-6 shadow-lg"
>
	<input
		class="border-none text-center text-2xl outline-none"
		placeholder="Search..."
		bind:value={filter}
	/>
</div>
<div class="mx-auto my-7 flex max-w-3xl items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
	<div>
		<div>
			{#await countries then data}
				<ul class="list-inside">
					{#each data as country}
						<li class="py-6 text-center font-medium">
							<div class="py-2">
								<p class="text-2xl">{country.name.common}</p>
								<p class="text-m">({country.name.official})</p>
							</div>
							<div class="py-2">
								<a href={country.cca3}><img class="px-56" src={country.flags.png} alt="" /></a>
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
