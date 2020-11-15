import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class DataService {
  textMessages = '../assets/message_10.json';

  constructor(private http: HttpClient) { }
  getText() {
    return this.http.get(this.textMessages)
  }
}
