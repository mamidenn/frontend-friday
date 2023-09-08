import { assertType, describe, expectTypeOf, it } from 'vitest';
import { getCountry } from './country';

describe('getCountry', () => {
	it('only allows specifying fields that belong to type Country', () => {
		// @ts-expect-error president is not property of Country
		assertType(getCountry('USA', 'president'));
	});

	it('has a return type that only contains the specified fields', async () => {
		const actual = await getCountry('DEU', 'cca2', 'region', 'independent');

		expectTypeOf(actual).toEqualTypeOf<{
			cca2: string;
			region: string;
			independent: boolean;
		}>();
	});
});
