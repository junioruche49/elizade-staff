import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ordersModel } from '../../models/orders.model'
import { formService } from '../../services/forms.service'
import { OrdersviewPage } from '../ordersview/ordersview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the OrdershistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordershistory',
  templateUrl: 'ordershistory.html',
})
export class OrdershistoryPage {
	orders: ordersModel[] = [];
  User: User;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
          public http: HttpClient,
          public storage: Storage,
  			  public formservice: formService,
          public loadingCtrl: LoadingController,
          public Users: Users) {
  			this.orders = this.formservice.getorders();

        let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.orders = this.formservice.getorders();
      console.log()
      if (this.orders.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('orders', data.data)
        this.formservice.addorders(data.data);
        this.orders = this.formservice.getorders();
        console.log(this.orders.length)
      }
        
          loader.dismiss();
      
      
      console.log(data.data)
    },err => {
      console.log(err);
      loader.dismiss();
    })
      }

  }

  ionViewDidLoad() {
    if (this.orders.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('orders', data.data)
        this.formservice.addorders(data.data);
        this.orders = this.formservice.getorders();
        console.log(this.orders.length)
      }
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }
  }

  ordersPage(value: ordersModel){
  	this.navCtrl.push(OrdersviewPage, {template: value})
  }

}
