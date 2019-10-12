import React from "react";
import seedColors from "./seedColors";
import Palette from "./components/Palette/Palette";

const App: React.FC = () => {
    return (
        <div>
            <Palette palette={...seedColors[4]} />
        </div>
    );
};

export default App;
