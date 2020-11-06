import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน



@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  image_base64: any;
  loading: any;
  myImg: any;
  student_id: any;
  base64Image:any;
  myphoto:any;
  act:any;



  constructor(private camera: Camera, public http: Http,public loadingController: LoadingController, public alertController: AlertController, private navCtrl: NavController,private route: ActivatedRoute,private transfer: FileTransfer, private file: File,private storage: Storage) {

    // this.student_id = this.route.snapshot.paramMap.get('student_id');
    this.student_id = '58342110223-6';
    console.log('id'+this.student_id);

    this.show();



  }

  ngOnInit() {
    // this.storage.get("login").then((val) => {
    //     console.log("showid" + val[0].student_id)
    //     this.student_id = val[0].student_id;

    //   });
  
   
  }

  show(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = { student_id: this.student_id };
    this.http.post('http://192.168.43.170/WebProject/1.php', body, options)
    // this.http.post('http://192.168.1.107/WebProject/1.php', body, options)


      .subscribe(data =>  //ถ้าตอบกลับมาก็เอาไปใส่ไว้ใน data ใน data จะมีการทำงาน
        {
          console.log("apistatus:" + data.json()[0].apistatus);//ตอบ apistatus กลับมาด้วย 0 หรือ 1
          if (data.json()[0].apistatus == "1") {

  
            this.act = data.json()[1].dbresult;

  
          } 
          else{

          }
  
        }, error => {
          console.log("error");//ถ้า error ตอบ 0
        })
  }


  

  }

  

 

