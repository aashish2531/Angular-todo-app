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

  dataObj;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  

  todoDataUrl = 'https://todo-app-apis.herokuapp.com/task';


  getLists(): Observable<List[]> {
    return of(LISTS);
  }

  addData(data) {
    let adddata = JSON.stringify(data)
    return this.http.post('https://todo-app-apis.herokuapp.com/task', adddata, this.httpOptions)
  }

  getConfig() {
    return this.http.get(this.todoDataUrl);
  }
  
  deleteData(index) {
    return this.http.delete(this.todoDataUrl + '/' + index);
  }

  updateData(data){
    this.dataObj = data;
  }

  edit(data){
   let  id=this.dataObj._id;
   let url=`${this.todoDataUrl}/${id}`;
   return this.http.put(url, data, this.httpOptions);
  }


}


