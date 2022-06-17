import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InfoBanner from '../InfoBanner/InfoBanner';
import Box from '@mui/material/Box';
import Coin from '../Coin/Coin';
import Grid from '@mui/material/Grid';

import './Search.css';

const Search = ({crypto}) => {
    const [renderCoins, setRenderCoins] = useState([]);

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        console.log(searchText);
        if(searchText !== '') {
            setRenderCoins(crypto.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase())));
        }

        if(searchText === '') {
            setRenderCoins(crypto);
        }
    }

    useEffect(() => {
        setRenderCoins(crypto);
    }, [crypto])


    return (
        <div className='center'>
            <TextField
                id="search"
                label="Crypto"
                variant="outlined"
                size='small'
                autoComplete='off'
                onChange={handleChange}
            />
            <InfoBanner crypto={renderCoins}/>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={1} className='coins-container' >
                    {renderCoins.map((coin) => {
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

export default Search