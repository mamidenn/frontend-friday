/**
 * # Including/Excluding fields
 *
 * Sometimes, maybe you want some random names and not extraneous data such as location, phone, etc.
 * Using the inc and exc parameters, you can specify which fields to include or exclude
 * respectively.
 *
 * By specifying only the fields you want, the generator can save time by skipping CPU intensive
 * fields like "login" for example. These parameters accept the following values in a comma
 * delimited list
 *
 * - gender
 * - name
 * - location
 * - email
 * - login
 * - registered
 * - dob
 * - phone
 * - cell
 * - id
 * - picture
 * - nat
 *
 * If you only wanted the names, genders, and nats of users:
 *
 * ```txt
 * https://randomuser.me/api/?inc=gender,name,nat
 * ```
 */
export const getUser = async function (...fields) {
	// please do not change the seed, the tests depend on it
	const response = await fetch('https://randomuser.me/api/?seed=frontendfriday');
	const json: UserApiResult = await response.json();
	return json.results[0];
};

export interface UserApiResult {
	results: User[];
	info: Info;
}

export interface Info {
	seed: string;
	results: number;
	page: number;
	version: string;
}

export interface User {
	gender: string;
	name: Name;
	location: Location;
	email: string;
	login: Login;
	dob: DateAndAge;
	registered: DateAndAge;
	phone: string;
	cell: string;
	id: ID;
	picture: Picture;
	nat: string;
}

export interface DateAndAge {
	date: Date;
	age: number;
}

export interface ID {
	name: string;
	value: string;
}

export interface Location {
	street: Street;
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: Coordinates;
	timezone: Timezone;
}

export interface Coordinates {
	latitude: string;
	longitude: string;
}

export interface Street {
	number: number;
	name: string;
}

export interface Timezone {
	offset: string;
	description: string;
}

export interface Login {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

export interface Name {
	title: string;
	first: string;
	last: string;
}

export interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}
