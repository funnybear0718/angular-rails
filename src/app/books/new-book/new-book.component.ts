import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  @Input() book: Book;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
  }

  createBook() {
    debugger
    this.httpClient.post("/api/v1/books", JSON.stringify(this.book), this.httpOptions)
      .subscribe(res => {
        if (res["status"]) {
          this.router.navigate(["/books"])
        } else {
          alert(`Lỗi nè:${res["data"]["errors"]}`.replace(/[:,]/g, "\n- "))
        }
      })
  }
}
