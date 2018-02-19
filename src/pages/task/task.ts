import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskviewPage } from '../taskview/taskview'
import { NewtaskPage } from '../newtask/newtask'
import { formService } from '../../services/forms.service'
import { Task } from '../../models/task.model'

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

	tasks: Task[] = []

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formService) {
  	this.tasks = this.formservice.getTask();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  viewTask(task: Task){
  	this.navCtrl.push(TaskviewPage, {task: task});
  }

  addtask(){
  	this.navCtrl.push(NewtaskPage)
  }

}
