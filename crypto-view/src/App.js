import React from "react";
import Banner from "./components/Banner/Banner";
import Coins from "./components/CoinsRender/CoinsRender";
import Search from "./components/Search/Search";

function App() {
    return (
        <div className="App">
            <Banner />
            <Search />
            <Coins />
        </div>
    );
}

export default App;
