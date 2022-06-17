import React, { useMemo, useState } from 'react'

import Search from '../Search/Search';

import './CoinsRender.css';

const CoinsRender = ({coinsNum}) => {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        fetch(`${API}&per_page=${coinsNum}&page=${1}`)
            .then(res => res.json())
            .then(data => setCoins(data))
            .catch(err => console.log(err));
    }

    useMemo(() => {
        fetchCoins();
    }, [coinsNum]);
    
    return (
        <div className="top-ajust">
            <Search crypto={coins} />
        </div>
    )
}

export default CoinsRender