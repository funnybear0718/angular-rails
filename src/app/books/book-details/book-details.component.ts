import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ActivatedRoute, Router} from '@angular/router';
import {Location} from "@angular/common";
import {Book} from "../book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id: any = this.actRoute.snapshot.params['id'];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  @Input() book: Book;

  constructor(
    private httpClient: HttpClient,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.httpClient.get(`/api/v1/books/${this.id}`)
      .subscribe(res => {
        this.book = res["data"]["book"];
      })
  }

  updateBook() {
    this.httpClient.put(`/api/v1/books/${this.id}`, JSON.stringify(this.book), this.httpOptions)
      .subscribe(res => {
        if (res["status"]) {
          this.router.navigate(["/books"])
        } else {
          alert(`Lỗi nè:${res["data"]["errors"]}`.replace(/[:,]/g, "\n- "))
        }
      })
  }
}
