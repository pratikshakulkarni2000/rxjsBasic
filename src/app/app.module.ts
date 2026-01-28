import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { TodosCmpltComponent } from './shared/components/todos-cmplt/todos-cmplt.component';
import { TodosNoCmpltComponent } from './shared/components/todos-no-cmplt/todos-no-cmplt.component';
import { OneComponent } from './shared/subject/one/one.component';
import { TwoComponent } from './shared/subject/two/two.component';
import { ThreeComponent } from './shared/subject/three/three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    TodosComponent,
    TodosCmpltComponent,
    TodosNoCmpltComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
