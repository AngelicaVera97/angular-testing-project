import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[] = [];

  
  constructor() { }

  addTask(task: string) {

  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }


}
