import { Platform, NavController, IonTabs } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.page.html',
  styleUrls: ['./my-news.page.scss']
})
export class MyNewsPage implements OnInit {
  @ViewChild('newsTabs') newsTabs: IonTabs;
  isAndroid = false;
  initTabIcon = {
    weibo: 'assets/fonts/unselected/weibo.svg',
    zhihu: 'assets/fonts/unselected/zhihu.svg',
    nba: 'assets/fonts/unselected/nba.svg',
    tech: 'assets/fonts/unselected/tech.svg'
  };
  tabIcon = { ...this.initTabIcon };
  tabs: string[];

  ngOnInit() {}

  constructor(platform: Platform, public navCtrl: NavController) {
    this.isAndroid = platform.is('android');
    this.tabs = ['zhihu', 'nba', 'tech', 'weibo'];
  }

  changeTab(event) {
    const tab = event.detail.tab;
    this.tabIcon = {
      ...this.initTabIcon,
      [tab]: `assets/fonts/selected/${tab}.svg`
    };
  }

  swipeRight($event) {
    const activeTab = this.newsTabs.outlet.getActiveStackId();
    let index = this.tabs.findIndex(v => v === activeTab);
    switch (index) {
      case 0:
        index = this.tabs.length - 1;
        break;
      default:
        index -= 1;
        break;
    }
    this.newsTabs.select(this.tabs[index]);
  }

  swipeLeft($event) {
    const activeTab = this.newsTabs.outlet.getActiveStackId();
    let index = this.tabs.findIndex(v => v === activeTab);
    switch (index) {
      case this.tabs.length - 1:
        index = 0;
        break;
      default:
        index += 1;
        break;
    }
    this.newsTabs.select(this.tabs[index]);
  }
}
