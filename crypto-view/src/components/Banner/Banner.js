import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';

import './Banner.css';

const Banner = () => {
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
                >
                    Load more
                </Button>
            </Stack>
            <hr></hr>
        </div>
    )
}

export default Banner