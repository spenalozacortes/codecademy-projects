using System;
using System.Collections.Generic;

namespace LibraryManagementSystem
{
  class Program
  {
    static void Main()
    {
      // Initialize library
      Library library = new Library();

      // Add some sample books
      Book b1 = new Book();
      b1.Title = "1984";
      b1.Author = "George Orwell";

      Book b2 = new Book();
      b2.Title = "To Kill a Mockingbird";
      b2.Author = "Harper Lee";

      library.AddBook(b1);
      library.AddBook(b2);

      // Search for a book
      List<Book> results = library.SearchBooksByTitle("1984");
      foreach (Book result in results)
      {
        Console.WriteLine($"{result.Title} - {result.Author}");
      }

      // Display all books
      library.DisplayAllBooks();
    }
  }
}
