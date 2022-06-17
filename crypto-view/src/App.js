import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import CoinsRender from "./components/CoinsRender/CoinsRender";

function App() {
    let [numberOfCoins, setNumberOfCoins] = useState(5);

    return (
        <div className="App">
            <Banner
                numberOfCoins={numberOfCoins}
                setNumberOfCoins={setNumberOfCoins}    
            />
            <CoinsRender coinsNum={numberOfCoins}/>
        </div>
    );
}

export default App;
