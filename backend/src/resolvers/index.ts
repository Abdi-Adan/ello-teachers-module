import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
    search: (_: any, args: any) => booksData.filter((booksData) => booksData.title.includes(args.title) || booksData.author.includes(args.title)),
    readingList: () => booksData.filter((booksData) => booksData.inReadingList === true)
  },
  Mutation: {
    updateReadingList(_: any, args: any) {
      let newBook = {
        ...args.book,
        inReadingList: !args.book.inReadingList
      }

      const index = booksData.findIndex(book => book.title === args.book.title);

      if (index >= 0 && index < booksData.length) {
        booksData[index] = newBook;
      }

      return newBook;
    }
  }
};
