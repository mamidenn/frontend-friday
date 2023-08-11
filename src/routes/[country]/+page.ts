import type { PageLoad } from './$types';
import type { Country } from '$lib/country';

export const load = (async ({ params }) => {
	const fetchedCountry = fetch('https://restcountries.com/v3.1/alpha/' + params.country).then(
		(result) => result.json()
	);
	return (await fetchedCountry)[0] as Country;
}) satisfies PageLoad;
