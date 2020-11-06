import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  latlng:any;

  constructor(private geolocation: Geolocation) { 

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latlng = resp.coords.latitude+ ','+resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
  }

}
