import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyNewsPage } from './my-news.page';
import { MyNewsRoutingModule } from './my-news.router.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyNewsRoutingModule],
  declarations: [MyNewsPage]
})
export class MyNewsPageModule {}
