import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddlistComponent } from './todolist/addlist/addlist.component';
import { HeaderComponent } from './header/header.component';
import { TodoDetailsComponent } from './todolist/todo-details/todo-details.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { TodoTaskService } from './_services/todo-task.service';

const appRoutes: Routes = [
  {path:'', component: TodolistComponent },
  {path:'todolist', component: TodolistComponent },
  {path:'addtask', component: AddlistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddlistComponent,
    HeaderComponent,
    TodoDetailsComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
