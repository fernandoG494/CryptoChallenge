import React from 'react';
import Button from 'react-bootstrap/Button';

import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner-line'>
                <h1 className='text'>
                    Javascript challenge
                </h1>
                <Button variant='outline-primary' className='button'>
                    Reload
                </Button>
            </div>
            <hr />
        </div>
    )
}

export default Banner