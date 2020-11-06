import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavParams } from '@ionic/angular';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  student: any;
  testid: any;
  student_id: any;
  myphoto: any;
  id: any;
  student1: any;
  timetime:any
  class:any






  constructor(public http: Http, private navCtrl: NavController, private storage: Storage, private transfer: FileTransfer, private file: File, public alertController: AlertController, private camera: Camera, public actionSheetController: ActionSheetController, public loadingController: LoadingController) {
    this.storage.get('class_id').then((val) => {
      this.class = val;
      console.log('class'+this.class);
      
    });
   }

  ngOnInit() {

    // this.showData();
    


  }

  ionViewWillEnter() {

    // this.presentLoading();
    this.showData();



  }

  gogo() {
    this.navCtrl.navigateForward(['/tabs/update']);
  }


  uploadimages() {
    ///

  }

  selectimages(student_id) {
    this.navCtrl.navigateForward(['/tabs/show', { student_id: student_id }]);

  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'แก้ไขภาพ',
      buttons: [{
        text: 'ถ่ายภาพโปรไฟล์ใหม่',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          // console.log('Delete clicked');
          this.openCamera();
        }
      }, {
        text: 'เลือกรูปโปรไฟล์',
        icon: 'images',
        handler: () => {
          // console.log('Share clicked');
          this.gallery()
        }
      },
      {
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  openCamera() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG, // ลือกนามสกุลรูปเป็ น jpeg
      targetWidth: 800,
      targetHeight: 600,
      quality:100,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.uploadImage();
    }, (err) => {
    });
  }

  gallery() {

    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.JPEG, // ลือกนามสกุลรูปเป็ น jpeg
      targetWidth: 400,
      targetHeight: 400,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.uploadImage();
    }, (err) => {
    });


  }

  async uploadImage() {




    //show loading
    const loader = await this.loadingController.create({
      message: 'Please Wait...'
    });
    await loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    // var random = Math.floor(Math.random() * 100);
    this.storage.get("login").then((val) => {
      this.student_id = val[0].username;

      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: this.student_id,
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: "image/jpeg",
        headers: {

        }
      }

      // fileTransfer.upload(this.myphoto, 'http://192.168.1.107/WebProject/API_UpdateImg.php', options)
      fileTransfer.upload(this.myphoto, 'http://192.168.43.170/WebProject/API_UpdateImg.php', options)
        .then((data) => {



          alert("Success");
          loader.dismiss();

          this.ionViewWillEnter();


        }, (err) => {
          console.log(err);
          alert("Error");
          loader.dismiss();
        })
        ;

    });

   

  }

  showData() {

    this.storage.get("login").then((val) => {
      this.student_id = val[0].username;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { student_id: this.student_id };
      // this.http.post('http://192.168.1.107/WebProject/API_student.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_student.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า pus
           
            
           

          
                this.student = data.json()[1].dbresult;
                
              

            

            



          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })






    });

  }
  

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'กำลังโหลด...',
  //     duration: 500
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   this.showData();
  // }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      // this.presentLoading();
      event.target.complete();
    }, 2000);
  }


















}
