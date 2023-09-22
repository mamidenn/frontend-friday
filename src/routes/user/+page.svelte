<script lang="ts">
	import OpenStreetMap from '$lib/components/OpenStreetMap.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user } = data);
	$: ({ coordinates } = user.location);
</script>

<svelte:head>
	<title>User</title>
</svelte:head>

<div class="m-10 justify-center rounded-xl bg-slate-500 p-5 text-white">
	<h2 class="text-center mb-5 text-4xl">{user.name.title} {user.name.first} {user.name.last}</h2>
	<div class="flex flex-row gap-10">
		<div class="flex flex-col">
			<img
				src={user.picture.large}
				alt="A picture of {user.name.title} {user.name.first} {user.name.last}"
			/>
		</div>

		<div class="flex flex-col ml-5">
			<table>
				<tr>
					<th>Location</th>
					<td>{user.location.city}, {user.location.state}, {user.location.country}</td>
				</tr>
				<tr>
					<th>Email</th>
					<td>{user.email}</td>
				</tr>
				<tr>
					<th>Phone</th>
					<td>{user.phone}</td>
				</tr>
				<tr>
					<th>Mobile</th>
					<td>{user.cell}</td>
				</tr>
				<tr>
					<th>Date Of Birth</th>
					<td>{user.dob.date.toDateString()} ({user.dob.age})</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="h-96 mt-5">
		<OpenStreetMap
			{coordinates}
			markerStyle={{
				'circle-radius': 10,
				'circle-stroke-color': [255, 0, 127],
				'circle-stroke-width': 2
			}}
			zoom={12}
		/>
	</div>
</div>

<style lang="postcss">
	th {
		@apply text-left;
		@apply pr-6;
	}
</style>
