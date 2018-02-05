import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { formService } from '../../services/forms.service'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
	user: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public storage: Storage,
  			  public http: HttpClient,
  			  public loading: LoadingController,
  			  public formservice: formService,
  			  public Users: Users,
  			  public toast: ToastController) {
  	this.user = this.Users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();

  	let headers = new HttpHeaders({'Authorization': 'Bearer '+this.user.token });
  	this.http.post('http://elizade.ebukaokwuokenye.com/api/staff/contacts',
  				  {firstname: form.value.firstname, 
					lastname: form.value.lastname, 
					email: form.value.email,
					phone: form.value.phone}, 
					{headers: headers})
  	.subscribe((data: any) => {
  		
  		const toast = this.toast.create({
  		message: data.message,
  		duration: 1500,
  		position: 'bottom'
  		});

  		loading.dismiss();
  		toast.present();
  	console.log(data);

  	
  		
  		this.navCtrl.pop();

  	},err => {
  		const toast2 = this.toast.create({
  		message: err.message,
  		duration: 1500,
  		position: 'bottom'
  	});
  		loading.dismiss();
  		toast2.present();
  	})

  }

}
