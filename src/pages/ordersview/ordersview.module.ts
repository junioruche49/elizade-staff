import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersviewPage } from './ordersview';

@NgModule({
  declarations: [
    OrdersviewPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersviewPage),
  ],
})
export class OrdersviewPageModule {}
