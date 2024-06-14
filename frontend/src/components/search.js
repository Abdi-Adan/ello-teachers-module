import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function SearchInput({ setSearchTerm, handleSearchBooks }) {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    };

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
                fullWidth={true}
                label="Search Ello Library"
                onChange={function (e) {
                    setSearchTerm(e.target.value);
                    return handleSearchBooks(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            ></TextField>

        </Box>
    );
}
