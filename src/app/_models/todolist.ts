export class TodoList {
    public id: string;
    public name:string;
    public description:string;
     public status: string;
     public todoDate: string;
    constructor (task){ 
        this.id = task.id;
        this.name = task.name;
        this.description = task.description;
        this.status = task.status;
        this.todoDate = task.todoDate;
     }
}