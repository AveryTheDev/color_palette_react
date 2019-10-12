import React from "react";

const ColorBox = ({ background }: any) => {
    return (
        <div style={{ background: background }} className="ColorBox">
            <span>More</span>
        </div>
    );
};

export default ColorBox;
