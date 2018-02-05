import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ordersModel } from '../../models/orders.model'
import { formService } from '../../services/forms.service'

/**
 * Generated class for the OrdersviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordersview',
  templateUrl: 'ordersview.html',
})
export class OrdersviewPage {
	orders: ordersModel;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService) {
  	this.orders = this.navParams.get('template')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersviewPage');
  }

}
