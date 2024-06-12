import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={book.coverPhotoURL}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.readingLevel}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
