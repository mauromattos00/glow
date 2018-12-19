import { Component, OnInit } from '@angular/core';

// ngRx
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tasks: any[];
  title = 'todos';

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('tasks').subscribe((state => this.tasks = state));
  }
}
