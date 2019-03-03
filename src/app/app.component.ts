import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList
} from '@angular/core';

import {
  Platform,
  ModalController,
  IonRouterOutlet
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  subscription: Subscription;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    public modalCtrl: ModalController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  ngOnInit() {}
  // active hardware back button
  backButtonEvent() {
   this.subscription = this.platform.backButton.subscribe(() => {
      console.log('back button click');
      // close modal
      try {
        const element = this.modalCtrl.getTop();
        if (element) {
          element.then(modal => modal.dismiss());
          return;
        }
      } catch (error) {
        console.log(error);
      }

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/home') {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4
          } else {
          }
        }
      });
    });
    console.log(this.subscription);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
