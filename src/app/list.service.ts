import { Injectable } from '@angular/core';
import { List } from './list';
import { todoData } from './todoData'
import { LISTS } from './task-list';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return of(LISTS);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
   adddata = {"name":"gdg","description":"fgfd","dueDate":"2011-01-01","priority":"1"};

  todoDataUrl = 'https://todo-app-apis.herokuapp.com/task';

  addData(data) {
   // let adddata = JSON.stringify(data)
    console.log(this.adddata);
    return this.http.post('https://todo-app-apis.herokuapp.com/task', this.adddata);
  }
}


