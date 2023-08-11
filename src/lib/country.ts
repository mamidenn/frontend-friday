
export interface Country {
    name: {
        common: string;
        official: string;
        nativeName: Record <string, Record<string, string>>;
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: 
    flags: {
        png: string;
    };
    capital: {};

}
