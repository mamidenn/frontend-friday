<script lang="ts">
	import type { Country } from '$lib/country';
	import type { PageData } from './$types';
	export let data: PageData;

	async function getCountry(countryShortcut : string) : Promise<string>
	{
		const fetchedCountry = fetch('https://restcountries.com/v3.1/alpha/' + countryShortcut).then(
			(result) => result.json()
		);
		return ((await fetchedCountry)[0] as Country).name.official;
	}
	
</script>

<div class="mx-auto my-7 flex max-w-3xl items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
	<div>
		<div>
			<ul class="list-inside">
				<li class="py-6 text-center font-medium">
					<div class="py-2">
						<p class="text-3xl">{data.name.official}</p>
						<p class="text-2xl">{data.name.common}</p>
						<p class="text-m">Region: {data.region}</p>
						<p class="text-m">Languages: {Object.values(data.languages).join(', ')}</p>
						<p class="text-m">Capital: {data.capital}</p>
						<p class="text-m">
							Borders:
							{#each data.borders as neighbor}
								<span><a href="{neighbor}">{getCountry(neighbor)}</a> </span>
							{/each}
						</p>
					</div>
					<div class="py-2">
						<img class="px-56" src={data.flags.svg.toString()} alt="" />
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #e5e7eb;
	}
</style>
