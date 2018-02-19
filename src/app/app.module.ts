import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LeadPage } from '../pages/lead/lead'
import { OpportunityPage } from '../pages/opportunity/opportunity'
import { AccountPage } from '../pages/account/account'
import { OrderPage } from '../pages/order/order'
import { QuotePage } from '../pages/quote/quote'
import { ContactPage } from '../pages/contact/contact'
import { LeadhistoryPage } from '../pages/leadhistory/leadhistory'
import { OpportunityhistoryPage } from '../pages/opportunityhistory/opportunityhistory'
import { AccounthistoryPage } from '../pages/accounthistory/accounthistory'
import { OrdershistoryPage } from '../pages/ordershistory/ordershistory'
import { QuoteshistoryPage } from '../pages/quoteshistory/quoteshistory'
import { ContacthistoryPage } from '../pages/contacthistory/contacthistory'
import { LeadviewPage } from '../pages/leadview/leadview'
import { OpportunityviewPage } from '../pages/opportunityview/opportunityview'
import { AccountviewPage } from '../pages/accountview/accountview'
import { OrdersviewPage } from '../pages/ordersview/ordersview'
import { QuoteviewPage } from '../pages/quoteview/quoteview'
import { ContactviewPage } from '../pages/contactview/contactview'
import { SigninPage } from '../pages/signin/signin'
import { SignupPage } from '../pages/signup/signup'
import { TaskPage } from '../pages/task/task'
import { TaskviewPage } from '../pages/taskview/taskview'
import { NewtaskPage } from '../pages/newtask/newtask'
import { TaskmodalPage } from '../pages/taskmodal/taskmodal'
import { ExpandableComponent } from '../components/expandable/expandable'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { formService } from '../services/forms.service'
import { Users } from '../services/users.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LeadPage,
    OpportunityPage,
    AccountPage,
    OrderPage,
    QuotePage,
    ContactPage,
    LeadhistoryPage,
    OpportunityhistoryPage,
    AccounthistoryPage,
    OrdershistoryPage,
    QuoteshistoryPage,
    ContacthistoryPage,
    LeadviewPage,
    OpportunityviewPage,
    AccountviewPage,
    OrdersviewPage,
    QuoteviewPage,
    ContactviewPage,
    SigninPage,
    SignupPage,
    TaskPage,
    TaskviewPage,
    NewtaskPage,
    TaskmodalPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LeadPage,
    OpportunityPage,
    AccountPage,
    OrderPage,
    QuotePage,
    ContactPage,
    LeadhistoryPage,
    OpportunityhistoryPage,
    AccounthistoryPage,
    OrdershistoryPage,
    QuoteshistoryPage,
    ContacthistoryPage,
    LeadviewPage,
    OpportunityviewPage,
    AccountviewPage,
    OrdersviewPage,
    QuoteviewPage,
    ContactviewPage,
    SigninPage,
    SignupPage,
    TaskPage,
    TaskviewPage,
    NewtaskPage,
    TaskmodalPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    formService,
    Users
  ]
})
export class AppModule {}
