import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { accountModel } from '../../models/account.model'
import { formService } from '../../services/forms.service'

/**
 * Generated class for the AccountviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountview',
  templateUrl: 'accountview.html',
})
export class AccountviewPage {
	account: accountModel

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService) {
  	this.account = this.navParams.get('template')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountviewPage');
  }

}
