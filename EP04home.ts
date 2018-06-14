import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  Payment(){
    this.navCtrl.push(PaymentPage);
  }

  History(){
    this.navCtrl.push(HistoryPage);
  }
}