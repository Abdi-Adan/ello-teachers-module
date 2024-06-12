import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
    query Books {
        books {
            author
            coverPhotoURL
            readingLevel
            title
        }
    }
`;


export const SEARCH_BOOKS = gql`
    query SearchBooks($searchTerm: String!) {
        books(filter: { title: { like: $searchTerm } }) {
            author
            coverPhotoURL
            readingLevel
            title
        }
    }
`;