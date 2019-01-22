import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZhihuDetails } from 'src/app/model/ZhihuDetails';
@Component({
  selector: 'app-zhihu-modal-page',
  templateUrl: './zhihu-modal-page.component.html',
  styleUrls: ['./zhihu-modal-page.component.scss']
})
export class ZhihuModalPageComponent implements OnInit {
  @Input() value: ZhihuDetails;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }
}
