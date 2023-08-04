import type { PageLoad } from './[country]/$types';

export const load = (async ({ params }) => {
	return { country: params.country };
}) satisfies PageLoad;
