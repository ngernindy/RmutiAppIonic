import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';///GPS


@Component({
  selector: 'app-gpslocation',
  templateUrl: './gpslocation.page.html',
  styleUrls: ['./gpslocation.page.scss'],
})
export class GpslocationPage implements OnInit {
  lat1:any;
  lon1:any;
  // wlat:any;
  // wlong:any;

  positionlist: Array<{name:string,plat:number,plon:number,result:number}>;




  constructor(private geolocation: Geolocation) { 
  }

  ngOnInit() {
    this.getCurrentGPS();
    // this.getWatchGPS();
    
    this.positionlist = [
      {name:"ราชมงคลขอนแก่น",plat:16.4282615,plon:102.8614083,result:0}
    
    ];
    this.caldistance();

  }
  caldistance(){
    let lat2: number;
    let lon2: number;
    let total:number;
    for(let i=0;i<this.positionlist.length;i++){
      // console.log('i value', this.positionlist[i].name);
      lat2 = this.positionlist[i].plat;
      lon2 = this.positionlist[i].plon;
      total = this.positionlist[i].result;
      this.positionlist[i].result=this.distance(this.lat1,this.lon1,lat2,lon2);//เรียกเมทตอด
      console.log('value', this.positionlist[i]);

      if(this.positionlist[i].result <= 0.7){
        console.log('1');
        this.disabled=false;

      }else{
        console.log('2');
        this.disabled=true;

      }
    }
  }

  getCurrentGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat1 = resp.coords.latitude
      this.lon1 =  resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }
  // getWatchGPS(){
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     this.wlat = data.coords.latitude
  //     this.wlong = data.coords.longitude
  //    });
    
  // }

  distance(lat1:number, lon1:number, lat2:number, lon2:number) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344; //  unit K
    
    return dist
  }  

  public disabled = false;

  public action() {
    console.log('action triggered');
  }

  public change() {
    if(this.disabled = !this.disabled){
      this.disabled=true;
    }
  }

 

}
