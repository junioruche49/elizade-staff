import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { Users } from '../../services/users.service'
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
	user: User;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams, 
  			  public loading: LoadingController,
  			  public alert: ToastController,
  			  private storage: Storage, 
  			  private http: HttpClient, 
  			  public users: Users
  			  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signin(form: NgForm){
  	const load = this.loading.create({content: 'loading...'})
  	load.present();

	const auth = this.users.authentic(form.value.email, form.value.password).subscribe((user:any) => {
				this.user = user.data.user
		        this.storage.set('staffuser', this.user);
		        console.log(this.user)
		        this.users.addUser(this.user);
		        load.dismiss();
		        this.navCtrl.setRoot(HomePage);

		    	},err =>{
		    		load.dismiss();
		    		this.alert.create({
		    			message: err.message,
		    			duration: 3500,
		    			position: 'bottom'
		    		}).present()

		    	})

  }

  signup(){
  	this.navCtrl.push(SignupPage);
  }

}
