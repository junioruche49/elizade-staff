import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContacthistoryPage } from './contacthistory';

@NgModule({
  declarations: [
    ContacthistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ContacthistoryPage),
  ],
})
export class ContacthistoryPageModule {}
