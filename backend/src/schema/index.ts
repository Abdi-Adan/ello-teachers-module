export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
    inReadingList: Boolean
  }

  type Query {
    books: [Book],
    readingList: [Book]!
    search(title: String!): [Book]!
  }

  type Mutation {
    updateReadingList(book: UpdatedBookInput!): Book
  }

  input UpdatedBookInput {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
    inReadingList: Boolean
  }
`;
