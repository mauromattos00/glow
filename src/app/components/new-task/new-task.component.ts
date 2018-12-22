import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() addTextEvent = new EventEmitter;

  public taskText: string;

  constructor() { }

  ngOnInit() {
  }

  addTask(): void {
    if (this.taskText) {
      this.addTextEvent.emit(this.taskText);
      this.taskText = '';
    }
  }
}
