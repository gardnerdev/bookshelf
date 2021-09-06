import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  public sort!: string;
  public books!: Book[];
  public starRating!: number;

  searchTerm: string = "";

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.books = this.bookService.onGet().filter(book => book.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      }
      else{
        this.books = this.bookService.onGet()
      }
    })
  }

  onDelete(id: number) {
    this.bookService.onDelete(id);
  }
  
  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search]);
  }

  search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }

}
