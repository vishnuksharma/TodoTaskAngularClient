import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { TodoList } from '../../_models/todolist';
import {  } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  @Output() emitNewTask = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onAddTask(taskName: HTMLInputElement){
    
    const date = new Date();
    const today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    // console.log(today);
      const name = taskName.value;
      const addTask = {name: name, description: name, status: 'active', todoDate: today}
      if (name){
        const newTask = new TodoList(addTask);
        this.emitNewTask.emit(newTask);
      }
  }
}
