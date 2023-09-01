import type { PageLoad } from './$types';
import type { Country } from '$lib/country';
import type { DataModelCountry } from '$lib/country';

export const load = (async ({ fetch, params }) => {
	const fetchedCountry = fetch('https://restcountries.com/v3.1/alpha/' + params.country).then(
		(result) => result.json()
	);

	async function getCountry(countryShortcut: string): Promise<string> {
		const fetchedCountry = fetch('https://restcountries.com/v3.1/alpha/' + countryShortcut).then(
			(result) => result.json()
		);
		return ((await fetchedCountry)[0] as Country).name.official;
	}

	const fetchedx = (await fetchedCountry)[0] as Country;
	const x: DataModelCountry = {
		rawCountry: fetchedx,
		bordersAsFullName: fetchedx.borders?.map( async x=> await getCountry(x))
	};
	return x;
}) satisfies PageLoad;
