import { describe, expect, expectTypeOf, it } from 'vitest';
import { getUser, type ID, type Name, type User } from './user';

describe('getUser', () => {
	it('returns a single random user', async () => {
		const user = await getUser();

		expect(user).toMatchSnapshot();
		// red squiggles on this line mean test failure
		expectTypeOf(user).toEqualTypeOf<User>();
	});

	describe('given it is passed some fields', () => {
		it('only returns the requested fields (name)', async ({ expect }) => {
			const user = await getUser('name');

			expect(user).toMatchInlineSnapshot(`
				{
				  "name": {
				    "first": "Gaspard",
				    "last": "Jean",
				    "title": "Mr",
				  },
				}
			`);
			// red squiggles on this line mean test failure
			expectTypeOf(user).toEqualTypeOf<{ name: Name }>();
		});

		it('only returns the requested fields (id,name)', async ({ expect }) => {
			const user = await getUser('id', 'name');

			expect(user).toMatchInlineSnapshot(`
				{
				  "id": {
				    "name": "INSEE",
				    "value": "1570185270955 82",
				  },
				  "name": {
				    "first": "Gaspard",
				    "last": "Jean",
				    "title": "Mr",
				  },
				}
			`);
			// red squiggles on this line mean test failure
			expectTypeOf(user).toEqualTypeOf<{ id: ID; name: Name }>();
		});

		it('only returns the requested fields (id,name,email)', async ({ expect }) => {
			const user = await getUser('id', 'name', 'email');

			expect(user).toMatchInlineSnapshot(`
				{
				  "email": "gaspard.jean@example.com",
				  "id": {
				    "name": "INSEE",
				    "value": "1570185270955 82",
				  },
				  "name": {
				    "first": "Gaspard",
				    "last": "Jean",
				    "title": "Mr",
				  },
				}
			`);
			// red squiggles on this line mean test failure
			expectTypeOf(user).toEqualTypeOf<{ id: ID; name: Name; email: string }>();
		});
	});
});
