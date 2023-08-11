<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

Hi from {data.cca3}

<!--
	TODO: Official Name
		  Common Name
		  Region
		  Languages in english
		  Capital
		  Neighbours
-->

<div class="mx-auto my-7 flex max-w-3xl items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
	<div>
		<div>
			<ul class="list-inside">
				<li class="py-6 text-center font-medium">
					<div class="py-2">
						<p class="text-3xl">{data.name.official}</p>
						<p class="text-2xl">{data.name.common}</p>
						<p class="text-m">{data.region}</p>
						<p class="text-m">{data.languages}</p>
						<p class="text-m">{data.capital}</p>
						<p class="text-m">{data.borders}</p>
					</div>
					<div class="py-2">
						<a href={data}><img class="px-56" src={data} alt="" /></a>
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
