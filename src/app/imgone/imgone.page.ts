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
  selector: 'app-imgone',
  templateUrl: './imgone.page.html',
  styleUrls: ['./imgone.page.scss'],
})
export class ImgonePage implements OnInit {

  

  student_id: any;
  myphoto: any;
  id: any;
  join:any;
  join_id:any; 
  join_id2:any;
  activities_id:any;



  constructor(private camera: Camera,private navCtrl: NavController,private route: ActivatedRoute,public http: Http ,private transfer: FileTransfer, private file: File,private storage: Storage,public loadingController: LoadingController,public actionSheetController: ActionSheetController) {
    this.student_id = this.route.snapshot.paramMap.get('student_id');
    this.activities_id = this.route.snapshot.paramMap.get('activities_id');

    let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { activities_id: this.activities_id, student_id: this.student_id };
      this.http.post('http://192.168.43.170/WebProject/API_Imgone.php',body,options)
      // this.http.post('http://192.168.1.107/WebProject/API_Imgone.php', body, options)
       


        .subscribe(data =>  //ถ้าตอบกลับมาก็เอาไปใส่ไว้ใน data ใน data จะมีการทำงาน
          {
            console.log("apistatus:" + data.json()[0].apistatus);//ตอบ apistatus กลับมาด้วย 0 หรือ 1
            if (data.json()[0].apistatus == "1") {
              this.join = data.json()[1].dbresult;
            } 
            else{
            }
    
          }, error => {
            console.log("error");//ถ้า error ตอบ 0
          })


    

   }

  ngOnInit() {
  }

  

  openCamera(join_id) {
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
      this.join_id = join_id;
      console.log('this.join_id'+this.join_id)
      this.uploadImage();
    }, (err) => {
    });
  }

  gallery(join_id) {

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
      this.join_id = join_id;
      this.uploadImage();
    }, (err) => {
    });


  }

  async uploadImage() {




    //show loading
    const loader = await this.loadingController.create({
      message: 'โปรดรอ...'
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

      fileTransfer.upload(this.myphoto, 'http://192.168.43.170/WebProject/API_UploadImg_one.php', options)
      // fileTransfer.upload(this.myphoto, 'http://192.168.1.107/WebProject/API_UploadImg_one.php', options)

        .then((data) => {



          alert("บันทึกสำเร็จ");
          loader.dismiss();
          this.goto();

          // this.ionViewWillEnter();


        }, (err) => {
          console.log(err);
          alert("Error");
          loader.dismiss();
        })
        ;

    });

  }

  goto(){
    this.navCtrl.navigateForward(['/imgtwo',
                  {student_id:this.student_id,
                  activities_id:this.activities_id,
                  join_id:this.join_id
                
                }]);
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
          this.join_id = join_id;
          this.openCamera(this.join_id);
        }
      }, {
        text: 'เลือกรูป',
        icon: 'images',
        handler: () => {
          // console.log('Share clicked');
          this.join_id = join_id;
          this.gallery(this.join_id);
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
