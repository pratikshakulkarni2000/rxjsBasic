import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo-service/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todos-cmplt',
  templateUrl: './todos-cmplt.component.html',
  styleUrls: ['./todos-cmplt.component.scss']
})
export class TodosCmpltComponent implements OnInit {

  todos : Itodo[] = []

  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {

    this._todoService.getCompltTodo().subscribe(res => {
      this.todos = res
    })
  }

   trackById(index : number,todo : Itodo){
    return todo.id
  }

}
