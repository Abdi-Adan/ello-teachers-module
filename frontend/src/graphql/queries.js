import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
    query Books {
        books {
            author
            coverPhotoURL
            readingLevel
            title
            inReadingList
        }
    }
`;

export const READING_LIST = gql`
    query ReadingList {
        readingList {
            author
            coverPhotoURL
            readingLevel
            title
            inReadingList
        }
    }
`;


export const SEARCH_BOOKS = gql`
    query SearchBooks($searchTerm: String!) {
        search(title: $searchTerm) {
            title
            author
            coverPhotoURL
            readingLevel
            inReadingList
        }
    }
`;