import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {

  }

  makeApiCall() {
    const url = 'http://numbersapi.com/42';
    this.httpClient.get(url).subscribe((response) => {
      console.log(response);
    });
  }

}
