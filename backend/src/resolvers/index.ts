import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
    search: function (_: any, args: any) {
      let term = args.title;

      const lowerCaseTerm = term.trim().toLowerCase();

      return booksData.filter(book =>
        (book.title && book.title.toLowerCase().includes(lowerCaseTerm)) || (book.author && book.author.toLowerCase().includes(lowerCaseTerm))
      );

      // return booksData.filter((booksData) => booksData.title.includes(term) || booksData.author.includes(term));
    },
    readingList: () => booksData.filter((booksData) => booksData.inReadingList === true)
  },
  Mutation: {
    updateReadingList: function (_: any, args: any) {
      let newBookdata;
      let newBook = {
        ...args.book,
        inReadingList: !args.book.inReadingList
      }

      const index = booksData.findIndex(book => book.title === args.book.title);

      if (index >= 0 && index < booksData.length) {
        booksData[index] = newBook;
        newBookdata = booksData;
      }

      return newBookdata;
    }
  }
};
