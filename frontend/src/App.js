import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Sidebar from './components/sidebar.js';
import SearchAppBar from './components/appbar.js';
import Toolbar from '@mui/material/Toolbar';
import BookCard from './components/bookCard.js';
import SearchInput from './components/search.js';
import { GET_BOOKS, READING_LIST, SEARCH_BOOKS } from './graphql/queries.js';
import { UPDATE_READING_LIST } from "./graphql/mutations.js";

const sidebarWidth = 200;

export default function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [book, setBook] = useState({});

  // Responsive Appbar and Sidebar vars&functions
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Query to get all books
  const { loading: loadingBooks, error: errorBooks, data: booksData, refetch: refetchBooks } = useQuery(GET_BOOKS);

  // Query to get the reading list
  const { data: readingListData, refetch: refetchReadingList } = useQuery(READING_LIST, {
    skip: true,
  });

  // Query to search books
  const { data: searchBooksData, refetch: refetchSearchBooks } = useQuery(SEARCH_BOOKS, {
    variables: { term: searchTerm },
    skip: true,
  });

  // Mutation to update the reading list
  const { data: updateReadingList, refetch: refetchUpdateReadingList } = useMutation(UPDATE_READING_LIST, {
    variables: { book: book },
    skip: true,
  });

  useEffect(() => {
    if (booksData) {
      setBooks(booksData.books);
    }
  }, [booksData]);

  // Function to trigger the books query
  const handleFetchBooks = () => {
    refetchBooks().then(({ data }) => {
      setBooks(data.books);
    });
  };

  // Function to trigger the reading list query
  const handleFetchReadingList = () => {
    refetchReadingList().then(({ data }) => {
      setBooks(data.readingList);
    });
  };

  // Function to trigger the search books query
  const handleSearchBooks = () => {
    refetchSearchBooks().then(({ data }) => {
      setBooks(data.books[0]);
    });
  };

  // Function to update the reading list
  const handleUpdateReadingList = (book) => {
    updateReadingList({ variables: { book } }).then(({ data }) => {
      setBooks(data.updateReadingList.books);
    });
  };

  if (loadingBooks) return <p>Loading...</p>;
  if (errorBooks) return <p>Error: {errorBooks.message}</p>;

  return (
    <Box sx={{ display: 'flex' }}>

      <SearchAppBar sidebarWidth={sidebarWidth} isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} searchInput={<SearchInput handleSearchBooks={handleSearchBooks} setSearchTerm={setSearchTerm} />} />

      <Sidebar sidebarWidth={sidebarWidth} setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} bookShelfOnClick={handleFetchBooks} readingListOnClick={handleFetchReadingList} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${sidebarWidth}px)` } }}
      >
        <Toolbar />

        <Grid container spacing={2}>
          <Grid container spacing={2} mt={3}>
            {books.map((book, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <BookCard book={book} handleUpdateReadingList={handleUpdateReadingList} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
}
