import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box';
import Coin from '../Coin/Coin';
import Grid from '@mui/material/Grid';
import InfoBanner from '../InfoBanner/InfoBanner';

import './CoinsRender.css';

const CoinsRender = ({coinsNum}) => {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false';
    const [coins, setCoins] = useState([]);

    const fetchCoins = async () => {
        // TODO: Hard coded for now
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
            <InfoBanner crypto={coins}/>
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
                            <div
                                style={{paddingLeft: '10px', paddingTop: '10px'}}
                                key={coin.id}
                            >
                                <Coin
                                    coin={coin}
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

export default CoinsRender