import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const allCountries = fetch('https://restcountries.com/v3.1/alpha/' + params.country).then(
		(result) => result.json()
	);
	return {
		cca3: params.country,
		country: allCountries
	};
}) satisfies PageLoad;
