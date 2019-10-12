import React from "react";
import ColorBox from "../ColorBox";
import { iSeedColors, iColors } from "../../types/seedColors";
import "./Palette.css";

const Palette = ({ colors }: iSeedColors): JSX.Element => {
    const colorBoxes = colors.map(
        (color: iColors): JSX.Element => {
            return <ColorBox background={color.color} name={color.name} />;
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
