import React from "react";
import { seedColors } from "./seedColors";
import Palette from "./components/Palette/Palette";
import { generatePalette } from "./Utility/colorHelpers";

const App: React.FC = () => {
    console.log(generatePalette(seedColors[4]));
    return (
        <div>
            <Palette {...seedColors[4]} />
        </div>
    );
};

export default App;
