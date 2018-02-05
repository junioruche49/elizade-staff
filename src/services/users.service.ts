import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { User } from '../models/user.model'

@Injectable()

export class Users{

	User: User;
	constructor (private http: HttpClient,
  			  	private storage: Storage){
		
	}

	authentic(user:any, password: any){

		return this.http.post('http://elizade.ebukaokwuokenye.com/api/loginstaff', {username: user, password: password})


	}

	getUser(){
		
			return this.User;
		
		
	}

	addUser(user: User){
		this.User = user;
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		
		this.http.get('http://elizade.ebukaokwuokenye.com/api/businesssectors').subscribe((data: any) => {
			if (data.data.length > 0) {

			this.storage.set('businesssectors', data.data)
			}

			console.log(data.data)
		},err => {
			console.log(err);
		})

		this.http.get('http://elizade.ebukaokwuokenye.com/api/departments').subscribe((data: any) => {
			if (data.data.length > 0) {

			this.storage.set('departments', data.data)
			}

			console.log(data.data)
		},err => {
			console.log(err);
		})

		this.http.get('http://elizade.ebukaokwuokenye.com/api/countries').subscribe((data: any) => {
			if (data.data.length > 0) {

			this.storage.set('countries', data.data)
			}

			console.log(data.data)
		},err => {
			console.log(err);
		})

		this.http.get('http://elizade.ebukaokwuokenye.com/api/custpostinggroup').subscribe((data: any) => {
			if (data.data.length > 0) {

			this.storage.set('customerposting', data.data)
			}

			console.log(data.data)
		},err => {
			console.log(err);
		})

		// this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data: any) => {
		// 	if (data.data.length > 0) {

		// 	this.storage.set('branches', data.data)
		// 	}

		// 	console.log(data.data)
		// },err => {
		// 	console.log(err);
		// })

		// this.http.get('http://elizade.ebukaokwuokenye.com/api/states').subscribe((data: any) => {
		// 	if (data.data.length > 0) {

		// 	this.storage.set('states', data.data)
		// 	}

		// 	console.log(data.data)
		// },err => {
		// 	console.log(err);
		// })

	}

}






















