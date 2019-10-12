import React from "react";
import ColorBox from "../ColorBox";
import "./Palette.css";
import { iGeneratePalette, PaletteColors } from "../../types/generateColors";

const Palette = ({ palette }: any): JSX.Element => {
    const colorBoxes = palette.colors[500].map(
        (color: PaletteColors): JSX.Element => {
            return <ColorBox background={color.hex} name={color.name} />;
        }
    );

    return (
        <div className="Palette">
            {/*navbar*/}
            <div className="Palette-colors">{colorBoxes}</div>
            {/*footer*/}
        </div>
    );
};

export default Palette;
