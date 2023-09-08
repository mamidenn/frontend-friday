// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
// https://www.typescriptlang.org/docs/handbook/utility-types.html

export async function getCountry(
	code: string,
	...fields: /*TODO:*/ unknown[]
): Promise</*TODO:*/ Country> {
	//TODO:
	const result = await fetch('https://restcountries.com/v3.1/alpha/' + code);
	const json = await result.json();
	return json[0];
}

if (import.meta.vitest) {
	const { describe, it, expect, expectTypeOf, assertType } = import.meta.vitest;

	describe('getCountry', () => {
		it.each([
			['DEU', 'Germany'],
			['USA', 'United States']
		])('gets info about a country identified by its CCA3 code', async (cca3, name) => {
			const actual = await getCountry(cca3);
			expect(actual.cca3).toBe(cca3);
			expect(actual.name.common).toBe(name);
		});

		it('gets only the specified fields', async () => {
			const actual = await getCountry('DEU', 'name', 'borders');

			expect(actual).toBe({
				name: {
					common: 'Germany',
					official: 'Federal Republic of Germany',
					nativeName: {
						deu: {
							official: 'Bundesrepublik Deutschland',
							common: 'Deutschland'
						}
					}
				},
				borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE']
			});
		});

		it("only allows specifying fields that belong to type Country", ()=>{
			// @ts-expect-error president is not property of Country
			assertType(getCountry("USA", "president"))
		})

		it('has a return type that only contains the specified fields', async () => {
			const actual = await getCountry('DEU', ['cca2', 'region', 'independent']);

			expectTypeOf(actual).toMatchTypeOf<{
				cca2: string;
				region: string;
				independent: boolean;
			}>();
		});
	});
}

export interface DataModelCountry {
	rawCountry: Country;
	bordersAsFullName?: string[];
}

export interface Country {
	name: {
		common: string;
		official: string;
		nativeName: Record<string, { official: string; common: string }>;
	};
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: Record<string, { name: string; symbol: string }>;
	idd: { root: string; suffixes: string[] };
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: Record<string, string>;
	translations: Record<string, { official: string; common: string }>;
	latlng: [number, number];
	landlocked: boolean;
	borders?: string[];
	area: number;
	demonyms: Record<string, { f: string; m: string }>;
	flag: string;
	maps: {
		googleMaps: URL;
		openStreetMaps: URL;
	};
	population: number;
	gini: Record<string, number>;
	fifa: string;
	car: { signs: string[]; side: 'left' | 'right' };
	timezones: string[];
	continents: string[];
	flags: {
		png: URL;
		svg: URL;
		alt: string;
	};
	coatOfArms: {
		png: URL;
		svg: URL;
	};
	startOfWeek: 'monday' | 'sunday';
	capitalInfo: { latlng: [number, number] };
	postalCode: { format: string; regex: RegExp };
}
