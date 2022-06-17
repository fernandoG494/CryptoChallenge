import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';

import './Banner.css';

const Banner = ({numberOfCoins, setNumberOfCoins}) => {

    function clickHandler(){
        numberOfCoins < 30 ? 
            setNumberOfCoins(numberOfCoins + 5) : 
            setNumberOfCoins(5);
    }

    return (
        <div>
            <Stack
                spacing={2}
                direction="row"
                className='banner-line'
            >
                <>
                    <h1>Javascript challenge</h1>
                </>
                <Button
                    variant='outlined'
                    className='button'
                    startIcon={<CachedIcon />}
                    onClick={clickHandler}
                >
                    {numberOfCoins < 30 ? 'Load more' : 'Restore default'}
                </Button>
            </Stack>
            <hr></hr>
        </div>
    )
}

export default Banner