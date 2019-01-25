import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/service/nba.service';
import { NbaModalPageComponent } from 'src/app/component/nba-modal-page/nba-modal-page.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.page.html',
  styleUrls: ['./nba.page.scss'],
})
export class NbaPage implements OnInit {
  hupuMap = {};
  constructor(private nbaService: NbaService, public modalController: ModalController) { }

  ngOnInit() {
    this.getHupuNews();
  }

  getHupuNews() {
    this.nbaService.getHupuNBA().subscribe(data => {
      this.extractNBANews(data);
    });
  }

  extractNBANews(data) {
    const matches = data.match(/https:\/\/bbs.hupu.com(\S*).html/g);
    for (let index = 0; index < 25; index++) {
      const reg = new RegExp(`${matches[index]}">(\\S*)</a>`, 'i');
      const title = data.match(reg);
      if (title && title[1]) {
        this.hupuMap[title[1]] = matches[index];
      }
    }
    console.log(this.hupuMap);
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
