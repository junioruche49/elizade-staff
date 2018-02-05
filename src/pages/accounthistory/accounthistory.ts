import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accountModel } from '../../models/account.model'
import { formService } from '../../services/forms.service'
import { AccountviewPage } from '../accountview/accountview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the AccounthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accounthistory',
  templateUrl: 'accounthistory.html',
})
export class AccounthistoryPage {
	accounts: accountModel[];
  User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
  	this.accounts = this.formservice.getaccount();

        let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.accounts = this.formservice.getaccount();
      console.log()
      if (this.accounts.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/accounts', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('accounts', data.data)
        this.formservice.addaccount(data.data);
        this.accounts = this.formservice.getaccount();
        console.log(this.accounts.length)
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

    if (this.accounts.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/accounts', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('accounts', data.data)
        this.formservice.addaccount(data.data);
        this.accounts = this.formservice.getaccount();
        console.log(this.accounts.length)
      }
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }

  }

  accountPage(value: accountModel){
  	this.navCtrl.push(AccountviewPage, {template: value})
  }

}
