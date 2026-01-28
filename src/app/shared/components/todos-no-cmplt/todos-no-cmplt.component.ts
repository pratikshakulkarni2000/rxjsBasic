import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo-service/todo.service';
import { Observable } from 'rxjs';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todos-no-cmplt',
  templateUrl: './todos-no-cmplt.component.html',
  styleUrls: ['./todos-no-cmplt.component.scss']
})
export class TodosNoCmpltComponent implements OnInit {

  todoNCmplteObs$ !: Observable<Itodo[]>

  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.todoNCmplteObs$ =   this._todoService.getNotCmpltedTodo()
  }

  trackById(index : number,todo : Itodo){
    return todo.id
  }

}
