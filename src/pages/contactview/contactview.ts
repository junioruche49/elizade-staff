import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { contactModel } from '../../models/contact.model'

/**
 * Generated class for the ContactviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactview',
  templateUrl: 'contactview.html',
})
export class ContactviewPage {
	contact: contactModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.contact = this.navParams.get('template');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactviewPage');
  }

}
