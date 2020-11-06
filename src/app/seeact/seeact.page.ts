import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-seeact',
  templateUrl: './seeact.page.html',
  styleUrls: ['./seeact.page.scss'],
})
export class SeeactPage implements OnInit {


  student_id:any;
  acttype:any;


  CD: any;
  MD: any;
  HD:any;
  PD:any;
  AD:any;
  BS:any;
  BC:any;
  COUNTCD: any;
  COUNTMD: any;
  COUNTAD: any;
  COUNTPD: any;
  COUNTHD: any;
  COUNTBS: any;
  COUNTBC: any;
  countTotal:any;
  CTotal:any;
  Total:any;
  class_id:any;

  ctotal: any;
  texttotal:any;
  textCD:any;
  textAD:any;
  textPD:any;
  textMD:any;
  textHD:any;
  textBS:any;
  textBC:any;
  texttopic:any;

  calBC:any;
  calBS:any;
  calHD:any;
  calAD:any;
  calMD:any;
  calCD:any;
  calPD:any;

  calTBC:any;
  calTBS:any;
  calTHD:any;
  calTAD:any;
  calTMD:any;
  calTCD:any;
  calTPD:any;

  statusBC:any;
  statusBS:any;
  statusHD:any;
  statusAD:any;
  statusMD:any;
  statusCD:any;
  statusPD:any;

  NBC:any;
  NBS:any;
  NHD:any;
  NAD:any;
  NMD:any;
  NCD:any;
  NPD:any;

  
  QBC:any;
  QBS:any;
  QHD:any;
  QAD:any;
  QMD:any;
  QCD:any;
  QPD:any;

  totalstatus:any

  class:any;
  act:any;
  type_id:any;


  SUMBS: any;
  SUMBC: any;
  SUMAD: any;
  SUMMD: any;
  SUMHD: any;
  SUMPD: any;
  SUMCD: any;
  SUMTotal: any;

  constructor(public http: Http,private navCtrl: NavController, private storage: Storage ,private route: ActivatedRoute,public loadingController: LoadingController) { 
    // this.class_id = this.route.snapshot.paramMap.get('class_id');
    // console.log("val" + this.class_id)

    this.NHD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 2 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 58 หน่วย';
    this.NAD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 2 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 58 หน่วย';
    this.NMD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 2 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 58 หน่วย';
    this.NCD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 2 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 58 หน่วย';
    this.NPD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 2 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 58 หน่วย';
    this.NBC = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 6 กิจกรรม และมีหน่วยไม่น้อยกว่า 22 หน่วย';
    this.NBS = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 5 กิจกรรม และมีหน่วยไม่น้อยกว่า 20 หน่วย';

    this.QHD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 1 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 14 หน่วย';
    this.QAD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 1 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 14 หน่วย';
    this.QMD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 1 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 14 หน่วย';
    this.QCD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 1 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 14 หน่วย';
    this.QPD = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 1 กิจกรรม และมีหน่วยรวม 5 ด้านไม่น้อยกว่า 14 หน่วย';
    this.QBC = 'ข้อบังคับ : ต้องเข้าร่วมกิจกรรมไม่น้อยกว่า 4 กิจกรรม และมีหน่วยไม่น้อยกว่า 16 หน่วย';
    this.QBS = 'ข้อบังคับ : ไม่บังคับเข้าร่วม';

    

  }

  ngOnInit() {
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'โปรดรอ...',
      duration: 2500
    });
    await loading.present();
    this.showunit();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  showunit(){

    this.storage.get("login").then((val) => {
      console.log("val" + val[0].username)
      this.student_id = val[0].username;


        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new ResponseOptions({ headers: headers });
        let body = { student_id: this.student_id };
      
        this.http.post('http://192.168.43.170/WebProject/API_acttype.php', body, options)

        // this.http.post('http://192.168.1.107/WebProject/API_acttype.php', body, options)

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


      });


      this.storage.get("login").then((val) => {
        console.log("val" + val[0].username)
        this.student_id = val[0].username;
  
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new ResponseOptions({ headers: headers });
        let body = { student_id: this.student_id };
        // this.http.post('http://192.168.43.170/WebProject/API_student.php', body, options)

  
          this.http.post('http://192.168.43.170/WebProject/API_acttype.php', body, options)
  
  
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
          
  
  
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_CD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_CD.php', body, options)
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_HD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_HD.php', body, options)
  
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_AD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_AD.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_MD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_MD.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_PD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_PD.php', body, options)
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
    
          this.http.post('http://192.168.43.170/WebProject/API_SUM_BS.php', body, options)
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_BS.php', body, options)
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_Total.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_Total.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_SUM_BC.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_SUM_BC.php', body, options)
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_CD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_CD.php', body, options)
  
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_HD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_HD.php', body, options)
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_AD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_AD.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_MD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_MD.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_PD.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_PD.php', body, options)
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
    
    
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_BS.php', body, options)
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_BS.php', body, options)
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
    
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_BC.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_BC.php', body, options)
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
    
    
          // this.http.post('http://192.168.1.107/WebProject/API_COUNT_Total.php', body, options)
          this.http.post('http://192.168.43.170/WebProject/API_COUNT_Total.php', body, options)
            .subscribe(data => {
              // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
              if (data.json()[0].apistatus == "1") {
                //ไปหน้า push
                this.countTotal = data.json()[1].dbresult[0].countTotal;
                this.storage.set('countTotal',this.countTotal );
              } else {
                // ไม่มีข้อมูล
              }
            }, error => {
              console.log("error");
            })
  
  
      });
  






  this.storage.get('class_id').then((val) => {
  this.class_id = val;
  console.log('class'+this.class_id);

    if(this.class_id == 1){
  
        this.texttopic = 'ต้องเข้าร่วมไม่น้อยกว่า:100 หน่วย';
  
        
      this.storage.get('countTotal').then((val) => {
        this.CTotal = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
  
        this.storage.get('Total').then((val) => {
          this.Total = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
  
          
    
            this.storage.get('COUNTBC').then((val) => {
              this.COUNTBC = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
  
              this.storage.get('COUNTBS').then((val) => {
                this.COUNTBS = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                this.storage.get('COUNTAD').then((val) => {
                  this.COUNTAD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                  this.storage.get('COUNTCD').then((val) => {
                    this.COUNTCD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                    this.storage.get('COUNTHD').then((val) => {
                      this.COUNTHD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                      this.storage.get('COUNTMD').then((val) => {
                        this.COUNTMD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                        this.storage.get('COUNTPD').then((val) => {
                          this.COUNTPD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                          

                          if(this.COUNTBC >= 6){
                            this.calTBC = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusBC = '1';
                          }else{
                            this.calBC = 6 - this.COUNTBC ;
                            this.calTBC = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calBC + ' กิจกรรม';
                            this.statusBC = '2';
                          }

                          if(this.COUNTBS >= 5){
                            this.calTBS = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusBS = '1';
                          }else{
                            this.calBS = 5- this.COUNTBS;
                            this.calTBS = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calBS + ' กิจกรรม';
                            this.statusBS = '2';
                          }

                          if(this.COUNTHD >= 2){
                            this.calTHD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusHD = '1';
                          }else{
                            this.calHD = 2 - this.COUNTHD;
                            this.calTHD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calHD + ' กิจกรรม';
                            this.statusHD = '2';
                          }

                          if(this.COUNTAD >= 2){
                            this.calTAD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusAD = '1';
                          }else{
                            this.calAD = 2 - this.COUNTAD;
                            this.calTAD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calAD + ' กิจกรรม';
                            this.statusAD = '2';
                          }


                          if(this.COUNTMD >= 2){
                            this.calTMD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusMD = '1';
                          }else{
                            this.calMD = 2 - this.COUNTMD;
                            this.calTMD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calMD + ' กิจกรรม';
                            this.statusMD = '2';
                          }

                          if(this.COUNTCD >= 2){
                            this.calTCD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusCD = '1';
                          }else{
                            this.calCD = 2 - this.COUNTCD;
                            this.calTCD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calCD + ' กิจกรรม';
                            this.statusCD = '2';
                          }

                          if(this.COUNTPD >= 2){
                            this.calTPD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusPD = '1';
                          }else{
                            this.calPD = 2 - this.COUNTPD;
                            this.calTPD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calPD + ' กิจกรรม';
                            this.statusPD = '2';
                          }


                        if(this.Total >= 100){
                            if((this.COUNTBS>=5)&&(this.COUNTBC>=6)&&(this.COUNTMD>=2)&&(this.COUNTHD>=2)&&(this.COUNTPD>=2)&&(this.COUNTAD>=2)&&(this.COUNTCD>=2)){
                              this.totalstatus = '1';
                              this.texttotal = 'ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา ติดต่อฝ่ายพัฒนานักศึกษา เพื่อขอใบแสดงผลการเข้าร่วมกิจกรรม';
                            }else{
                              this.totalstatus = '2';
                              this.texttotal = 'ยังไม่ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา';}
                        }else{
                            this.totalstatus = '2';
                            this.texttotal = 'ยังไม่ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา';
                        }
    
    
                          
                          
                    
                        });
                  
                        
                  
                      });
                
                      
                
                    });
              
                    
              
                  });
            
                  
            
                });
          
              });
    
              
            });
    
          });
  
      });
  
        
        
  
  
    }else{
  
      this.texttopic = 'ต้องเข้าร่วมไม่น้อยกว่า:30 หน่วย';
  
      this.storage.get('countTotal').then((val) => {
        this.CTotal = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
  
        this.storage.get('Total').then((val) => {
          this.Total = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
            this.storage.get('COUNTBC').then((val) => {
              this.COUNTBC = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
              
              this.storage.get('COUNTBS').then((val) => {
                this.COUNTBS = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                this.storage.get('COUNTAD').then((val) => {
                  this.COUNTAD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                  this.storage.get('COUNTCD').then((val) => {
                    this.COUNTCD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                    this.storage.get('COUNTHD').then((val) => {
                      this.COUNTHD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                      this.storage.get('COUNTMD').then((val) => {
                        this.COUNTMD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    
                        this.storage.get('COUNTPD').then((val) => {
                          this.COUNTPD = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
    

                          if(this.COUNTBC >= 4){
                            this.calTBC = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusBC = '1';
                          }else{
                            this.calBC = 4 - this.COUNTBC ;
                            this.calTBC = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calBC + ' กิจกรรม';
                            this.statusBC = '2';
                          }

                          if(this.COUNTBS >= 0){
                            this.calTBS = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusBS = '1';
                          }else{
                            
                          }

                          if(this.COUNTHD >= 1){
                            this.calTHD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusHD = '1';
                          }else{
                            this.calHD = 1 - this.COUNTHD;
                            this.calTHD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calHD + ' กิจกรรม';
                            this.statusHD = '2';
                          }

                          if(this.COUNTAD >= 1){
                            this.calTAD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusAD = '1';
                          }else{
                            this.calAD = 1 - this.COUNTAD;
                            this.calTAD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calAD + ' กิจกรรม';
                            this.statusAD = '2';
                          }


                          if(this.COUNTMD >= 1){
                            this.calTMD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusMD = '1';
                          }else{
                            this.calMD = 1 - this.COUNTMD;
                            this.calTMD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calMD + ' กิจกรรม';
                            this.statusMD = '2';
                          }

                          if(this.COUNTCD >= 1){
                            this.calTCD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusCD = '1';
                          }else{
                            this.calCD = 1 - this.COUNTCD;
                            this.calTCD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calCD + ' กิจกรรม';
                            this.statusCD = '2';
                          }

                          if(this.COUNTPD >= 1){
                            this.calTPD = 'ผ่านกิจกรรมด้านนี้แล้ว';
                            this.statusPD = '1';
                          }else{
                            this.calPD = 1 - this.COUNTPD;
                            this.calTPD = 'เหลือกิจกรรมที่ยังไม่เข้าร่วม ' + this.calPD + ' กิจกรรม';
                            this.statusPD = '2';
                          }


    
                        if(this.Total >= 30){
                            if((this.COUNTBC>=4)&&(this.COUNTMD>=1)&&(this.COUNTHD>=1)&&(this.COUNTPD>=1)&&(this.COUNTAD>=1)&&(this.COUNTCD>=1)){
                              this.totalstatus = '1';
                              this.texttotal = 'ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา ติดต่อฝ่ายพัฒนานักศึกษา เพื่อขอใบแสดงผลการเข้าร่วมกิจกรรม';
                            }else{}
                        }else{
                            this.totalstatus = '2';
                            this.texttotal = 'ยังไม่ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา';
                        }
    
    
                          
                          
                    
                        });
                  
                        
                  
                      });
                
                      
                
                    });
              
                    
              
                  });
            
                  
            
                });
          
              });
    
              
            });
    
          });
          
        });
        
      }
  
      this.storage.get('HD').then((val) => {
        this.HD = val;});
  
        this.storage.get('AD').then((val) => {
          this.AD = val;});
  
          this.storage.get('MD').then((val) => {
            this.MD = val;});
            
            this.storage.get('PD').then((val) => {
              this.PD = val;});
  
              this.storage.get('CD').then((val) => {
                this.CD = val;});
  
                this.storage.get('BS').then((val) => {
                  this.BS = val;});
  
                  this.storage.get('BC').then((val) => {
                    this.BC = val;});


  });

  }

  gotoActHD(){

    this.type_id = '1';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActAD(){

    this.type_id = '2';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActMD(){

    this.type_id = '3';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActCD(){

    this.type_id = '4';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActPD(){

    this.type_id = '5';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActBC(){

    this.type_id = '6';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }

  gotoActBS(){

    this.type_id = '7';
    this.navCtrl.navigateForward(['/tabs/showunit', {  
      type_id:this.type_id,class_id:this.class_id
    }]);

  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.presentLoading();
    }, 2000);
  }
  

  ngOnDestroy() {
    this.storage.remove('login');
    this.storage.remove('CD');
    this.storage.remove('MD');
    this.storage.remove('HD');
    this.storage.remove('PD');
    this.storage.remove('AD');
    this.storage.remove('BS');
    this.storage.remove('BC');
    this.storage.remove('COUNTCD');
    this.storage.remove('COUNTMD');
    this.storage.remove('COUNTAD');
    this.storage.remove('COUNTPD');
    this.storage.remove('COUNTHD');
    this.storage.remove('COUNTBS');
    this.storage.remove('COUNTBC');
    this.storage.remove('countTotal');
    this.storage.remove('Total');


   
    }



}
