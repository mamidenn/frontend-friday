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


<div class="bg-slate-500 rounded-xl p-5 m-10">
	<div>
		<img
			src={user.picture.large}
			alt="A picture of {user.name.title} {user.name.first} {user.name.last}"
		/>
	</div>

	<h2>{user.name.title} {user.name.first} {user.name.last}</h2>

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

	<div class="h-96">
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
</style>
