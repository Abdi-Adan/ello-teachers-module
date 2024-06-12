import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function SearchInput() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="filled-basic"
                fullWidth="true"
                label="Search Ello Library"
            ></TextField>

        </Box>
    );
}
