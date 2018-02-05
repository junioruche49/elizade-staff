import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { leadModel } from '../../models/lead.model'

/**
 * Generated class for the LeadviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leadview',
  templateUrl: 'leadview.html',
})
export class LeadviewPage {
	lead: leadModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.lead = this.navParams.get('template');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadviewPage');
  }

}
