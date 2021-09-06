import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string;
  public books!: Book[];
  public starRating!: number;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.books = this.bookService.onGet().filter(book => book.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
        console.log("Noż kurwas");
      }
      else{
        this.books = this.bookService.onGet()
      }
    })
  }

  onDelete(id: number) {
    this.bookService.onDelete(id);
  }
}
