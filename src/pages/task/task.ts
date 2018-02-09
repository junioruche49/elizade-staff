import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskviewPage } from '../taskview/taskview'
import { NewtaskPage } from '../newtask/newtask'

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  viewTask(){
  	this.navCtrl.push(TaskviewPage);
  }

  addtask(){
  	this.navCtrl.push(NewtaskPage)
  }

}
