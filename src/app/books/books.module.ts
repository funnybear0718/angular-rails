import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    NewBookComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
