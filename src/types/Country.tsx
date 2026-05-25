export type Country = {
        name: {
            common: string;
            official:string;
        };
        tld?: string[];
        population: number;
        region: string;
        capital?: string[]
        flags: {
            png: string;
        };
        currencies:{
            [key: string]: {
                symbol: string;
            }
        };
        languages: {
            [key: string]: string;
        };
        borders?: string[];
    }