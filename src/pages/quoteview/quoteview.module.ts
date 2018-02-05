import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuoteviewPage } from './quoteview';

@NgModule({
  declarations: [
    QuoteviewPage,
  ],
  imports: [
    IonicPageModule.forChild(QuoteviewPage),
  ],
})
export class QuoteviewPageModule {}
