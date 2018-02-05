import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { formService } from '../../services/forms.service'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

/**
 * Generated class for the LeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lead',
  templateUrl: 'lead.html',
})
export class LeadPage {

	businessSector: any;
	departments: any
	branches: any
	states: any;
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadPage');
  }

  submit(form: NgForm){

  	const loading = this.loading.create({
  		content: 'Sending..'
  	})
  	loading.present();

  	let headers = new HttpHeaders({'Authorization': 'Bearer '+this.user.token });
  	this.http.post('http://elizade.ebukaokwuokenye.com/api/staff/leads',
  				  {companyName: form.value.companyName, 
					firstname: form.value.firstname, 
					lastname: form.value.lastname,
					category: form.value.category,
					businessSector: form.value.bizSector,
					email: form.value.email,
					businessPhone: form.value.bizPhone,
					mobilePhone: form.value.mobilePhone,
					department: form.value.department,
					dimension: form.value.dimension,
					branch: form.value.branch,
					state: form.value.state,
					prodOrService: form.value.prodOrService,
					likelyPurchaseDate: form.value.purchaseDate,
					salesPerson: this.user.name}, 
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
