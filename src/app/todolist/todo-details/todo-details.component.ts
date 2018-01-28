import { Component, OnInit, Input, Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { TodoList } from '../../_models/todolist';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {

  @Input() taskDetails:TodoList
  @Output() emitUpdateTask = new EventEmitter<TodoList>();
  constructor() { }

  ngOnInit() { }
  
  onUpdate(taskId: HTMLInputElement, taskName: HTMLInputElement, 
    taskDesc: HTMLInputElement, taskStatus: HTMLInputElement, taskDate: HTMLInputElement){

      const update = {id: taskId.value, name: taskName.value, description: taskDesc.value,
        status: taskStatus.value, todoDate: taskDate.value}
      if (taskId.value){
        const updateTask = new TodoList(update);
        this.emitUpdateTask.emit(updateTask);
      }

  }
}
