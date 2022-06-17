import React from 'react';
import Typography from '@mui/material/Typography';

const Coin = ({coin}) => {
    return (
        <div className='card'>
            <img
                src={coin.image}
                alt={coin.name}
                width='150px'
                height='150px'
            />
            <Typography
                className='text-center'
                variant='h5'
            >
                {coin.name}
            </Typography>
            
            <Typography
                variant="subtitle1"
                className='text-center'
            >
                {coin.symbol}
            </Typography>

            <Typography
                variant="subtitle1"
                className='text-center'
            >
                ${coin.current_price}
            </Typography>
        </div>
    )
}

export default Coin