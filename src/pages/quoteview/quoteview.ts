import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formService } from '../../services/forms.service'
import { quotesModel } from '../../models/quotes.model'

/**
 * Generated class for the QuoteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quoteview',
  templateUrl: 'quoteview.html',
})
export class QuoteviewPage {
	quote: quotesModel

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService) {
  	this.quote = this.navParams.get('template')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteviewPage');
  }

}
