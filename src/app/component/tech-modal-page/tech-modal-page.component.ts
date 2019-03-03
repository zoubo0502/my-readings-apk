
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tech-modal-page',
  templateUrl: './tech-modal-page.component.html',
  styleUrls: ['./tech-modal-page.component.scss']
})
export class TechModalPageComponent implements OnInit {
  @Input() value: string;
  @Input() url: string;

  constructor(
    private platform: Platform,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }
}
