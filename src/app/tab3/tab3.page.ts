import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Http, ResponseOptions, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';///GPS

import { AlertController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';







@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any = null;
  student_id: any;
  username: string;

  username1: any;

  student = [];


  lat1: any;
  lon1: any;

  activities_id:any;
  activities_topic:any;
  activities_unit:any;
  activities_term:any;
  activities_year:any;
  activities_date:any;
  time_out:any;
  atttype_id:any;
  lat:any;
  lng:any;
  act_status:any;
  textone:any;

  buttonShow:boolean;
  buttonShow2:boolean;

  imageList:any;
  base64Image:any;

  singleImage:any;
  single:any;
  Image_base64:any;
  join:any;
  join_id:any;
  latlng:any;




  positionlist: Array<{ name: string, plat: number, plon: number, result: number }>;



  constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController, private route: ActivatedRoute, public http: Http, private storage: Storage, private geolocation: Geolocation,public alertController: AlertController, private camera: Camera,public loadingController: LoadingController) {

    this.activities_id = this.route.snapshot.paramMap.get('activities_id');
    this.activities_topic = this.route.snapshot.paramMap.get('activities_topic');
    this.activities_unit = this.route.snapshot.paramMap.get('activities_unit');
    this.activities_term = this.route.snapshot.paramMap.get('term_id');
    this.activities_year = this.route.snapshot.paramMap.get('activities_year');
    this.activities_date = this.route.snapshot.paramMap.get('activities_date');
    this.time_out	 = this.route.snapshot.paramMap.get('time_out');
    this.atttype_id = this.route.snapshot.paramMap.get('atttype_id');
    this.lat = this.route.snapshot.paramMap.get('lat');
    this.lng = this.route.snapshot.paramMap.get('lng');
    this.act_status = this.route.snapshot.paramMap.get('act_status');

    this.imageList =[];


    if(this.atttype_id == 1){
      this.textone = "HD";
    }else if(this.atttype_id == 2){
      this.textone = "AD";
    }else if(this.atttype_id == 3){
      this.textone = "MD";
    }else if(this.atttype_id == 4){
      this.textone = "CD";
    }else if(this.atttype_id == 5){
      this.textone = "PD";
    }else if(this.atttype_id == 6){
      this.textone = "กิจกรรมบังคับ";
    }else {
      this.textone = "กิจกรรมบังคับเลือก";
    }

    if(this.act_status == 1){

      this.buttonShow = true;
      this.buttonShow2 = false;



    }else{
      this.buttonShow = false;
      this.buttonShow2 = true;
    }


    

    
    
    
  }

  

  ngOnInit() {

  

    this.disabled = true;

    
     this.getCurrentGPS();
   


    

    this.positionlist = [
      { name: "ราชมงคลขอนแก่น", plat: this.lat, plon: this.lng, result: 0 }

    ];
  }


  




 
  caldistance2() {
    let lat2: number;
    let lon2: number;
    let total: number;
    for (let i = 0; i < this.positionlist.length; i++) {
      // console.log('i value', this.positionlist[i].name);
      lat2 = this.positionlist[i].plat;
      lon2 = this.positionlist[i].plon;
      total = this.positionlist[i].result;
      this.positionlist[i].result = this.distance(this.lat1, this.lon1, lat2, lon2);//เรียกเมทตอด
      // console.log('value', this.positionlist[i]);

      if (this.positionlist[i].result <= 0.7) {
        console.log('1');
        this.disabled = false;//เปิดปุ่ม

      } else {
        console.log('2');
        this.disabled = true;//ปิดปุ่ม
        this.presentAlert()

      }

      // if (this.positionlist[i].result <= 0.7) {
      //   console.log('1');
      //   this.disabled = true;//เปิดปุ่ม

      // } else {
      //   console.log('2');
      //   this.disabled = false;//ปิดปุ่ม
      //   this.presentAlert()

      // }

      
    }
  }

  getCurrentGPS() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat1 = resp.coords.latitude
      this.lon1 = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }
  distance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344; //  unit K

    return dist
  }
  public disabled = false;

  public action() {
    console.log('action triggered');
  }

  public change() {
    if (this.disabled = !this.disabled) {
      this.disabled = true;
    }
  }

  scan() {

    const options = {
      formats: 'QR_CODE'
    };

    this.barcodeScanner.scan(options).then((barcodeData) => {
      // Success! Barcode data is here
      // เราสามารถใช้ data ทีได้รับประยุกต์ใช้งานต่างๆได้เช่น นําค่า data ส่งไปค้นหาในฐานข้อมูล เป็นต้น
      // this.data = 'http://192.168.1.107/WebProject/'+barcodeData.text+'&student_id='+this.username;
      this.data = barcodeData.text;
      this.setinsert();



    }).catch(err => {
      console.log('Error', err);
    });
   
  }
  

  setinsert() {

    this.storage.get("login").then((val) => {
      this.student_id = val[0].username;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { activities_id: this.data, student_id: this.student_id,activities_unit:this.activities_unit };
      // this.http.post('http://192.168.1.107/WebProject/setInsert.php',body,options)
      this.http.post('http://192.168.43.170/WebProject/setInsert.php', body, options)


        .subscribe(data =>  //ถ้าตอบกลับมาก็เอาไปใส่ไว้ใน data ใน data จะมีการทำงาน
          {
            console.log("apistatus:" + data.json()[0].apistatus);//ตอบ apistatus กลับมาด้วย 0 หรือ 1
            if (data.json()[0].apistatus == "1") {

    
                    this.navCtrl.navigateForward(['/imgone',
                  {student_id:this.student_id,
                  activities_id:this.activities_id}]);

    
            } 
            else{

            }
    
          }, error => {
            console.log("error");//ถ้า error ตอบ 0
          })

       

        


    });


    

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: '',
      message: 'ไม่ได้อยู่ในพิ้นที่กิจกรรม',
      buttons: ['ตกลง']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: '',
      message: 'บันทึกสำเร็จ',
      buttons: ['ตกลง']
    });

    await alert.present();
  }

  goToshowjoin(activities_id){
    this.navCtrl.navigateForward(['/tabs/showjoin',{activities_id:activities_id}]);

  }

  


  // ngOnDestroy() {
  //   // หากออกจากเพจนีให้ลบ key ทีชือว่า phone ด้วย การลบใช้ remove()
  //   this.storage.remove('username1');
  //   }



  

  

  






}
