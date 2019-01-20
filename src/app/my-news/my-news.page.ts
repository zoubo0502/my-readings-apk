import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.page.html',
  styleUrls: ['./my-news.page.scss']
})
export class MyNewsPage implements OnInit {
  isAndroid = false;
  weiboIcon = '../../assets/fonts/unselected/weibo.svg';
  initTabIcon = {
    weibo: '../../assets/fonts/unselected/weibo.svg',
    zhihu: '../../assets/fonts/unselected/zhihu.svg',
    nba: '../../assets/fonts/unselected/nba.svg',
    tech: '../../assets/fonts/unselected/tech.svg'
  };
  tabIcon = { ...this.initTabIcon };

  ngOnInit() {}

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  change(event) {
    const tab = event.detail.tab;
    this.tabIcon = {
      ...this.initTabIcon,
      [tab]: `../../assets/fonts/selected/${tab}.svg`
    };
  }
}
