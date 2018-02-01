import { Component, OnInit, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { TodoList } from '../../_models/todolist';
import { TodoTaskService } from '../../_services/todo-task.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  @Output() emitNewTask = new EventEmitter()
  @Input() toDoTaskList: TodoList[];
  constructor(private todoTaskService: TodoTaskService) { }

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

        try {
          this.todoTaskService.addTask(newTask)
          .subscribe( response => {
            console.log(response);
            taskName.value = '';
          this.toDoTaskList.push(response);
          
            
          });
         } catch (error) {
          console.log("api error", error);
         }
      }
  }
}
