import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { leadModel } from '../../models/lead.model'
import { formService } from '../../services/forms.service'
import { LeadviewPage } from '../leadview/leadview'
import { ordersModel } from '../../models/orders.model'
import { OrdersviewPage } from '../ordersview/ordersview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the LeadhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leadhistory',
  templateUrl: 'leadhistory.html',
})
export class LeadhistoryPage {
	leads: leadModel[];
  User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
        this.leads = this.formservice.getlead();

        let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.leads = this.formservice.getlead();
      console.log()
      if (this.leads.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/leads', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('leads', data.data)
        this.formservice.addlead(data.data);
        this.leads = this.formservice.getlead();
        console.log(this.leads.length)
      }
        
          loader.dismiss();
      
      
      console.log(data.data)
    },err => {
      console.log(err);
      loader.dismiss();
    })
      }
      console.log(this.leads)
  }

  ionViewDidLoad() {
    if (this.leads.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/leads', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('leads', data.data)
        this.formservice.addlead(data.data);
        this.leads = this.formservice.getlead();
        console.log(this.leads.length)
      }
        
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }
  }

  leadPage(template: leadModel){
  	this.navCtrl.push(LeadviewPage, {template: template});
  }

}
