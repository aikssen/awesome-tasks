import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GapiUserService } from '../../shared/services/gapiUser.service';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'gapi-reports',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public viewId: string;
  public taskList: any;
  public tasks: any;
  public selectedList: any = {};
  public invalidForm: boolean = false;
  public showTaskListInput: boolean = false;
  public userOnSession: any;

  constructor(
    private gapiUserService: GapiUserService,
    private taskService: TaskService
  ) {}


  ngOnInit() {
    if (this.isSignedIn()) {
      this.getTaskLists();
      this.userOnSession = this.gapiUserService.userOnSession();
    }
  }

  // load user's tasklits
  getTaskLists() {
    this.taskService.getTasksList().subscribe((res: any) => {
      this.getTasks(res[0]); // load the tasks for the first list
      this.selectedList = res[0]; // set the default list
      this.taskList = res;
    });
  }

  newTaskList(list: any) {
    console.log('NEW TASKLIST', list.value);
    if (!list.valid) {
      // this.invalidForm = true;
    } else {
      // this.invalidForm = false;
      this.taskService.newTaskList(list.value).subscribe((res: any) => {
        this.getTaskLists();
        list.resetForm();
        this.toggleShowTaskListInput();
      });
    }
  }

  toggleShowTaskListInput() {
    this.showTaskListInput = !this.showTaskListInput;
  }

  // load the tasks for the given list
  getTasks(list: any) {
    this.selectedList = list; // update the default list
    this.taskService.getTasks(list.id).subscribe((res: any) => {
      const tasks = res || []; // if the taskList is empty set an empty array
      this.selectedList.total = tasks.length;
      this.tasks = tasks;
    });
  }

  newTask(task: NgForm) {
    const list = this.selectedList;
    if (!task.valid) {
      this.invalidForm = true;
    } else {
      this.invalidForm = false;
      this.taskService.newTask(list.id, task.value).subscribe((res: any) => {
        this.getTasks(list);
        task.resetForm();
      });
    }
  }

  toggleCompletedTask(task: any) {
    const list = this.selectedList;
    this.taskService.completeTask(list.id, task).subscribe((res: any) => {
      this.getTasks(list);
    });
  }

  deleteTask(task: any) {
    const list = this.selectedList;
    this.taskService.deleteTask(list.id, task).subscribe((res: any) => {
      this.getTasks(list);
    });
  }

  signIn(): void {
    this.gapiUserService.signIn();
  }

  signOff(): void {
    this.gapiUserService.singOut();
  }

  isSignedIn(): boolean {
    return this.gapiUserService.isUserSignedIn();
  }
}
