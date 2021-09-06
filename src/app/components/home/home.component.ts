import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string;
  public books!: Book[];
  public starRating!: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.onGet()
  }

}
