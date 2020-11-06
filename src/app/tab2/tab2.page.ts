import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { ActionSheetController } from '@ionic/angular';





@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  class_id:any;
  news:any;
  newstype:string;
  news_Act:any;
  news_PR:any;


  constructor(private loadingController: LoadingController,private navCtrl: NavController,private route: ActivatedRoute,public http: Http) { 
        
    this.newstype = "total";

  }
  ngOnInit() {
    // var temp = this;
    // setTimeout(function(){
    //   temp.getNews();
    // }, 500);

    this.showNews();
    this.showNewsAct();
    this.showNewsPR();


    
  }

  // async getNews() {
  //   const loading = await this.loadingController.create({
  //     spinner: 'bubbles',
  //     message: 'กําลังโหลดข้อมูล...'
  //   });
  //   await loading.present();
  //   this.newsService.getNews().subscribe(
  //     (news) => {
  //       // console.log(news);
  //       this.news = news; // ดึงค่าจํานวนข่าวทั งหมด


  //     },
  //     async (error) => {
  //       console.log(error);
  //       await loading.dismiss(); // ให้ Loading หายไปกรณีเกิด error
  //     },
  //     async () => {
  //       await loading.dismiss(); // ให้ Loading หายไปกรณีเกิดการทํางานเสร็จสมบูรณ์
  //     }
  //   );
  // }


  showNews(){
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = {  };
    // this.http.post('http://192.168.1.107/WebProject/API_news/news_total.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_news/news_total.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.news = data.json()[1].dbresult;



        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }

  showNewsAct(){
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = {  };
    // this.http.post('http://192.168.1.107/WebProject/API_news/news_activities.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_news/news_activities.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.news_Act = data.json()[1].dbresult;



        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }

  showNewsPR(){
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = {  };
    // this.http.post('http://192.168.1.107/WebProject/API_news/news_PR.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_news/news_PR.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.news_PR = data.json()[1].dbresult;



        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }


  


  goToNewsdetail(news_id,news_filename,news_topic,news_detail,news_date) {
    // this.navCtrl.navigateForward('/contact');
    this.navCtrl.navigateForward(['/tabs/newsdetail', { 
      news_id:news_id,
      news_filename:news_filename,
      news_topic:news_topic,
      news_detail:news_detail,
      news_date:news_date
      


    
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

    
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }
    
}

