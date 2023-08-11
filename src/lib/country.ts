export interface Country {
	name: {
		common: string;
		official: string;
		nativeName: Record<string, { offcial: string; common: string }>;
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
    region:string;
    subregion: string;
    languages: Record<string, string>;
	translations: Record<string, { official: string, common: string }>;
	latlng: [number, number];
	landlocked: boolean;
	borders: string[];
	area: number,
	demonyms: Record<string, { f: string, m: string }>;
	flag: string;
	maps: {
		googleMaps: URL,
		openStreetMaps: URL
	};
	population: number;
	gini: Record<string, number>;
	
	flags: {
		png: string;
	};
}
