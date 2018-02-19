import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskmodal',
  templateUrl: 'taskmodal.html',
})
export class TaskmodalPage {
	items: any = [];
	itemExpandHeight: number = 100;
	data = true;
	element: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.items = [
            {	name: 'Lead Management',
            	icon: 'document',
            	expanded: false},
            {	
            	name: 'Opportunities',
            	icon: 'archive',
            	expanded: false},
            {	name: 'Account',
            	icon: 'person-add',
            	expanded: false},
            {	name: 'Orders',
            	icon: 'clipboard',
            	expanded: false},
            {	name: 'Quotes Management',
            	icon: 'list-box',
            	expanded: false}
        ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskmodalPage');
  }

  expandItem(item){
  	console.log(item)
 
        if (item == 'Lead Management') {
  		this.element = 'Lead Management'
  	}else if (item == 'Opportunities') {
  		this.element = 'Opportunities'
  	}else if (item == 'Account') {
  		this.element = 'Account'
  	}else if (item == 'Orders') {
  		this.element = 'Orders'
  	}else if (item == 'Quotes Management') {
  		this.element = 'Quotes Management'
  	}
 
    }

}
