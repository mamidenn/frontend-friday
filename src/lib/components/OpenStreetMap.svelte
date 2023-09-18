<script lang="ts">
	import 'ol/ol.css';
	import { onMount } from 'svelte';
	import { Feature, Map, View } from 'ol';
	import { Tile, Vector } from 'ol/layer';
	import { OSM, Vector as VectorSource } from 'ol/source';
	import { useGeographic } from 'ol/proj';
	import { Point } from 'ol/geom';
	import type { StyleLike } from 'ol/style/Style';
	import type { FlatStyleLike } from 'ol/style/flat';

	export let coordinates: { longitude: number; latitude: number };
	export let zoom = 12;
	export let markerStyle: StyleLike | FlatStyleLike = {
		'circle-radius': 10,
		'circle-stroke-color': [255, 0, 0],
		'circle-fill-color': [255, 0, 0, 127],
		'circle-stroke-width': 1.5
	};
	let target: HTMLDivElement;

	onMount(async () => {
		const { longitude, latitude } = coordinates;

		useGeographic();
		new Map({
			target,
			layers: [
				new Tile({ source: new OSM() }),
				new Vector({
					source: new VectorSource({
						features: [new Feature({ geometry: new Point([longitude, latitude]) })]
					}),
					style: markerStyle
				})
			],
			view: new View({ center: [longitude, latitude], zoom })
		});
	});
</script>

<div bind:this={target} class="h-full w-full" />
