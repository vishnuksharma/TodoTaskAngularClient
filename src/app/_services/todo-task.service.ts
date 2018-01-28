import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';
import { TodoList } from 'app/_models/todolist';

const API_URL = environment.API_URL;

@Injectable()
export class TodoTaskService {
    constructor(private http: Http) { }

    public getTaskList(): Observable<TodoList> {
        return this.http
          .get(API_URL+'/todoList')
          .map(response => {
            console.log('Res : '+response);
            const task = response.json();
            return task.map((task) => new TodoList(task));
          
        }).catch(this.handleError);
      }

      public addTask(newTask) {
        const body = newTask;
        const headers = new Headers(
            { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        );
        let options = new RequestOptions({ headers: headers});

        return this.http
          .post(API_URL+'/addTask', body)
          .map(response => {
             const newTask = response.json();
             return newTask;
          
        }).catch(this.handleError);
      }

      public updateTask(newTask) {
        const body = newTask;
        const headers = new Headers(
            { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        );
        let options = new RequestOptions({ headers: headers});

        return this.http
          .post(API_URL+'/updateTask', body)
          .map(response => {
             const newTask = response.json();
             return newTask;
          
        }).catch(this.handleError);
      }

      public deleteTask(taskId) {
        const headers = new Headers(
            { 
                'Access-Control-Allow-Origin': '*'
            }
        );
        let options = new RequestOptions({ headers: headers});

        return this.http
          .delete(API_URL+'/deleteTask?taskId='+taskId, 
          options)
          .map(response => {
            let responseText = '';
            if (response.status == 200){
                responseText = 'Success';
               }
             return responseText;
          
        }).catch(this.handleError);
      }
    
      handleError(error: Response | any) {
        console.error('todo task service failed', error);
        // return Observable.throw(error.statusText='ERROR');
        return 'E';
      }

}