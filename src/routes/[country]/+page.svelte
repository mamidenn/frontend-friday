<script lang="ts">
	import type { Country } from '$lib/country';
	import type { PageData } from './$types';
	export let data: PageData;

</script>

<div class="mx-auto my-7 flex max-w-3xl items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
	<div>
		<div>
			<ul class="list-inside">
				<li class="py-6 text-center font-medium">
					<div class="py-2">
						<p class="text-3xl">{data.rawCountry.name.official}</p>
						<p class="text-2xl">{data.rawCountry.name.common}</p>
						<p class="text-m">Region: {data.rawCountry.region}</p>
						<p class="text-m">Languages: {Object.values(data.rawCountry.languages).join(', ')}</p>
						<p class="text-m">Capital: {data.rawCountry.capital}</p>
						{#if data.rawCountry.borders}
							<p class="text-m">
								Borders:
								{#each data.rawCountry.borders as neighbor}
									{#await getCountry(neighbor) then countryName}
										<span><a href={neighbor}>{countryName}</a> </span>
									{/await}
								{/each}
							</p>
						{/if}
					</div>
					<div class="py-2">
						<img class="px-56" src={data.rawCountry.flags.svg.toString()} alt="" />
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
