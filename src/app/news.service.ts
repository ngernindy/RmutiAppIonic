import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // apiUrl = 'http://localhost/WebProject/API_news.php';
  // apiUrl = 'http://192.168.1.107/WebProject/API_news.php';
    //  apiUrl = 'http://172.26.106.226/WebProject/API_news.php';//เรียกที่อยู่ API
      // apiUrl = 'http://192.168.43.90/WebProject/API_news.php';
      public results:any; // กำหนดตัวแปร สำหรับรับค่าข้อมูลจาก api



  constructor(private http: HttpClient) { }

  // getNews(): Observable<News> {
  //   return this.http.get<News>(this.apiUrl);
  //   }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvincePage');
     
    // ทำคำสั่งดึงข้อมูลจาก api แบบ get
    this.http.get('http://localhost/WebProject/api_testtest.php').subscribe(data => {
      this.results = data;
      console.log(this.results); // สำหรับทดสอบ debug ดูค่าข้อมูล
    });        
 
  }

  
}
