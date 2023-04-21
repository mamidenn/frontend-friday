<script lang="ts">
	import RatingButton from '$lib/components/RatingButton.svelte';
	let rating: number;
</script>

<div class="flex h-screen items-center justify-center bg-gray-50">
	<div
		class="relative isolate flex w-min flex-col overflow-hidden rounded-3xl border border-black/5 p-4 shadow-2xl"
	>
		<svg
			viewBox="-81 -81 162 162"
			class="h-12 w-12 rounded-full border bg-black fill-yellow-500 p-2"
		>
			<polygon points="0,-81 48,66 -77,-25 77,-25 -48,66" />
		</svg>
		<h2 class="mb-4 mt-2 text-2xl font-bold">How do you like Frontend Friday?</h2>
		<p class="font-light">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur amet ratione
			reiciendis, neque culpa repudiandae repellendus possimus velit laudantium, placeat omnis rem.
			Quam tempore quas, porro aliquam non est dolor?
		</p>
		<div class="my-4 flex flex-row gap-2">
			{#each [1, 2, 3, 4, 5] as number}
				<RatingButton on:click={() => (rating = number)} selected={rating === number}>
					{number}
				</RatingButton>
			{/each}
		</div>
		<button
			on:click={() => console.log('You submitted ' + rating + '.')}
			type="submit"
			class=" h-12 w-full rounded-3xl border border-black/10 bg-orange-400 font-medium"
		>
			Submit
		</button>
	</div>
</div>

<style lang="postcss">
</style>
