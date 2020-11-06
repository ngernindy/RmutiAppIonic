import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน






@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  student_id: any;
  student: any;
  testid: any;
  student_telephone: any;
  student_email: any;
  student_address: any;
  student_password: any;


  constructor(public http: Http, private navCtrl: NavController, private route: ActivatedRoute, public alertController: AlertController, private storage: Storage) {

    // this.student_id = this.route.snapshot.paramMap.get('student_id');
    // this.student_telephone = this.route.snapshot.paramMap.get('student_telephone');
    // this.student_email = this.route.snapshot.paramMap.get('student_email');
    // this.student_address = this.route.snapshot.paramMap.get('student_address');
    // this.student_password = this.route.snapshot.paramMap.get('student_password');



  }

  ngOnInit() {

    this.getStudent();


  }

  ionViewWillEnter() {

    this.getStudent();




  }


  // getStudent(){
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new ResponseOptions({ headers: headers });
  //   let body = { student_id: this.testid };
  //   // this.http.post('http://localhost/WebProject/API_student.php', body, options)
  //     this.http.post('http://192.168.1.107/WebProject/API_student.php', body, options)

  //     .subscribe(data => {
  //       // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
  //       if (data.json()[0].apistatus == "1") {
  //         //ไปหน้า push
  //         this.student = data.json()[1].dbresult;

  //       } else {
  //         // ไม่มีข้อมูล
  //       }
  //     }, error => {
  //       console.log("error");
  //     })
  // }

  getStudent() {

    this.storage.get("login").then((val) => {
      this.student_id = val[0].username;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { student_id: this.student_id };
      this.http.post('http://192.168.43.170/WebProject/API_student.php', body, options)
      // this.http.post('http://192.168.1.107/WebProject/API_student.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.student = data.json()[1].dbresult;
            this.student_telephone = data.json()[1].dbresult[0].student_telephone;
            this.student_email = data.json()[1].dbresult[0].student_email;
            this.student_address = data.json()[1].dbresult[0].student_address;
            this.student_password = data.json()[1].dbresult[0].student_password;

            console.log("test"+this.student_address);





          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })

    });

  }

  update() {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = { student_id: this.student_id, student_telephone: this.student_telephone, student_email: this.student_email, student_address: this.student_address, student_password: this.student_password };
    // this.http.post('http://192.168.1.107/WebProject/API_update_student.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_update_student.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          // this.student = data.json()[1].dbresult;
          this.presentAlert();


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: '',
      message: 'บันทึกข้อมูลสำเร็จ',
      buttons: ['ตกลง']
    });

    await alert.present();
    this.navCtrl.navigateForward(['/tabs/profile']);
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

}
