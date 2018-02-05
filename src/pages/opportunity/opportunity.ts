import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the OpportunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opportunity',
  templateUrl: 'opportunity.html',
})
export class OpportunityPage {

	user: User;
	salespersons: any
	
	@ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public storage: Storage,
  			  public http: HttpClient,
  			  public loading: LoadingController,
  			  public Users: Users,
  			  public toast: ToastController) {

  	this.user = this.Users.getUser();

  	this.storage.get('salespersons')
      .then(salespersons => {

        if(salespersons){
        	this.salespersons = salespersons
        	console.log(salespersons)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/salespersons').subscribe( (data : any) => { 
        	this.salespersons = data.data   	
    	this.storage.set('salespersons', this.salespersons);
        console.log(this.salespersons)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data : any) => { 
      	this.salespersons = data.data   	
    	this.storage.set('salespersons', this.salespersons);
        console.log(this.salespersons)
    	},err =>{console.log(err) })

      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpportunityPage');
  }

   submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();

  	let headers = new HttpHeaders({'Authorization': 'Bearer '+this.user.token });
  	this.http.post('http://elizade.ebukaokwuokenye.com/api/staff/opportunities',
  				  {topic: form.value.topic, 
					customerNumber: form.value.customer, 
					description: form.value.description,
					dimension: form.value.dimension,
					estCloseDate: form.value.estCloseDate,
					probability: form.value.probability,
					rating: form.value.rating,
					salesPerson: form.value.salespersons}, 
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

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
	}

}
