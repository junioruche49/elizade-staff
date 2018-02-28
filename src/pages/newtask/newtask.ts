import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, 
         NavController, 
         NavParams, 
         ModalController, 
         ToastController, 
         AlertController,
         LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskmodalPage } from '../taskmodal/taskmodal'
import { leadModel } from '../../models/lead.model'
import { opportunityModel } from '../../models/opportunity.model'
import { accountModel } from '../../models/account.model'
import { ordersModel } from '../../models/orders.model'
import { quotesModel } from '../../models/quotes.model'
import { formService } from '../../services/forms.service'
import { Task } from '../../models/task.model'
import { TaskPage } from '../task/task'
import { Users } from '../../services/users.service'
import { User } from '../../models/user.model'

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


  User: User;
  leads: leadModel[];
  opportunities: opportunityModel[];
  accounts: accountModel[];
  orders: ordersModel[];
  quotes: quotesModel[];
  datavalue: any;
  regard: any;
  type: any;

  regarding = [ {
      label : 'Lead Management',
      value : 'lead'}, 
    { label: 'Opportunities',
      value: 'opportunity' }, 
    { label: 'Account',
      value: 'account' }, 
    { label: 'Orders',
      value: 'orders' }, 
    { label: 'Quotes Management',
      value: 'quotes' }, ]

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public modal: ModalController,
  			  public formservice: formService,
  			  public toast: ToastController,
          public alertCtrl: AlertController,
          public http: HttpClient,
          public storage: Storage,
          public loadingCtrl: LoadingController,
          public Users: Users) {
    this.User = this.Users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtaskPage');
  }

  showmodal(){

    let alert = this.alertCtrl.create();
    alert.setTitle('Regarding To?');


    for (let regards of this.regarding) {
      let data = {
        type: 'radio',
        label: regards.label,
        value: regards.value,
        checked: false
      }
      alert.addInput(data);
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        
        if (data) {
          this.getData(data);
        }

      }
    });
    alert.present();

  }

  getData(data: any){

    let loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();

    if (data == 'lead') {

      let lead = this.formservice.getlead()
      if (lead.length < 1) {
        
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
      let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/leads', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {

        loader.dismiss();
        this.storage.set('leads', data.data)
        this.formservice.addlead(data.data);
        this.leads = this.formservice.getlead();


        let alert = this.alertCtrl.create();
      alert.setTitle('Select Lead');


      for (let leadvalue of this.leads) {

        let data:any = {
          type: 'radio',
          label: leadvalue.CompanyName,
          value: leadvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.CompanyName;
            this.regard = data;
            this.type = "lead";
          }

        }
      });
      alert.present();


      }
      
      },err => {
        console.log(err);
        loader.dismiss();
        this.toast.create({
          message: 'Something went wrong try again',
          duration: 1500,
          position: 'bottom'
        }).present();
      });

      }else{
        loader.dismiss();
        let alert = this.alertCtrl.create();
      alert.setTitle('Select Lead');


      for (let leadvalue of lead) {

        let data:any = {
          type: 'radio',
          label: leadvalue.CompanyName,
          value: leadvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.CompanyName;
            this.regard = data;
            this.type = "lead";
          }

        }
      });
      alert.present();

      }


    }else if (data == 'opportunity') {
      // code...

      let opportunity = this.formservice.getopportunity()
      if (opportunity.length < 1) {
        
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
      let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/opportunities', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        loader.dismiss();
        this.storage.set('opportunities', data.data)
        this.formservice.addopportunity(data.data);
        this.opportunities = this.formservice.getopportunity()


        let alert = this.alertCtrl.create();
      alert.setTitle('Select Opportunity');


      for (let opportunityvalue of this.opportunities) {

        let data:any = {
          type: 'radio',
          label: opportunityvalue.CustomerName+' '+opportunityvalue.Topic,
          value: opportunityvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.CustomerName+' '+data.Topic;
            this.regard = data;
            this.type = "opportunity";
          }
        }
      });
      alert.present();


      }
      
      
      },err => {
        console.log(err);
        loader.dismiss();
        this.toast.create({
          message: 'Something went wrong try again',
          duration: 1500,
          position: 'bottom'
        }).present();
      });

      }else{
        loader.dismiss();

        let alert = this.alertCtrl.create();
      alert.setTitle('Select Opportunity');


      for (let opportunityvalue of opportunity) {

        let data:any = {
          type: 'radio',
          label: opportunityvalue.CustomerName+' - '+opportunityvalue.Topic,
          value: opportunityvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.CustomerName+' '+data.Topic;
            this.regard = data;
            this.type = "opportunity";
          }

        }
      });
      alert.present();

      }

    }else if (data == 'account') {
      // code...
      let account = this.formservice.getaccount();
      if (account.length < 1) {
        
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
      let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/accounts', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        loader.dismiss();
        this.storage.set('accounts', data.data)
        this.formservice.addaccount(data.data);
        this.accounts = this.formservice.getaccount();


        let alert = this.alertCtrl.create();
      alert.setTitle('Select Account');


      for (let accounts of this.accounts) {

        let data:any = {
          type: 'radio',
          label: accounts.Name+' '+accounts.Department,
          value: accounts,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.Name+' '+data.Department;
            this.regard = data;
            this.type = "account";
          }

        }
      });
      alert.present();

      }
      
      
      },err => {
        console.log(err);
        loader.dismiss();
        this.toast.create({
          message: 'Something went wrong try again',
          duration: 1500,
          position: 'bottom'
        }).present();
      });

      }else{
        loader.dismiss();

        let alert = this.alertCtrl.create();
      alert.setTitle('Select Account');


      for (let accountvalue of account) {

        let data:any = {
          type: 'radio',
          label: accountvalue.Name+' - '+accountvalue.Department,
          value: accountvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.Name+' '+data.Department;
            this.regard = data;
            this.type = "account";
          }

        }
      });
      alert.present();

      }

    
    }else if (data == 'orders') {
      // code...
      let orders = this.formservice.getorders();
      if (orders.length < 1) {
        
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
      let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/appointments', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        loader.dismiss();
        this.storage.set('orders', data.data)
        this.formservice.addorders(data.data);
        this.orders = this.formservice.getorders();


        let alert = this.alertCtrl.create();
      alert.setTitle('Select Order');


      for (let ordersvalue of this.orders) {

        let data:any = {
          type: 'radio',
          label: ordersvalue.customer,
          value: ordersvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.customer;
            this.regard = data;
            this.type = "orders";
          }

        }
      });
      alert.present();

      }
      
      
      },err => {
        console.log(err);
        loader.dismiss();
        this.toast.create({
          message: 'Something went wrong try again',
          duration: 1500,
          position: 'bottom'
        }).present();
      });

      }else{
        loader.dismiss();

        let alert = this.alertCtrl.create();
      alert.setTitle('Select Order');


      for (let ordersvalue of orders) {

        let data:any = {
          type: 'radio',
          label: ordersvalue.customer,
          value: ordersvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.customer;
            this.regard = data;
            this.type = "orders";
          }

        }
      });
      alert.present();

      }

    
    }else if (data == 'quotes') {
      // code...
      let quotes = this.formservice.getquotes();
      if (quotes.length < 1) {
        
      let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
      let products =  this.http.get('http://elizade.ebukaokwuokenye.com/api/staff/quotes', {headers: headers}).subscribe((data: any) => {
      if (data.data.length > 0) {
        loader.dismiss();
        this.storage.set('quotes', data.data)
        this.formservice.addquotes(data.data);
        this.quotes = this.formservice.getquotes();


        let alert = this.alertCtrl.create();
      alert.setTitle('Select Quote');


      for (let quotesvalue of this.quotes) {

        let data:any = {
          type: 'radio',
          label: quotesvalue.QuoteName,
          value: quotesvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.QuoteName;
            this.regard = data;
            this.type = "quotes";
          }

        }
      });
      alert.present();

      }
      
      
      },err => {
        console.log(err);
        loader.dismiss();
        this.toast.create({
          message: 'Something went wrong try again',
          duration: 1500,
          position: 'bottom'
        }).present();
      });

      }else{
        loader.dismiss();

        let alert = this.alertCtrl.create();
      alert.setTitle('Select Quote');


      for (let quotesvalue of quotes) {

        let data:any = {
          type: 'radio',
          label: quotesvalue.QuoteName,
          value: quotesvalue,
          checked: false
        }
        alert.addInput(data);
      }

      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: data => {
          
          if (data) {
            this.datavalue = data.QuoteName;
            this.regard = data;
            this.type = "quotes";
          }

        }
      });
      alert.present();

      }

    
    }

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

    if (this.type) {
      if (this.type == 'lead') {
          this.formservice.addTask(
         {
           title: form.value.title,
           description: form.value.description,
           date: fulldate,
           lead: this.regard
         }
        );
      }else if (this.type == 'opportunity') {
        this.formservice.addTask(
         {
           title: form.value.title,
           description: form.value.description,
           date: fulldate,
           opportunity: this.regard
         }
        );
      }else if (this.type == 'account') {
        this.formservice.addTask(
         {
           title: form.value.title,
           description: form.value.description,
           date: fulldate,
           account: this.regard
         }
        );
      }else if (this.type == 'orders') {
        this.formservice.addTask(
         {
           title: form.value.title,
           description: form.value.description,
           date: fulldate,
           orders: this.regard
         }
        );
      }else if (this.type == 'quotes') {
        this.formservice.addTask(
         {
           title: form.value.title,
           description: form.value.description,
           date: fulldate,
           quotes: this.regard
         }
        );
      }
      
    }else{
      this.formservice.addTask(new Task(form.value.title, form.value.description, fulldate));
    }

    console.log(this.formservice.getTask())

  	

  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  		});

  	toast.present();

  	this.navCtrl.setRoot(TaskPage);
  }

}
