import { get } from 'svelte/store';
import { describe, it, expect } from 'vitest';
import { counter, increment } from './counter';

describe('increment', () => {
	it.each([
		[-1, 0],
		[0, 1],
		[1337, 1338]
	])('increments counter by 1', (before, after) => {
		counter.set(before);

		increment();

		expect(get(counter)).toBe(after);
	});
});
