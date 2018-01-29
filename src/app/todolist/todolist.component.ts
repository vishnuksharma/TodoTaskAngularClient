import { Component, OnInit, Output } from '@angular/core';
import { TodoList } from '../_models/todolist';
import { TodoTaskService } from '../_services/todo-task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  toDoTaskList;

  taskEdited = false;

  detailedTask: TodoList;
  constructor(private todoTaskService: TodoTaskService) { }

  ngOnInit() {
    try {
      this.todoTaskService.getTaskList()
      .subscribe( response => {
       this.toDoTaskList = response;
       console.log(this.toDoTaskList);
        
      });
     } catch (error) {
      console.log("api error", error);
     }
  }
  onEditTask(tast: TodoList){
    this.detailedTask = tast;
    this.taskEdited = true;
  }
  onDeleteTask(tast: TodoList, taskId: string){
    const taskTobeDeleted = this.toDoTaskList.indexOf(tast);
    try {
      this.todoTaskService.deleteTask(taskId)
      .subscribe( response => {
       console.log(response);
       if (response == 'Success'){
        this.toDoTaskList.splice(taskTobeDeleted, 1);
       }
        
      });
     } catch (error) {
      console.log("api error", error);
     }
  }

  onAddNewTask(newTask: TodoList){
    try {
      this.todoTaskService.addTask(newTask)
      .subscribe( response => {
      this.toDoTaskList.push(response);
      
        
      });
     } catch (error) {
      console.log("api error", error);
     }
  }

  taskUpdate(toUpdateTask: TodoList){
    try {
      this.todoTaskService.updateTask(toUpdateTask)
      .subscribe( response => {
        const updatedVal = new TodoList(response);
        const index = this.toDoTaskList.findIndex(todo => todo.id == updatedVal.id);
        this.toDoTaskList[index] = updatedVal;
        this.taskEdited = false;
        // this.toDoTaskList.map((todo, i) => {
        //  if (todo.id == updatedVal.id){
        //     this.toDoTaskList[i] = updatedVal;
        //   }
        // });
      
        
      });
     } catch (error) {
      console.log("api error", error);
     }
  }
}
