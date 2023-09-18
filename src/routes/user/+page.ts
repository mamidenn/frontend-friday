import { getUser } from '$lib/user';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return { user: await getUser(fetch) };
}) satisfies PageLoad;
