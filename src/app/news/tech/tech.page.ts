import { TechModalPageComponent } from './../../component/tech-modal-page/tech-modal-page.component';
import { WangyiArtList } from './../../model/WangyiArtList';
import { TechService } from './../../service/tech.service';
import { Component, OnInit } from '@angular/core';
import { WangyiNews } from 'src/app/model/WangyiNews';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.page.html',
  styleUrls: ['./tech.page.scss']
})
export class TechPage implements OnInit {
  wangyiNews: WangyiNews[];
  wangyiDetails: string;
  constructor(
    private techService: TechService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getWangyiTechNews();
  }

  getWangyiTechNews(): any {
    this.techService.getArtList().subscribe(data => {
      const wangyiArtList = this.parseStringData(data) as WangyiArtList;
      this.wangyiNews = wangyiArtList.BA8D4A3Rwangning;
    });
  }

  parseStringData(data: string): any {
    data = data.slice(9, -1);
    return JSON.parse(data);
  }

  presentNews(url: string) {
    const passUrl = url.replace('http://3g.163.com', '');
    this.techService.getNewsDetails(passUrl).subscribe(data => {
      this.wangyiDetails = data;
      this.presentModal(url);
    });
  }

  async presentModal(url: string) {
    const modal = await this.modalController.create({
      component: TechModalPageComponent,
      componentProps: { value: this.wangyiDetails, url }
    });
    return await modal.present();
  }
}
