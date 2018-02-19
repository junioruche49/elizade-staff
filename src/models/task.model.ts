import { Injectable } from '@angular/core'
import { leadModel } from './lead.model'
import { opportunityModel } from './opportunity.model'
import { ordersModel } from './orders.model'
import { accountModel } from './account.model'
import {quotesModel } from './quotes.model'

@Injectable()

export class Task{
	constructor(public title: string,
				public description: string,
				public date: string){}


				// public lead?: leadModel,
				// public opportunity?: opportunityModel,
				// public orders?: ordersModel,
				// public account?: ordersModel,
				// public quotes?: quotesModel

}

