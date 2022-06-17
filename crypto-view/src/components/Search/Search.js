import React from 'react';
import TextField from '@mui/material/TextField';

import './Search.css';

const Search = () => {
    return (
        <div className='center'>
            <TextField
                id="outlined-basic"
                label="Crypto"
                variant="outlined"
                size='small'
            />
        </div>
    )
}

export default Search