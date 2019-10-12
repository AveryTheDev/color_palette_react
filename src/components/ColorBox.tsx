import React from "react";
import { iColorBox } from "../types/colorbox";
import "./ColorBox.css";

const ColorBox = ({ background, name }: iColorBox) => {
    return (
        <div style={{ background: background }} className="ColorBox">
            <span>{name}</span>
            <span>More</span>
        </div>
    );
};

export default ColorBox;
