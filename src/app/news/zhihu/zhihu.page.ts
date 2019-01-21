import { ZhihuService } from './../../service/zhihu.service';
import { Component, OnInit } from '@angular/core';
import { ZhihuNews } from 'src/app/model/ZhihuNews';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from 'src/app/component/modal-page/modal-page.component';
import { ZhihuDetails } from 'src/app/model/ZhihuDetails';

@Component({
  selector: 'app-zhihu',
  templateUrl: './zhihu.page.html',
  styleUrls: ['./zhihu.page.scss']
})
export class ZhihuPage implements OnInit {
  zhihuNews: ZhihuNews[];
  zhihuNewsDetails: ZhihuDetails;
  constructor(
    private zhihuService: ZhihuService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getZhihuNews();
  }

  private getZhihuNews() {
    this.zhihuService.getHotNews().subscribe(data => {
      this.zhihuNews = data.recent;
      console.log(this.zhihuNews[0]);
    });
  }

  presentNews(news: ZhihuNews) {
    this.zhihuService.getNewsDetails(news).subscribe(data => {
      this.zhihuNewsDetails = data;
      console.log(this.zhihuNewsDetails);
      this.presentModal();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps: { value: this.zhihuNewsDetails }
    });
    return await modal.present();
  }
}
