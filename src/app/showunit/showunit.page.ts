import { Component, OnInit } from '@angular/core';
import { CDService } from '../cd.service';
import { LoadingController } from '@ionic/angular';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';




import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน




@Component({
  selector: 'app-showunit',
  templateUrl: './showunit.page.html',
  styleUrls: ['./showunit.page.scss'],
})
export class ShowunitPage implements OnInit {
  student_id: any;
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

  BCtext: any;
  BStext: any;
  PDtext: any;
  HDtext: any;
  MDtext: any;
  CDtext: any;
  ADtext: any;


  type_id:any;




  // username: any;


  constructor(private CDService: CDService, private loadingController: LoadingController, private storage: Storage, public http: Http, private navCtrl: NavController, private route: ActivatedRoute) {
    this.class_id = this.route.snapshot.paramMap.get('class_id');
    this.type_id = this.route.snapshot.paramMap.get('type_id');
    console.log(this.type_id)


  }


  ngOnInit() {



    this.storage.get("login").then((val) => {
      console.log("val" + val[0].username)
      this.student_id = val[0].username;




      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers: headers });
      let body = { student_id: this.student_id };


      // this.http.post('http://192.168.1.107/WebProject/API_CD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_CD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.CD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_MD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_MD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.MD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      


      // this.http.post('http://192.168.1.107/WebProject/API_AD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_AD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.AD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_PD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_PD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.PD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_BC.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_BC.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.BC = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_BS.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_BS.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.BS = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_SUM_CD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_CD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMCD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      


      this.http.post('http://192.168.43.170/WebProject/API_SUM_AD.php', body, options)
      // this.http.post('http://192.168.1.107/WebProject/API_SUM_AD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMAD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_SUM_MD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_MD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMMD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_SUM_PD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_PD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMPD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_SUM_BS.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_BS.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMBS = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_SUM_Total.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_Total.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMTotal = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_SUM_BC.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_SUM_BC.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.SUMBC = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_CD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_CD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTCD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      

      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_AD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_AD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTAD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_MD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_MD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTMD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_PD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_PD.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTPD = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_BS.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_BS.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTBS = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })



      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_BC.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_BC.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTBC = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      // this.http.post('http://192.168.1.107/WebProject/API_COUNT_Total.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_COUNT_Total.php', body, options)

        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.COUNTTotal = data.json()[1].dbresult;
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


     
        // this.http.post('http://192.168.1.107/WebProject/API_HD.php', body, options)
        this.http.post('http://192.168.43.170/WebProject/API_HD.php', body, options)
  
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.HD = data.json()[1].dbresult;
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
            // this.http.post('http://192.168.1.107/WebProject/API_SUM_HD.php', body, options)
        this.http.post('http://192.168.43.170/WebProject/API_SUM_HD.php', body, options)
  
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.SUMHD = data.json()[1].dbresult;
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_HD.php', body, options)
        this.http.post('http://192.168.43.170/WebProject/API_COUNT_HD.php', body, options)
  
          .subscribe(data => {
            // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
            if (data.json()[0].apistatus == "1") {
              //ไปหน้า push
              this.COUNTHD = data.json()[1].dbresult;
            } else {
              // ไม่มีข้อมูล
            }
          }, error => {
            console.log("error");
          })
  
  










    });


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = { class_id: this.class_id };


    // this.http.post('http://192.168.1.107/WebProject/API_text.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_text.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.BCtext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })


    // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTBS.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTBS.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.BStext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })


    // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTPD.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTPD.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.PDtext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })


    

    // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTMD.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTMD.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.MDtext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })


    // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTCD.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTCD.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.CDtext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })



    // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTAD.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTAD.php', body, options)

      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.ADtext = data.json()[1].dbresult;


        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })


      
      // this.http.post('http://192.168.1.107/WebProject/API_TEXT/API_TEXTHD.php', body, options)
      this.http.post('http://192.168.43.170/WebProject/API_TEXT/API_TEXTHD.php', body, options)
  
        .subscribe(data => {
          // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
          if (data.json()[0].apistatus == "1") {
            //ไปหน้า push
            this.HDtext = data.json()[1].dbresult;
  
  
          } else {
            // ไม่มีข้อมูล
          }
        }, error => {
          console.log("error");
        })


      









    this.testid = '58342110223-6';

    //   let headers = new Headers({'Content-Type':'application/json'});
    //   let options = new ResponseOptions({headers:headers});
    //   let body = {student_id:this.testid};   
    //   // this.http.post('http://localhost/WebProject/setInsert.php',body,options)
    //   this.http.post('http://192.168.1.107/WebProject/API_CD.php',body,options)

    //   .subscribe(data=>{
    //     //console.log("apistatus:"+data.json()[0].apistatus);
    //     if(data.json()[0].apistatus=="1"){
    //       //ข้อแจ้งเตือน หรือ จะไปด้วย push setroot
    //     }else{
    //       //ข้อแจ้งเตือน  insert ไม่ได้
    //     }
    //   },error=>{
    //     console.log("error");
    //   })

    //   var temp = this;
    //   setTimeout(function(){
    //   temp.getCD();
    // }, 500);


    this.getstudent();









  }

 




  getstudent() {









  }
  goback(){
    this.navCtrl.navigateForward(['/tabs/seeact', {  
      class_id:this.class_id
    }]);

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  ngOnDestroy() {
    // หากออกจากเพจนีให้ลบ key ทีชือว่า phone ด้วย การลบใช้ remove()
    this.storage.remove('student_id');
  }



}
