<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ user } = data);
</script>

<svelte:head>
	<title>User</title>
</svelte:head>

<img
	src={user.picture.large}
	alt="A picture of {user.name.title} {user.name.first} {user.name.last}"
/>

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

<style lang="postcss">
</style>
