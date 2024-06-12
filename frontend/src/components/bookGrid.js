import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function BookGrid() {
    return (
        <Grid sx={{ flexGrow: 1, my: 1 }} container spacing={3}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    height: 400,
                                    width: 300,

                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
