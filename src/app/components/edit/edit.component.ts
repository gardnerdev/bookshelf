import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  id!: number;
  header!: string;
  book: Book = {
    id: 0,
    name: '',
    author: '',
    description: '',
    imageUrl: '',
    starRating: 0,
    price: 0,
    pages: 0,
    category: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private bookSerivce: BookService) { }


  ngOnInit(): void {
    this.id = +<number><unknown>this.route.snapshot.paramMap.get('id'); //converting to number
    this.header = this.id === 0? 'Add book': 'Edit book';
    
    console.log("This id:" + this.id);
    if (this.id != 0){
      this.book =  <Book>this.bookSerivce.onGetBook(this.id);
      console.log("Warunek kurwa spełniony!");
    }
    console.log(this.bookSerivce.onGetBook(this.id));
  }

  onSubmit(form: NgForm) {
    let book: Book = {
      id: form.value.id,
      name: form.value.name,
      author: form.value.author,
      description: form.value.description,
      price: form.value.price,
      imageUrl: form.value.imageUrl,
      starRating: form.value.starRating,
      pages: form.value.pages,
      category: form.value.category
    }

    if (this.id === 0){
      this.bookSerivce.onAdd(book);
    } else{
      this.bookSerivce.onUpdate(book);
    }
    this.router.navigateByUrl('');
  }
}
