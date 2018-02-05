import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountviewPage } from './accountview';

@NgModule({
  declarations: [
    AccountviewPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountviewPage),
  ],
})
export class AccountviewPageModule {}
