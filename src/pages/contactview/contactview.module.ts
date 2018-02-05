import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactviewPage } from './contactview';

@NgModule({
  declarations: [
    ContactviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactviewPage),
  ],
})
export class ContactviewPageModule {}
