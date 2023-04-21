<script lang="ts">
	export let selected = false;
	let transition = false;
	$: setTimeout(() => (transition = selected), 0);
</script>

<button
	on:click
	type="button"
	class:selected
	class="relative aspect-square w-12 rounded-full border border-black/10 font-medium transition-all hover:bg-orange-400"
>
	<slot />
	{#if selected}
		<div
			class:expanded={transition}
			class="absolute inset-0 -z-10 rounded-full transition-transform duration-300 ease-linear"
		/>
		<div
			class:expanded2={transition}
			class="transition-color absolute inset-0 -z-10 rounded-full delay-150 duration-500 ease-linear"
		/>
	{/if}
</button>

<style lang="postcss">
	.selected {
		@apply bg-yellow-400;
	}
	.expanded {
		@apply scale-[20];
		@apply bg-amber-100;
	}
	.expanded2 {
		@apply scale-[20];
		@apply bg-white;
	}
</style>
