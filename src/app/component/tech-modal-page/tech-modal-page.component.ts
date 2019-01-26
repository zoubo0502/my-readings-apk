import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tech-modal-page',
  templateUrl: './tech-modal-page.component.html',
  styleUrls: ['./tech-modal-page.component.scss']
})
export class TechModalPageComponent implements OnInit, OnDestroy {
  @Input() value: string;
  @Input() url: string;

  sub: Subscription;
  constructor(
    private platform: Platform,
    public modalController: ModalController
  ) {}

  private handleHardwareBackButton(): void {
    console.log('register back button');
    this.sub = this.platform.backButton.subscribeWithPriority(100, async () => {
      console.log('back called');
      await this.modalController.dismiss();
    });
  }

  ngOnInit() {
    this.handleHardwareBackButton();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  swipe($event) {
    if ($event.direction >= 1) {
      this.modalController.dismiss();
    }
  }
}
