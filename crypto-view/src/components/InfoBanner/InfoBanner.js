import { Stack } from '@mui/material'
import React from 'react'

const InfoBanner = ({crypto}) => {

    function marketCalc(crypto){
        let sum = 0;
        for(var i = 0; i < crypto.length; i++){
            sum += crypto[i].current_price;
        }
        return sum.toFixed(2);
    }

    return (
        <Stack 
            spacing={2} 
            direction='row' 
            className='center'
        >
            <div>
                <b>Crypto currency: {crypto.length}</b>
            </div>
            <div>
                <b>Market cap: ${marketCalc(crypto)}</b>
            </div>
        </Stack>
    )
}

export default InfoBanner