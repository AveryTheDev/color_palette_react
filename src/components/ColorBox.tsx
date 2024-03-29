import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { iColorBox } from "../types/colorbox";
import "./ColorBox.css";

const ColorBox = ({ background, name }: iColorBox): JSX.Element => {
    const [copied, setCopied] = useState(false);

    const changeCopyState = (): void => {
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className="ColorBox">
                <div
                    style={{ background }}
                    className={`copy-overlay ${copied && "show"}`}
                ></div>
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
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
