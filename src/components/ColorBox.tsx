import React from "react";
import { colorBox } from "../types/colorbox";

const ColorBox = ({ background, name }: colorBox) => {
    return (
        <div style={{ background: background }} className="ColorBox">
            <span>{name}</span>
            <span>More</span>
        </div>
    );
};

export default ColorBox;
