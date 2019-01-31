import { ZhihuTopStories } from './../../model/ZhihuTopStories';
import { ZhihuStories } from './../../model/ZhihuStories';
import { ZhihuModalPageComponent } from './../../component/zhihu-modal-page/zhihu-modal-page.component';
import { ZhihuService } from './../../service/zhihu.service';
import { Component, OnInit } from '@angular/core';
import { ZhihuHotNews } from 'src/app/model/ZhihuNews';
import { ModalController } from '@ionic/angular';
import { ZhihuLatestNews } from 'src/app/model/ZhihuLatest';

@Component({
  selector: 'app-zhihu',
  templateUrl: './zhihu.page.html',
  styleUrls: ['./zhihu.page.scss']
})
export class ZhihuPage implements OnInit {
  zhihuHotNews: ZhihuHotNews[];
  zhihuStories: ZhihuStories[];
  zhihuTopStories: ZhihuTopStories[];
  showAllLatest = false;
  showAllHot = false;
  constructor(
    private zhihuService: ZhihuService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getZhihuHotNews();
    this.getZhihuLatestNews();
  }

  private getZhihuHotNews() {
    this.zhihuService.getHotNews().subscribe(data => {
      this.zhihuHotNews = data.recent;
    });
  }

  private getZhihuLatestNews() {
    this.zhihuService.getLatestNews().subscribe(data => {
      this.zhihuStories = data.stories;
      const newsId = this.zhihuStories.map(v => v.id);
      this.zhihuTopStories = data.top_stories.filter(v => !newsId.includes(v.id));
    });
  }

  presentNews(id: number) {
    this.zhihuService.getNewsDetails(id).subscribe(data => {
      this.presentModal(data);
    });
  }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ZhihuModalPageComponent,
      componentProps: { value: data }
    });
    return await modal.present();
  }
}
