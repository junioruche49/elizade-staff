import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeadPage } from '../lead/lead'
import { OpportunityPage } from '../opportunity/opportunity'
import { AccountPage } from '../account/account'
import { OrderPage } from '../order/order'
import { QuotePage } from '../quote/quote'
import { ContactPage } from '../contact/contact'
import { formService } from '../../services/forms.service'
import { Task } from '../../models/task.model'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	leadpage = LeadPage;
	opportunity = OpportunityPage;
	account = AccountPage
	order = OrderPage;
	quote = QuotePage
	contact = ContactPage
	task: Task[];
	tasks: Task[];

  constructor(public navCtrl: NavController,
  			  public formservice: formService) {

  	let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  	let date = new Date();

  	let day = date.getDate();
	  let monthIndex = date.getMonth();
	  let year = date.getFullYear();

	  let fulldate = day + ' ' + monthNames[monthIndex] + ' ' + year;

  	this.task = this.formservice.getTask();
  	this.tasks  = this.task.filter(this.findall(fulldate));

  }

  findall(arg) {
  	// body...
  	return function findModel(model) { 
     return model.date === arg;
  }

  }

  gotopage(page: any){
  	this.navCtrl.push(page);
  }

}
