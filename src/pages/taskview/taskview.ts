import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../models/task.model'
import { LeadviewPage } from '../leadview/leadview'
import { OpportunityviewPage } from '../opportunityview/opportunityview'
import { AccountviewPage } from '../accountview/accountview'
import { OrdersviewPage } from '../ordersview/ordersview'
import { QuoteviewPage } from '../quoteview/quoteview'

/**
 * Generated class for the TaskviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskview',
  templateUrl: 'taskview.html',
})
export class TaskviewPage {
	task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.task = this.navParams.get('task');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskviewPage');
  }

  lead(lead: any){
  	this.navCtrl.push(LeadviewPage, {template: lead});
  }

  opportunity(opportunity: any){
  	this.navCtrl.push(OpportunityviewPage, {template: opportunity})
  }

  account(account: any){
  	this.navCtrl.push(AccountviewPage, {template: account})
  }

  orders(orders: any){
  	this.navCtrl.push(OrdersviewPage, {template: orders})
  }

  quotes(quotes: any){
  	this.navCtrl.push(QuoteviewPage, {template: quotes})
  }

}
