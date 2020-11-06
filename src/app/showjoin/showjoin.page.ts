import { Component, OnInit } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showjoin',
  templateUrl: './showjoin.page.html',
  styleUrls: ['./showjoin.page.scss'],
})
export class ShowjoinPage implements OnInit {

  join:any;
  activities_id:any;

  constructor(public http: Http, private navCtrl: NavController, private route: ActivatedRoute) { 
    this.activities_id = this.route.snapshot.paramMap.get('activities_id');

  }

  ionViewWillEnter() {

    this.showjoin();


  }

  ngOnInit() {
  }


  showjoin(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new ResponseOptions({ headers: headers });
    let body = { activities_id:this.activities_id };
    // this.http.post('http://192.168.1.107/WebProject/API_join.php', body, options)
    this.http.post('http://192.168.43.170/WebProject/API_join.php', body, options)


      .subscribe(data => {
        // console.log("getcustomer->apistatus:"+data.json()[0].apistatus);
        if (data.json()[0].apistatus == "1") {
          //ไปหน้า push
          this.join = data.json()[1].dbresult;

          
          
          

          
          
          
        } else {
          // ไม่มีข้อมูล
        }
      }, error => {
        console.log("error");
      })
  }

}
