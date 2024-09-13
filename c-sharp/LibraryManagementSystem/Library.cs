using System;
using System.Collections.Generic;

namespace LibraryManagementSystem
{
  public class Library
  {
    private List<Book> books = new List<Book>();

    public void AddBook(Book book)
    {
      this.books.Add(book);
    }

    public List<Book> SearchBooksByTitle(string title)
    {
      List<Book> foundBooks = new List<Book>();
      foreach (Book book in this.books)
      {
        if (book.Title.Contains(title))
        {
          foundBooks.Add(book);
        }
      }
      return foundBooks;
    }

    public void DisplayAllBooks()
    {
      foreach (Book book in this.books)
      {
        Console.WriteLine($"{book.Title} - {book.Author}");
      }
    }
  }
}
