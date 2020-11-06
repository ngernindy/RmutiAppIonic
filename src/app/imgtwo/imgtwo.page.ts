import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน
import { LoadingController, NavParams } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-imgtwo',
  templateUrl: './imgtwo.page.html',
  styleUrls: ['./imgtwo.page.scss'],
})
export class ImgtwoPage implements OnInit {
  student: any;
  testid: any;
  student_id: any;
  myphoto: any;
  id: any;
  student1: any;
  join:any;
  join_id:any; 


  activities_id:any;



  constructor(private camera: Camera,private navCtrl: NavController,private route: ActivatedRoute,public http: Http ,private transfer: FileTransfer, private file: File,private storage: Storage,public loadingController: LoadingController,public actionSheetController: ActionSheetController) {
    this.student_id = this.route.snapshot.paramMap.get('student_id');
    this.activities_id = this.route.snapshot.paramMap.get('activities_id');
    this.join_id = this.route.snapshot.paramMap.get('join_id');
    console.log('join'+this.join_id);


    


    

   }

  ngOnInit() {
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
      console.log('this.join_id'+this.join_id)
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
        fileName: this.join_id,
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: "image/jpeg",
        headers: {

        }
      }

      fileTransfer.upload(this.myphoto, 'http://192.168.43.170/WebProject/API_UploadImg_two.php', options)
      // fileTransfer.upload(this.myphoto, 'http://192.168.1.107/WebProject/API_UploadImg_two.php', options)
        .then((data) => {



          alert("บันทึกสำเร็จ");
          loader.dismiss();

          // this.ionViewWillEnter();
          this.navCtrl.navigateForward(['/tabs/act']);


        }, (err) => {
          console.log(err);
          alert("Error");
          loader.dismiss();
        })
        ;

    });

  }
  async presentActionSheet(join_id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'แก้ไขภาพ',
      buttons: [{
        text: 'ถ่ายภาพ',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          // console.log('Delete clicked');
          this.openCamera();
        }
      }, {
        text: 'เลือกรูป',
        icon: 'images',
        handler: () => {
          // console.log('Share clicked');
          this.gallery();
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


}


