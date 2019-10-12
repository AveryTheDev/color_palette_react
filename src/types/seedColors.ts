export interface iSeedColors {
    paletteName: string;
    id: string;
    emoji?: string;
    colors: Array<iColors>;
    [propName: string]: any;
}

export interface iColors {
    name: string;
    color: string;
}
