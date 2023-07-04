import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
