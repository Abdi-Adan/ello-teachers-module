import { IconButton } from '@mui/material';
import React from 'react';

function BrandLogo({ width }) {
    const logoPath = `${process.env.PUBLIC_URL}/logo.svg`;

    return (
        <IconButton sx={{ width, mb: 3 }}>
            <img src={logoPath} alt="Brand Logo" color="white" />
        </IconButton>
    );
}

export default BrandLogo;
