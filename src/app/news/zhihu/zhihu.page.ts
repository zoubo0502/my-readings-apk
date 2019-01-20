import { ZhihuService } from './../../service/zhihu.service';
import { Component, OnInit } from '@angular/core';
import { ZhihuNews } from 'src/app/model/ZhihuNews';

@Component({
  selector: 'app-zhihu',
  templateUrl: './zhihu.page.html',
  styleUrls: ['./zhihu.page.scss']
})
export class ZhihuPage implements OnInit {
  zhihuNews: ZhihuNews[];
  constructor(private zhihuService: ZhihuService) {}

  ngOnInit() {
    this.getZhihuNews();
  }

  private getZhihuNews() {
    this.zhihuService.getHotNews().subscribe(data => {
      this.zhihuNews = data.recent;
      console.log(this.zhihuNews[0]);
    });
  }
}
