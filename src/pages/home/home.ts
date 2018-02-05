import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeadPage } from '../lead/lead'
import { OpportunityPage } from '../opportunity/opportunity'
import { AccountPage } from '../account/account'
import { OrderPage } from '../order/order'
import { QuotePage } from '../quote/quote'
import { ContactPage } from '../contact/contact'

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

  constructor(public navCtrl: NavController) {

  }

  gotopage(page: any){
  	this.navCtrl.push(page);
  }

}
