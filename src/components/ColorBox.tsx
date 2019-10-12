import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { iColorBox } from "../types/colorbox";
import "./ColorBox.css";

const ColorBox = ({ background, name }: iColorBox) => {
    const [copied, setCopied] = useState(false);

    return (
        <CopyToClipboard text={background}>
            <div style={{ background }} className="ColorBox">
                <div style={{ background }} className="copy-overlay"></div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;
