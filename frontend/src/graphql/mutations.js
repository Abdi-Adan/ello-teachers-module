import { gql } from '@apollo/client';

export const UPDATE_READING_LIST = gql`
    mutation UpdateReadingList($book: UpdatedBookInput!){
        updateReadingList(book: $book){
            author
            coverPhotoURL
            readingLevel
            title
            inReadingList
        }
    }
`;