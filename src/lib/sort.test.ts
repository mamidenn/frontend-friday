import { describe, expect } from 'vitest';
import { it, fc } from '@fast-check/vitest';
import { sort } from './sort';

describe('sort', () => {
	it.prop([fc.array(fc.integer())])(
		'preserves the elements (only does permutation)',
		(input: number[]) => {
			const count = <T>(array: T[], item: T) => array.filter((v) => v === item).length;

			const sorted = sort(input);
			expect(sorted).toHaveLength(input.length);
			for (let idx = 0; idx < sorted.length; idx++) {
				expect(count(sorted, sorted[idx])).toEqual(count(input, sorted[idx]));
			}
		}
	);

	it.prop([fc.array(fc.integer())])('returns pairwise sorted elements', (input) => {
		const sorted = sort(input);

		for (let idx = 1; idx < sorted.length; idx++) {
			expect(sorted[idx - 1]).toBeLessThanOrEqual(sorted[idx]);
		}
	});
});
