import React from "react";
import { seedColors } from "./seedColors";
import Palette from "./components/Palette/Palette";
import { generatePalette } from "./Utility/colorHelpers";

const App = (): JSX.Element => {
    return (
        <div>
            <Palette palette={generatePalette(seedColors[4])} />
        </div>
    );
};

export default App;
