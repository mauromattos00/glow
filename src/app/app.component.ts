import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tasks = [];

  constructor() {}

  ngOnInit() { }

  addTaskToList(task: string): void {
    this.tasks.push(task);
  }
}
