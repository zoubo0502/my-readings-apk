import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nba-modal-page',
  templateUrl: './nba-modal-page.component.html',
  styleUrls: ['./nba-modal-page.component.scss']
})
export class NbaModalPageComponent implements OnInit {
  @Input() value: string;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }

}
