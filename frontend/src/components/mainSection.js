import React from 'react';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';


function MainSection({ searchResults }) {
    return (
        <Grid container spacing={2}>
            {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            sx={{
                                height: 400,
                                width: 300,

                            }}
                        />
                        {/* <CardComponent card={result} /> */}
                    </Grid>
                ))
            ) : (
                <Typography variant="h7">No results found</Typography>
            )}
        </Grid>
    );
}

export default MainSection;
