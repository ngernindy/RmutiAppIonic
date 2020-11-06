import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';//เรียกใช้ http เพื่อเชื่อมฐานข้อมูล
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datalist: any;
  username: any;
  password: any;

  student_id:any;
  student:any;
  class_id:any;
  class:any;

  login: Array<{ username: string, password: string}>;

  constructor(private navCtrl: NavController, public http: Http, private router: Router, private storage: Storage, public alertController: AlertController) {
    this.login = [];
  }

  ngOnInit() {

  }

  getLogin() {

    let headers = new Headers({ 'Content-Type': 'application/json' });//สร้างตัวแปร  headers เป็นการบอกว่าเราจะส่งแบบ json
    let options = new ResponseOptions({ headers: headers });//บอกว่าตัว options เราส่ง headers ไป
    let body = { student_id: this.username, student_password: this.password };//student_username คือมาจาก API
      this.http.post('http://192.168.43.170/WebProject/getLogin.php',body,options)//เรียกที่อยู่ API
      // this.http.post('http://192.168.1.107/WebProject/getLogin.php',body,options)//เรียกที่อยู่ API

      .subscribe(data =>  //ถ้าตอบกลับมาก็เอาไปใส่ไว้ใน data ใน data จะมีการทำงาน
      {
        console.log("apistatus:" + data.json()[0].apistatus);//ตอบ apistatus กลับมาด้วย 0 หรือ 1
        if (data.json()[0].apistatus == "1") {

          // this.storage.ready().then(() => { // ถ้า platform พร้อมใช้งาน
          //   // set a key/value
          //   // กําหนด และ set ค่า key เป็ น phone และค่า value เป็ น 085 4952624
          //   // เราสามารถเรียกใช้ค่านีได้จากทุกๆเพจ โดยอ้างชือ key นันก็คือ phone
          //   this.storage.set('student_id','58342110223-6');

          //   });


          this.login.push({ username: this.username, password: this.password});
          this.storage.set("login", this.login);








          // this.navCtrl.push(TabsPage);
          // this.navCtrl.navigateForward(['/tabs/tabs1',{username:this.username}]);
          // this.navCtrl.navigateForward(['/tabs/tab2']);
          // this.navCtrl.navigateForward(['/tabs/tab3']);

          this.Goto();


        } 

        else{
          this.presentAlert();
        }

      }, error => {
        console.log("error");//ถ้า error ตอบ 0
      })

      



  }

  Goto(){

    
      this.storage.get("login").then((val) => {
      this.student_id = val[0].username;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { student_id: this.student_id };
      // this.http.post('http://192.168.1.107/WebProject/API_class.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_student.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า pus
           
            
           

          
                this.class = data.json()[1].dbresult[0].class_id;
                this.storage.set('class_id', this.class);
                console.log('class'+this.class);

            

            



          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })






    });


    this.navCtrl.navigateForward(['/tabs/tab2']);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: '',
      message: 'ไอดี หรือ รหัสผ่านไม่ถูกต้อง',
      buttons: ['ตกลง']
    });

    await alert.present();
  }


  ngOnDestroy() {
    this.storage.remove('login');
    }
}
