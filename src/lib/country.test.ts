import { getCountry } from './country';
import { describe, expect, it } from 'vitest';

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

		expect(actual).toStrictEqual({
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
});
