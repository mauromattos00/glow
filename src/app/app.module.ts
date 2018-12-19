import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todo: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
