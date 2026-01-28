import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  BASE_URL : string = environment.BASE_URL;
  TODOS_URL : string = `${this.BASE_URL}/todos`

  constructor(
    private _httpClient : HttpClient
  ) { }

  getTodos() : Observable<Itodo[]>{
    return this._httpClient.get<Itodo[]>(this.TODOS_URL)
  }

  getCompltTodo() : Observable<Itodo[]>{
    return this.getTodos().pipe(
      map(arr => arr.filter(todo => {
        return todo.completed
      }))
    )
  }


  getNotCmpltedTodo() : Observable<Itodo[]>{
    return this.getTodos().pipe(
      map(arr => arr.filter(todo => !todo.completed))
    )
  }
}
