import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadviewPage } from './leadview';

@NgModule({
  declarations: [
    LeadviewPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadviewPage),
  ],
})
export class LeadviewPageModule {}
