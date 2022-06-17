import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box';
import Coin from '../Coin/Coin';

import './CoinsRender.css';

const Coins = () => {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';
    
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        fetch(`${API}&per_page=${5}&page=${1}`)
            .then(res => res.json())
            .then(data => setCoins(data))
            .catch(err => console.log(err));
    }

    console.log(coins);

    useMemo(() => {
        fetchCoins();
    }, []);
    
    return (
        <div className="top-ajust">
            <Box
                sx={{
                    flexGrow:1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {coins.map((coin) => {
                    return (
                        <Coin
                            coin={coin}
                            key={coin.id}
                            className="left-ajust"
                        />
                    )
                })}
            </Box>
        </div>
    )
}

export default Coins