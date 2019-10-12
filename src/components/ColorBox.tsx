import React from "react";
import { iColorBox } from "../types/colorbox";
import "./ColorBox.css";

const ColorBox = ({ background, name }: iColorBox) => {
    return (
        <div style={{ background }} className="ColorBox">
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-button">Copy</button>
            </div>
            <span className="see-more">More</span>
        </div>
    );
};

export default ColorBox;
