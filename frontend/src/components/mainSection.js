import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';
import { Grid, CircularProgress, Typography } from '@mui/material';
import BookCard from './bookCard.js';


function MainSection({ searchResults }) {
    const { loading, error, data } = useQuery(GET_BOOKS);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (data) {
            setBooks(data.books);
        }
    }, [data]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error: {error.message}</Typography>;

    return (
        <Grid container spacing={2}>
            {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <BookCard />
                    </Grid>
                ))
            ) : (
                <Grid container spacing={2} mt={3}>
                    {books.map((book, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <BookCard book={book} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Grid>
    );
}

export default MainSection;
