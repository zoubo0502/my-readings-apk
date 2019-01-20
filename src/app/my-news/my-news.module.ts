import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyNewsPage } from './my-news.page';

const routes: Routes = [
  {
    path: 'my-readings',
    component: MyNewsPage,
    children: [
      {
        path: 'weibo',
        children: [
          {
            path: '',
            loadChildren: '../news/weibo/weibo.module#WeiboPageModule'
          }
        ]
      },
      {
        path: 'zhihu',
        children: [
          {
            path: '',
            loadChildren: '../news/zhihu/zhihu.module#ZhihuPageModule'
          }
        ]
      },
      {
        path: 'nba',
        children: [
          {
            path: '',
            loadChildren: '../news/nba/nba.module#NbaPageModule'
          }
        ]
      },
      {
        path: 'tech',
        children: [
          {
            path: '',
            loadChildren: '../news/tech/tech.module#TechPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'zhihu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/my-readings/zhihu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyNewsPage]
})
export class MyNewsPageModule {}
