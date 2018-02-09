import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskviewPage } from './taskview';

@NgModule({
  declarations: [
    TaskviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskviewPage),
  ],
})
export class TaskviewPageModule {}
