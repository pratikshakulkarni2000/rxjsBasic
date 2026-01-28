import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { TodosCmpltComponent } from './shared/components/todos-cmplt/todos-cmplt.component';
import { TodosNoCmpltComponent } from './shared/components/todos-no-cmplt/todos-no-cmplt.component';
import { OneComponent } from './shared/subject/one/one.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'subject',
    component : OneComponent
  },
  {
    path : 'todos',
    component : TodosComponent
  },
  {
    path : 'todosCmplt',
    component : TodosCmpltComponent
  },
  {
    path : 'todosNCmplt',
    component : TodosNoCmpltComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
