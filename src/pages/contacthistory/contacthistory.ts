import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { contactModel } from '../../models/contact.model'
import { formService } from '../../services/forms.service'
import { ContactviewPage } from '../contactview/contactview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the ContacthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacthistory',
  templateUrl: 'contacthistory.html',
})
export class ContacthistoryPage {
	contact: contactModel[];
  User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
  		this.contact = this.formservice.getcontact();

        let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.contact = this.formservice.getcontact();
      console.log()
      if (this.contact.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/contacts', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('contact', data.data)
        this.formservice.addcontact(data.data);
        this.contact = this.formservice.getcontact();
        console.log(this.contact.length)
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

    if (this.contact.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/contacts', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('contact', data.data)
        this.formservice.addcontact(data.data);
        this.contact = this.formservice.getcontact();
        console.log(this.contact.length)
      }
        
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }

  }

  contactPage(value: contactModel){
  	this.navCtrl.push(ContactviewPage, {template: value})
  }

}
