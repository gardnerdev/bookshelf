import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  books: Book[] = [
    {
      id: 1,
      name: 'Nolyn',
      author: "Michael J. Sullivan",
      description: "After more than five hundred years of exile, the heir to the empyre is wary about his sudden reassignment to active duty on the G...",
      imageUrl:"https://imgv2-1-f.scribdassets.com/img/word_document/505986335/original/432x574/1465f3426d/1627969107?v=1",
      starRating: 4,
      price: 24,
      pages: 532,
      category: "Drama"
    },
    {
      id: 2,
      name: 'The Last Mrs. Parrish',
      author: "By Liv Constantine",
      description: "THE INTERNATIONAL BESTSELLER AND DECEMBER PICK FOR REESE WITHERSPOON'S HELLO SUNSHINE BOOK CLUB Featuring a sneak peek..",
      imageUrl:"https://imgv2-1-f.scribdassets.com/img/word_document/360000451/original/432x574/7833be99e8/1630614980?v=1",
      starRating: 5,
      price: 29,
      pages: 437,
      category: "Romance"
    }
  ];
  
  constructor() { }

  onGet() {
    return this.books;
  }

  onGetBook(id: number){
    return this.books.find(x=>x.id === id);
  }

  onAdd(book: Book){
    this.books.push(book);
  }

  onDelete(id: number){
    // looking for book to delete
    let book = this.books.find(x=>x.id === id);
    let index = this.books.indexOf(<Book>book,0);
    this.books.splice(index,1);
  }

  onUpdate(book: Book){
    let oldBook  = this.books.find(x=>x.id === book.id) as Book;
    oldBook.name = book.name;
    oldBook.author = book.author;
    oldBook.description = book.description;
    oldBook.imageUrl = book.imageUrl;
    oldBook.starRating = book.starRating;
    oldBook.price = book.price;
    oldBook.pages = book.pages;
    oldBook.category = book.category;
  }
}
