import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box';
import Coin from '../Coin/Coin';
import Grid from '@mui/material/Grid';

import './CoinsRender.css';

const Coins = () => {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        // TODO: Hard coded for now
        fetch(`${API}&per_page=${10}&page=${1}`)
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
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={1} className='coins-container' >
                    {coins.map((coin) => {
                        return (
                            <div style={{paddingLeft: '10px', paddingTop: '10px'}}>
                                <Coin
                                    coin={coin}
                                    key={coin.id}
                                    className="left-ajust"
                                />
                            </div>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Coins