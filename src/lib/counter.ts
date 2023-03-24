import { writable } from 'svelte/store';

export const counter = writable(0);

export function increment() {
	counter.update((value) => value + 1);
}
