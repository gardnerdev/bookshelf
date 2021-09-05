import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  books: Book[] = [
    {
      id: 1,
      name: "First book",
      author: "Rafal",
      description: "Fajna ksiazka",
      image_url:"https://imgv2-1-f.scribdassets.com/img/word_document/505986335/original/432x574/1465f3426d/1627969107?v=1"
    }
  ];
  
  constructor() { }

  onGet() {
    return this.books;
  }
}
