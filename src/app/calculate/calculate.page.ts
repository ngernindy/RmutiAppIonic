import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // import Storage เข้ามาใช้งาน
import { Http, ResponseOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {
  student_id: any;

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
  COUNTTotal:any;
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

  constructor(public storage: Storage, public http: Http,private route: ActivatedRoute) {


    this.class_id = this.route.snapshot.paramMap.get('class_id');


    if(this.class_id = 1){

      this.texttopic = 'ต้องเข้าร่วมไม่น้อยกว่า:100 หน่วย';

      
    this.storage.get('COUNTTotal').then((val) => {
      this.COUNTTotal = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views

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
  
  
                        if(this.Total >= 100){
                          if(this.COUNTCD<2){
                              this.textCD = 'ยังไม่ผ่านกิจกรรมด้าน CD';
                          }else{}
                          if(this.COUNTAD<2){
                              // echo '<br>';
                              this.textAD = 'ยังไม่ผ่านกิจกรรมด้าน AD';
                          }else{}
                          if(this.COUNTPD<2){
                              // echo '<br>';
                              this.textPD ='ยังไม่ผ่านกิจกรรมด้าน PD';
                          }else{}
                          if(this.COUNTHD<2){
                              // echo '<br>';
                              this.textHD ='ยังไม่ผ่านกิจกรรมด้าน HD';
                          }else{}
                          if(this.COUNTMD<2){
                              // echo '<br>';
                              this.textMD ='ยังไม่ผ่านกิจกรรมด้าน MD';
                          }else{}
                          if(this.COUNTBC<6){
                              // echo '<br>';
                              this.textBC ='ยังไม่ผ่านกิจกรรมบังคับ';
                          }else{}
                          if(this.COUNTBS<5){
                            // echo '<br>';
                            this.textBS = 'ยังไม่ผ่านกิจกรรมบังคับ';
                        }else{}
                          if((this.COUNTBS>=5)&&(this.COUNTBC>=6)&&(this.COUNTMD>=2)&&(this.COUNTHD>=2)&&(this.COUNTPD>=2)&&(this.COUNTAD>=2)&&(this.COUNTCD>=2)){
                            this.texttotal = 'ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา ติดต่อฝ่ายพัฒนานักศึกษา เพื่อขอใบแสดงผลการเข้าร่วมกิจกรรม';
                          }else{}
                      }else{
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

    this.storage.get('COUNTTotal').then((val) => {
      this.COUNTTotal = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views

      this.storage.get('Total').then((val) => {
        this.COUNTTotal = val; // ได้ค่าอะไรให้เก็บค่าไว้ให้ตัวแปร phone เพือนําไปแสดงผลที views
  
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
  
  
                        if(this.Total >= 30){
                          if(this.COUNTCD<1){
                            this.textCD ='ยังไม่ผ่านกิจกรรมด้าน CD';
                          }else{}
                          if(this.COUNTAD<1){
                              // echo '<br>';
                              this.textAD ='ยังไม่ผ่านกิจกรรมด้าน AD';
                          }else{}
                          if(this.COUNTPD<1){
                              // echo '<br>';
                              this.textPD ='ยังไม่ผ่านกิจกรรมด้าน PD';
                          }else{}
                          if(this.COUNTHD<1){
                              // echo '<br>';
                              this.textHD ='ยังไม่ผ่านกิจกรรมด้าน HD';
                          }else{}
                          if(this.COUNTMD<1){
                              // echo '<br>';
                              this.textMD ='ยังไม่ผ่านกิจกรรมด้าน MD';
                          }else{}
                          if(this.COUNTBC<4){
                              // echo '<br>';
                              this.textBC ='ยังไม่ผ่านกิจกรรมบังคับ';
                          }else{}
                          if((this.COUNTBC>=4)&&(this.COUNTMD>=1)&&(this.COUNTHD>=1)&&(this.COUNTPD>=1)&&(this.COUNTAD>=1)&&(this.COUNTCD>=1)){
                            this.texttotal = 'ผ่านกิจกรรมตลอดหลักสูตรที่ศึกษา ติดต่อฝ่ายพัฒนานักศึกษา เพื่อขอใบแสดงผลการเข้าร่วมกิจกรรม';
                          }else{}
                      }else{
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
      





   
    

    
 
  }
  ngOnInit() {










  }
  










}
