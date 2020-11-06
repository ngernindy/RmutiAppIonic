import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  student_id:any;
  student:any;

  MD: any;
  CD: any;
  HD: any;
  AD: any;
  PD: any;
  BS: any;
  BC: any;
  COUNTCD: any;
  COUNTMD: any;
  COUNTAD: any;
  COUNTPD: any;
  COUNTHD: any;
  COUNTBS: any;
  COUNTBC: any;
  SUMBS: any;
  SUMBC: any;
  SUMAD: any;
  SUMMD: any;
  SUMHD: any;
  SUMPD: any;
  SUMCD: any;
  COUNTTotal: any;
  SUMTotal: any;
  testid: any;
  class_id: any;
  test:any;
  typeAct:any;
  acttype:any;

  Total:any;

  


  constructor(public http: Http, private navCtrl: NavController, private storage: Storage) { 
  
  
  }

  ngOnInit() {
    

    this.storage.get("login").then((val) => {
      console.log("val" + val[0].username)
      this.student_id = val[0].username;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { student_id: this.student_id };
      // this.http.post('http://192.168.43.170/WebProject/API_student.php', body, options)
      this.http.post('http://192.168.1.107/WebProject/API_student.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.student = data.json()[1].dbresult;
         
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


        this.http.post('http://192.168.1.107/WebProject/API_typeAct.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.typeAct = data.json()[1].dbresult;
            console.log(this.typeAct[5]);
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


        this.http.post('http://localhost/WebProject/API_acttype.php', body, options)


        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.acttype = data.json()[1].dbresult;


            
         
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })
        


        this.http.post('http://192.168.1.107/WebProject/API_SUM_CD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_CD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              // this.SUMCD = data.json()[1].dbresult;
              this.SUMCD = data.json()[1].dbresult[0].TotalCD;
              

               
                this.storage.set('CD',this.SUMCD );
    
              
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_HD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_HD.php', body, options)

          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMHD = data.json()[1].dbresult[0].TotalHD;
              this.storage.set('HD',this.SUMHD );


            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_AD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_AD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMAD = data.json()[1].dbresult[0].TotalAD;
              this.storage.set('AD',this.SUMAD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_MD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_MD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMMD = data.json()[1].dbresult[0].TotalMD;
              this.storage.set('MD',this.SUMMD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_PD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_PD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMPD = data.json()[1].dbresult[0].TotalPD;
              this.storage.set('PD',this.SUMPD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_BS.php', body, options)
        this.http.post('http://192.168.1.107/WebProject/API_SUM_BS.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMBS = data.json()[1].dbresult[0].TotalBS;
              this.storage.set('BS',this.SUMBS );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_Total.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_Total.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMTotal = data.json()[1].dbresult[0].SumTotal;
              this.storage.set('Total',this.SUMTotal );
              


            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_SUM_BC.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_SUM_BC.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMBC = data.json()[1].dbresult[0].TotalBC;
              this.storage.set('BC',this.SUMBC );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_CD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_CD.php', body, options)

          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTCD = data.json()[1].dbresult[0].countCD;
              this.storage.set('COUNTCD',this.COUNTCD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_HD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_HD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTHD = data.json()[1].dbresult[0].countHD;
              this.storage.set('COUNTHD',this.COUNTHD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_AD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_AD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTAD = data.json()[1].dbresult[0].countAD;
              this.storage.set('COUNTAD',this.COUNTAD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_MD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_MD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTMD = data.json()[1].dbresult[0].countMD;
              this.storage.set('COUNTMD',this.COUNTMD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_PD.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_PD.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTPD = data.json()[1].dbresult[0].countPD;
              this.storage.set('COUNTPD',this.COUNTPD );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_BS.php', body, options)
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_BS.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTBS = data.json()[1].dbresult[0].countBS;
              this.storage.set('COUNTBS',this.COUNTBS );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_BC.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_BC.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTBC = data.json()[1].dbresult[0].countBC;
              this.storage.set('COUNTBC',this.COUNTBC );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
        this.http.post('http://192.168.1.107/WebProject/API_COUNT_Total.php', body, options)
        // this.http.post('http://192.168.43.170/WebProject/API_COUNT_Total.php', body, options)
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTTotal = data.json()[1].dbresult[0].countTotal;
              this.storage.set('COUNTTotal',this.COUNTTotal );
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })


    });



  }

  gogo(student_id,class_id) {
    this.navCtrl.navigateForward(['/tabs/seeact', { student_id: student_id, class_id: class_id }]);
  }
  // goCalculate(student_id,class_id,CD) {
  //   this.navCtrl.navigateForward(['/tabs/calculate', { student_id: student_id, class_id: class_id,CD:CD }]);
  // }


  ngOnDestroy() {
    // หากออกจากเพจนีให้ลบ key ทีชือว่า phone ด้วย การลบใช้ remove()
    this.storage.remove('login');
    }

}
