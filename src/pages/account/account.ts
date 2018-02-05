import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

	countries: any;
	states: any;
	departments: any;
	branches: any;
	businessSector: any
	generalposting: any;
	customerposting: any
	vatbusiness: any
	user: User;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public storage: Storage,
  			  public http: HttpClient,
  			  public loading: LoadingController,
  			  public toast: ToastController,
  			  public Users: Users) {
  	this.user = this.Users.getUser();

  	this.storage.get('countries')
      .then(countries => {

        if(countries){
        	this.countries = countries
        	console.log(countries)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/countries').subscribe( (data : any) => { 
        	this.countries = data.data   	
    	this.storage.set('countries', this.countries);
        console.log(this.countries)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/countries').subscribe((data : any) => { 
      	this.countries = data.data   	
    	this.storage.set('countries', this.countries);
        console.log(this.countries)
    	},err =>{console.log(err) })

      })

      this.storage.get('states')
      .then(states => {

        if(states){
        	this.states = states
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/states').subscribe( (data : any) => { 
        	this.states = data.data   	
    	this.storage.set('states', this.states);
        console.log(this.states)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/states').subscribe((data : any) => { 
      	this.states = data.data   	
    	this.storage.set('states', this.states);
        console.log(this.states)
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

      this.storage.get('businesssectors')
      .then(businesssectors => {

        if(businesssectors){
        	this.businessSector = businesssectors
        	console.log(businesssectors)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe( (data : any) => { 
        	this.businessSector = data.data   	
    	this.storage.set('businesssectors', this.businessSector);
        console.log(this.businessSector)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data : any) => { 
      	this.businessSector = data.data   	
    	this.storage.set('businesssectors', this.businessSector);
        console.log(this.businessSector)
    	},err =>{console.log(err) })

      })

      this.storage.get('generalposting')
      .then(generalposting => {

        if(generalposting){
        	this.generalposting = generalposting
        	console.log(generalposting)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/genpostinggroup').subscribe( (data : any) => { 
        	this.generalposting = data.data   	
    	this.storage.set('generalposting', this.generalposting);
        console.log(this.generalposting)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/genpostinggroup').subscribe((data : any) => { 
      	this.generalposting = data.data   	
    	this.storage.set('generalposting', this.generalposting);
        console.log(this.generalposting)
    	},err =>{console.log(err) })

      })

      this.storage.get('customerposting')
      .then(customerposting => {

        if(customerposting){
        	this.customerposting = customerposting
        	console.log(customerposting)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/custpostinggroup').subscribe( (data : any) => { 
        	this.businessSector = data.data   	
    	this.storage.set('customerposting', this.customerposting);
        console.log(this.customerposting)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/custpostinggroup').subscribe((data : any) => { 
      	this.customerposting = data.data   	
    	this.storage.set('customerposting', this.customerposting);
        console.log(this.customerposting)
    	},err =>{console.log(err) })

      })

      this.storage.get('vatbusiness')
      .then(vatbusiness => {

        if(vatbusiness){
        	this.vatbusiness = vatbusiness
        	console.log(vatbusiness)
        }else{
        	
        	this.http.get('http://elizade.ebukaokwuokenye.com/api/vatpostinggroup').subscribe( (data : any) => { 
        	this.vatbusiness = data.data   	
    	this.storage.set('vatbusiness', this.vatbusiness);
        console.log(this.vatbusiness)
    	},err =>{console.log(err) })

        }
      }).catch(err => {

      	this.http.get('http://elizade.ebukaokwuokenye.com/api/vatpostinggroup').subscribe((data : any) => { 
      	this.vatbusiness = data.data   	
    	this.storage.set('vatbusiness', this.vatbusiness);
        console.log(this.vatbusiness)
    	},err =>{console.log(err) })

      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();

  	let headers = new HttpHeaders({'Authorization': 'Bearer '+this.user.token });
  	this.http.post('http://elizade.ebukaokwuokenye.com/api/staff/accounts',
  				  {accountName: form.value.accountName, 
					email: form.value.email, 
					phone: form.value.phone,
					salesPerson: this.user.name,
					country: form.value.country,
					state: form.value.state,
					acctType: form.value.acctType,
					customerClass: form.value.custClass,
					customerCategory: form.value.custCategory,
					origin: form.value.origin,
					department: form.value.department,
					branch: form.value.branch,
					businessSector: form.value.bizSector,
					genBusinessGrp: form.value.genbizgrp,
					customerPostGrp: form.value.custPostGrp,
					vatPostGrp: form.value.vatPostGrp}, 
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






















