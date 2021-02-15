import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("/api/v1/books")
      .subscribe(res => {
        this.books = res["data"]["books"];
      })
  }
}
