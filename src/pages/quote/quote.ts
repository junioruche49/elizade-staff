import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
	user: User;
	quote: any;
	salespersons: any;
	departments: any;
	branches: any;
	pricelist: any

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public storage: Storage,
  			  public http: HttpClient,
  			  public loading: LoadingController,
  			  public Users: Users,
  			  public toast: ToastController) {
  	this.user = this.Users.getUser();

  	this.storage.get('pricelist')
      .then(pricelist => {

        if(pricelist){
        	this.pricelist = pricelist
        	console.log(pricelist)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/pricelist').subscribe( (data : any) => { 
        	this.pricelist = data.data   	
    	this.storage.set('pricelist', this.pricelist);
        console.log(this.pricelist)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/pricelist').subscribe((data : any) => { 
      	this.pricelist = data.data   	
    	this.storage.set('pricelist', this.pricelist);
        console.log(this.pricelist)
    	},err =>{console.log(err) })

      })

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

      this.storage.get('departments')
      .then(departments => {

        if(departments){
        	this.departments = departments
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/departments').subscribe( (data : any) => { 
        	this.departments = data.data   	
    	this.storage.set('departments', this.departments);
        console.log(this.departments)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/departments').subscribe((data : any) => { 
      	this.departments = data.data   	
    	this.storage.set('departments', this.departments);
        console.log(this.departments)
    	},err =>{console.log(err) })

      })

      this.storage.get('branches')
      .then(branches => {

        if(branches){
        	this.branches = branches
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe( (data : any) => { 
        	this.branches = data.data   	
    	this.storage.set('branches', this.branches);
        console.log(this.branches)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data : any) => { 
      	this.branches = data.data   	
    	this.storage.set('branches', this.branches);
        console.log(this.branches)
    	},err =>{console.log(err) })

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();

  	let headers = new HttpHeaders({'Authorization': 'Bearer '+this.user.token });
  	this.http.post('http://elizade.ebukaokwuokenye.com/api/staff/quotes',
  				  {quoteName: form.value.name, 
					customerNumber: form.value.customerNumber, 
					dimension: form.value.dimension,
					priceListName: form.value.priceList,
					department: form.value.department,
					branch: form.value.branch,
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

}
