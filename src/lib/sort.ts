function sortInternal<T>(
	array: T[],
	start: number,
	end: number,
	isSmaller: (a: T, b: T) => boolean
): T[] {
	if (end - start < 2) return array;

	let pivot = start;
	for (let idx = start + 1; idx < end; ++idx) {
		if (!isSmaller(array[start], array[idx])) {
			const prev = array[++pivot];
			array[pivot] = array[idx];
			array[idx] = prev;
		}
	}
	const prev = array[pivot];
	array[pivot] = array[start];
	array[start] = prev;

	sortInternal(array, start, pivot, isSmaller);
	sortInternal(array, pivot + 1, end, isSmaller);
	return array;
}

export function sort<T extends number>(array: T[]): T[] {
	return sortInternal([...array], 0, array.length, (a, b) => a < b);
}
