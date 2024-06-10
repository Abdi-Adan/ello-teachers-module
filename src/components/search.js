import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
    return (
        <Paper
            component="form"
            elevation={0}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { sm: `calc(100%)` }, borderRadius: 30 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Search Ello Library"
                inputMode='text'
                inputProps={{ 'aria-label': 'ello library' }}
            />
        </Paper>
    );
}
