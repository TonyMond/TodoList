import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from '../task-storage.service';
import { Task } from '../models/task.model';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit {
// task = {
//   title: "Titre1",
//   description: "Description1"
// }



currentsTaches: Task[] = [];

remainingTache: Task[] = [];




  constructor(private storage: TaskStorageService) { }

  ngOnInit(): void {
    this.storage.init();
    this.currentsTaches = this.storage.tasks;
  }

  deleteTask(id: string){
    console.log(id);
    
    this.storage.delete(id);
    this.currentsTaches= this.storage.getTasks();
  };

}
