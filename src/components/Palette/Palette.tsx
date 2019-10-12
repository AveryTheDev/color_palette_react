import React from "react";
import ColorBox from "../ColorBox";
import { iSeedColors, colors } from "../../types/seedColors";

const Palette = ({ colors }: iSeedColors) => {
    const colorBoxes = colors.map((color: colors) => {
        return <ColorBox background={color.color} name={color.name} />;
    });

    return (
        <div className="Palette">
            {/*navbar*/}
            <div className="Palette-colors">{colorBoxes}</div>
            {/*footer*/}
        </div>
    );
};

export default Palette;