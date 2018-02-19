import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { TaskmodalPage } from '../taskmodal/taskmodal'
import { formService } from '../../services/forms.service'
import { Task } from '../../models/task.model'
import { TaskPage } from '../task/task'

/**
 * Generated class for the NewtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtask',
  templateUrl: 'newtask.html',
})
export class NewtaskPage {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public modal: ModalController,
  			  public formservice: formService,
  			  public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtaskPage');
  }

  showmodal(){
  	this.modal.create(TaskmodalPage).present();
  }

  submit(form: NgForm){

  	let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  	let date = new Date(form.value.date_time);

  	 let day = date.getDate();
	  let monthIndex = date.getMonth();
	  let year = date.getFullYear();

	  let fulldate = day + ' ' + monthNames[monthIndex] + ' ' + year;

  	this.formservice.addTask(new Task(form.value.title, form.value.description, fulldate));

  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  		});

  	toast.present();

  	this.navCtrl.setRoot(TaskPage);
  }

}
