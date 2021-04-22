export interface Languages {
    name: string;
    nativeName: string;
}

export interface Pais {
    name: string;
    capital: string;
    region: string;
    languages: Languages
    flag: any;
    nativeName: string
}