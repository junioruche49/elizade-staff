import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { opportunityModel } from '../../models/opportunity.model'
import { formService } from '../../services/forms.service'
import { OpportunityviewPage } from '../opportunityview/opportunityview'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the OpportunityhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opportunityhistory',
  templateUrl: 'opportunityhistory.html',
})
export class OpportunityhistoryPage {
	opportunities: opportunityModel[];
  User: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
  	this.opportunities = this.formservice.getopportunity();

        let loader = this.loadingCtrl.create({content: "Loading..."});
    

      this.User = this.Users.getUser();
      this.opportunities = this.formservice.getopportunity();
      console.log()
      if (this.opportunities.length < 1 ) {
        loader.present();
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/opportunities', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('opportunities', data.data)
        this.formservice.addopportunity(data.data);
        this.opportunities = this.formservice.getopportunity();
        console.log(this.opportunities.length)
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
    if (this.opportunities.length > 0 ) {
        let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
        let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/opportunities', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.storage.set('opportunities', data.data)
        this.formservice.addopportunity(data.data);
        this.opportunities = this.formservice.getopportunity();
        console.log(this.opportunities.length)
      }
        
      
      
      console.log(data.data)
    },err => {
      console.log(err);
    })
      }
  }

  opportunityPage(value: opportunityModel){
  	this.navCtrl.push(OpportunityviewPage, {template: value})
  }

}
