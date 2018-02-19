import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../models/task.model'

/**
 * Generated class for the TaskviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskview',
  templateUrl: 'taskview.html',
})
export class TaskviewPage {
	task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.task = this.navParams.get('task');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskviewPage');
  }

}
