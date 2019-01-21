import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZhihuDetails } from 'src/app/model/ZhihuDetails';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  @Input() value: ZhihuDetails;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }
}
