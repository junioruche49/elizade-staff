import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LeadhistoryPage } from '../pages/leadhistory/leadhistory'
import { OpportunityhistoryPage } from '../pages/opportunityhistory/opportunityhistory'
import { AccounthistoryPage } from '../pages/accounthistory/accounthistory'
import { OrdershistoryPage } from '../pages/ordershistory/ordershistory'
import { QuoteshistoryPage } from '../pages/quoteshistory/quoteshistory'
import { ContacthistoryPage } from '../pages/contacthistory/contacthistory'
import { SigninPage } from '../pages/signin/signin';
import { TaskPage } from '../pages/task/task'

import { Users } from '../services/users.service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private loadingCtrl: LoadingController, 
              private storage: Storage,
              public users: Users,
          public http: HttpClient) {

    this.http.get('http://elizade.ebukaokwuokenye.com/api/branches').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('branches', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    this.http.get('http://elizade.ebukaokwuokenye.com/api/states').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('states', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    this.http.get('http://elizade.ebukaokwuokenye.com/api/salespersons').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('salespersons', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    this.http.get('http://elizade.ebukaokwuokenye.com/api/genpostinggroup').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('generalposting', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    this.http.get('http://elizade.ebukaokwuokenye.com/api/vatpostinggroup').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('vatbusiness', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    this.http.get('http://elizade.ebukaokwuokenye.com/api/pricelist').subscribe((data: any) => {
      if (data.data.length > 0) {

      this.storage.set('pricelist', data.data)
      }

      console.log(data.data)
    },err => {
      console.log(err);
    })

    var loader = this.loadingCtrl.create({content: "Loading..."});
    loader.present();

    this.storage.get('staffuser')
      .then(user => {
        loader.dismiss();
        if(user){
          this.users.addUser(user);
          this.rootPage = HomePage;
        }else{
          this.rootPage = SigninPage;
        }
      }).catch(err => {
        loader.dismiss();
        this.rootPage = SigninPage;
      })

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Lead Management History', component: LeadhistoryPage, icon: 'document' },
      { title: 'Opportunities History', component: OpportunityhistoryPage, icon: 'archive' },
      { title: 'Account History', component: AccounthistoryPage, icon: 'person-add' },
      { title: 'Orders History', component: OrdershistoryPage, icon: 'clipboard' },
      { title: 'Quotes Management History', component: QuoteshistoryPage, icon: 'list-box' },
      { title: 'Contact History', component: ContacthistoryPage, icon: 'contact' },
      { title: 'Task', component: TaskPage, icon: 'list' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    })
    this.storage.get('user').then((val : any) => {
      console.log(val);
  });

    this.nav.setRoot(SigninPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
