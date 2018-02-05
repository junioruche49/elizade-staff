import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formService } from '../../services/forms.service'
import { quotesModel } from '../../models/quotes.model'
import { QuoteviewPage } from '../quoteview/quoteview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the QuoteshistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quoteshistory',
  templateUrl: 'quoteshistory.html',
})
export class QuoteshistoryPage {
	quotes: quotesModel[] = []
  User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
  	this.quotes = this.formservice.getquotes();

    let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.quotes = this.formservice.getquotes();
      console.log()
      if (this.quotes.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/quotes', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('quotes', data.data)
        this.formservice.addquotes(data.data);
        this.quotes = this.formservice.getquotes();
        console.log(this.quotes.length)
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
    if (this.quotes.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/quotes', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('quotes', data.data)
        this.formservice.addquotes(data.data);
        this.quotes = this.formservice.getquotes();
        console.log(this.quotes.length)
      }
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }
  }

  quotesPage(value: quotesModel){
  	this.navCtrl.push(QuoteviewPage, {template: value})
  }

}
