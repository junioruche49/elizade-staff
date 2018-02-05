import { Injectable } from '@angular/core'
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { leadModel } from '../models/lead.model'
import { opportunityModel } from '../models/opportunity.model'
import { accountModel } from '../models/account.model'
import { ordersModel } from '../models/orders.model'
import { quotesModel } from '../models/quotes.model'
import { contactModel } from '../models/contact.model'

@Injectable()

export class formService{


	constructor(public storage: Storage,
  			  public http: HttpClient){}

	private lead : leadModel[] = [];

	private opportunity: opportunityModel[] = []

	private account: accountModel[] = [];

	private orders: ordersModel[] = [
			new ordersModel('Car fixing','lee', 'full fixing', '2000', 'car sales', 'ikeja', '12345'),
			new ordersModel('Car sale','lee', 'full sale', '2000', 'car sales', 'lekki', '12345')
	];

	private quotes: quotesModel[] = []

	private contact: contactModel[] = []

	getlead(){
		return this.lead.slice();
	}

	addlead(value: leadModel[]){
		this.lead.push(...value);
	}

	getopportunity(){
		return this.opportunity.slice();
	}

	addopportunity(value: opportunityModel[]){
		this.opportunity.push(...value);
	}

	addaccount(value: accountModel[]){
		this.account.push(...value);
	}

	getaccount(){
		return this.account.slice();
	}

	getorders(){
		return this.orders.slice();
	}

	addorders(value: ordersModel[]){
		this.orders.push(...value);
	}

	getquotes(){
		return this.quotes.slice();
	}

	addquotes(value: quotesModel[]){
		this.quotes.push(...value);
	}

	getcontact(){
		return this.contact.slice();
	}

	addcontact(value: contactModel[]){
		this.contact.push(...value);
	}

	removecontact(){
		this.contact = [];
	}










}


