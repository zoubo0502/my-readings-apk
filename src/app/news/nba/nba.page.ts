import { Component, OnInit, ViewChild } from '@angular/core';
import { NbaService } from 'src/app/service/nba.service';
import { NbaModalPageComponent } from 'src/app/component/nba-modal-page/nba-modal-page.component';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.page.html',
  styleUrls: ['./nba.page.scss']
})
export class NbaPage implements OnInit {
  hupuNewsMap = {};
  slideNews = [];

  constructor(
    private nbaService: NbaService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getHupuNews();
  }

  getHupuNews() {
    this.nbaService.getHupuNBA().subscribe(data => {
      this.extractNBANews(data);
    });
  }

  extractNBANews(data) {
    const matcheNews = data.match(/https:\/\/bbs.hupu.com(\S*).html/g);
    this.slideNews = data.match(/https:\/\/w(\d*).hoopchina.com.cn(\S*).jpg/g).slice(0, 3);
    for (let index = 0; index < 25; index++) {
      const reg = new RegExp(`${matcheNews[index]}">(\\S*)</a>`, 'i');
      const title = data.match(reg);
      if (title && title[1]) {
        this.hupuNewsMap[title[1]] = matcheNews[index];
      }
    }
    console.log(this.slideNews);
  }

  presentNews(url: string) {
    const passUrl = url.replace('https://bbs.hupu.com', '');
    this.nbaService.getNewsDetails(passUrl).subscribe(data => {
      this.presentModal(data);
    });
  }

  async presentModal(data: string) {
    const modal = await this.modalController.create({
      component: NbaModalPageComponent,
      componentProps: { value: data }
    });
    return await modal.present();
  }
}
