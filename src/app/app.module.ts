import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ZhihuModalPageComponent } from './component/zhihu-modal-page/zhihu-modal-page.component';
import { TechModalPageComponent } from './component/tech-modal-page/tech-modal-page.component';
import { NbaModalPageComponent } from './component/nba-modal-page/nba-modal-page.component';

@NgModule({
  declarations: [AppComponent, ZhihuModalPageComponent, TechModalPageComponent, NbaModalPageComponent],
  entryComponents: [ZhihuModalPageComponent, TechModalPageComponent, NbaModalPageComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
