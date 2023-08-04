import type { PageLoad } from './$types';

export const load = (async ({ params }) => 
{
	let allCountries : Promise<Country[]> = fetch('https://restcountries.com/v3.1/alpha/'+ params.country).then( (result) => result.json());
	return { country: params.country };
}) satisfies PageLoad;
