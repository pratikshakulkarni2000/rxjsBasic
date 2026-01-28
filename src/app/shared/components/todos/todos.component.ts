import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo-service/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todosArr : Itodo[] =[]

  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(res => {
      this.todosArr = res
    })
  }

   trackById(index : number,todo : Itodo){
    return todo.id
  }

}
