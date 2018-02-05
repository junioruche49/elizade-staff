import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdershistoryPage } from './ordershistory';

@NgModule({
  declarations: [
    OrdershistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdershistoryPage),
  ],
})
export class OrdershistoryPageModule {}
