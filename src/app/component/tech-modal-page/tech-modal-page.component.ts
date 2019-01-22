import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tech-modal-page',
  templateUrl: './tech-modal-page.component.html',
  styleUrls: ['./tech-modal-page.component.scss']
})
export class TechModalPageComponent implements OnInit {
  @Input() value: string;
  @Input() url: string;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }
}
