export interface iSeedColors {
    paletteName: string;
    id: string;
    emoji?: string;
    colors: Array<colors>;
    [propName: string]: any;
}

export interface colors {
    name: string;
    color: string;
}
