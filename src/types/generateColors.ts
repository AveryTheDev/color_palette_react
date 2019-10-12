export interface iGeneratePalette {
    paletteName: string;
    id: string;
    emoji?: string;
    colors: {
        [index: number]: Array<PaletteColors>;
    };
    palette?: any;
}

export interface PaletteColors {
    name: string;
    id: string;
    hex: string;
    rgb: string;
    rgba: string;
}
