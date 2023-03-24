import { get } from 'svelte/store';
import { describe, it, expect } from 'vitest';
import { counter, increment } from './counter';

describe('increment', () => {
	for (const [before, after] of [
		[-1, 0],
		[0, 1],
		[1337, 1338]
	]) {
		it('increments counter by 1', () => {
			counter.set(before);

			increment();

			expect(get(counter)).toBe(after);
		});
	}
});
