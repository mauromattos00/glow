import { Component, OnInit } from '@angular/core';

import * as taskListActions from './store/actions/task.actions';

/* NgRx */
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';

/* RXJS */
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tasks = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new taskListActions.LoadTasks());
  }

  addTaskToList(task: string): void {
    this.tasks.push(task);
  }
}
