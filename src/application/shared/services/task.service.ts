// Imports
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TaskList, Task } from '../models/task.model';

import { GapiUserService } from './gapiUser.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class TaskService {
  private readonly URL: string = process.env.API_DOMAIN;
  private token: string;
  private expiredTokenMessage: string;

  // Resolve HTTP using the constructor
  constructor(private http: Http, private userService: GapiUserService) {
    this.token = this.userService.getToken();
  }

  // get all the user's lists
  getTasksList(): Observable<TaskList[]>  {
    return this.http.get(`${this.URL}/users/@me/lists?access_token=${this.token}`)
      .map((res: Response) => res.json().items)
      .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }

  // create a new tasklist
  newTaskList(list: any): Observable<TaskList[]>  {
    const url = `${this.URL}/users/@me/lists?access_token=${this.token}`;
    return this.http.post(url, list)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }

  // get all the tasks of a specific list
  getTasks(taskListId: string): Observable<Task[]>  {
    return this.http.get(`${this.URL}/lists/${taskListId}/tasks?access_token=${this.token}`)
      .map((res: Response) => res.json().items)
      .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }

  // new task
  newTask(taskListId: string, task: any): Observable<Task[]>  {
    const url = `${this.URL}/lists/${taskListId}/tasks?access_token=${this.token}`;

    return this.http.post(url, task)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }

  // complete task
  completeTask(taskListId: string, task: any): Observable<Task[]>  {
    const url = `${this.URL}/lists/${taskListId}/tasks/${task.id}?access_token=${this.token}`;
    const status = task.status !== 'completed' ? 'completed' : 'needsAction';
    delete task.completed; // needed to remove the 'completed' status

    // pass the full task object with modified status property
    return this.http.put(url, { ...task, status })
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }

  // delete task
  deleteTask(taskListId: string, task: any): Observable<Task[]>  {
    const url = `${this.URL}/lists/${taskListId}/tasks/${task.id}?access_token=${this.token}`;

    return this.http.delete(url)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || this.expiredTokenMessage));
  }
}
