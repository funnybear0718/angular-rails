import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {NewBookComponent} from './new-book/new-book.component';

const routes: Routes = [
  {path: "books", component: BooksComponent},
  {path: "books/new", component: NewBookComponent},
  {path: "books/:id", component: BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
