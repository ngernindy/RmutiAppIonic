import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  news_topic:string;
  news_detail:string;
  news_date:string;
  news_filename:string;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.news_topic = this.route.snapshot.paramMap.get('news_topic');
    this.news_detail = this.route.snapshot.paramMap.get('news_detail');
    this.news_date = this.route.snapshot.paramMap.get('news_date');
    this.news_filename = this.route.snapshot.paramMap.get('news_filename');
   }

  ngOnInit() {
  }

}
