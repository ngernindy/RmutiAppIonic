import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-act',
  templateUrl: './act.page.html',
  styleUrls: ['./act.page.scss'],
})
export class ActPage implements OnInit {

  act:any;
  status:any;
  status_id:any;

  buttonShow:boolean;
  buttonHide:boolean;

  constructor(public http: Http,private navCtrl: NavController) {
    this.status = [];
    // this.showAct()
    // this.buttonShow = true;

   



   }

   ionViewWillEnter() {

    this.showAct()


  }

  ngOnInit() {
  }

  showAct(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = {  };
    // this.http.post('http://localhost/WebProject/API_Act.php', body, options)
    // this.http.post('http://192.168.1.107/WebProject/API_Act.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_Act.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.act = data.json()[1].dbresult;

          
          
          

          
          
          
        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }

  goToAct(activities_id,activities_topic,activities_unit,term_id,activities_year,activities_date,time_out,atttype_id,lat,lng,act_status){

    this.navCtrl.navigateForward(['/tabs/tab3', { 
      activities_id:activities_id,
      activities_topic:activities_topic,
      activities_unit	:activities_unit,
      term_id:term_id,
      activities_year:activities_year,
      activities_date:activities_date,
      time_out:time_out,
      atttype_id:atttype_id,
      lat:lat,
      lng:lng,
      act_status:act_status,





      


    
    }]);

  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.showAct()
      event.target.complete();
    }, 2000);
  }

  

}
