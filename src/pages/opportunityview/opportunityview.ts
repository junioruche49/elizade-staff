import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { opportunityModel } from '../../models/opportunity.model'

/**
 * Generated class for the OpportunityviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opportunityview',
  templateUrl: 'opportunityview.html',
})
export class OpportunityviewPage {
	opportunities: opportunityModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.opportunities = this.navParams.get('template');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpportunityviewPage');
  }

}
