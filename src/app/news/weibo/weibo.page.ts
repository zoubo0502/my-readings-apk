import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weibo',
  templateUrl: './weibo.page.html',
  styleUrls: ['./weibo.page.scss']
})
export class WeiboPage implements OnInit {
  collapsed = false;
  raokouContentShow: boolean[];
  raokoulings = {};
  constructor() {
    this.raokoulings = {
      杂志社: `杂志社，<br/>出杂志，<br/>杂志出在杂志社，<br/>有植树造林、治理沼泽、栽种花草种种杂志数十册。`,
      大柴和小柴:
        '大柴和小柴，<br/>帮蔡爷爷晒柴菜，<br/>大柴晒柴，<br/>小柴晒菜，<br/>晒干了蔡爷爷的柴和菜，<br/>大伙都夸大柴和小柴。',
      知道不知道:
        '知道就是知道，<br/>不知道就是不知道。<br/>不要知道说不知道，<br/>也不要不知道说知道。<br/>老老实实，<br/>实事求是，<br/>一定做到不折不扣地真知道。',
      四十四棵柿子树:
        '山前有四十四棵死涩柿子树<br/>山后有四十四只石狮子<br/>也不知是<br/>山前的四十四棵死涩柿子树<br/>涩死了<br/>山后的四十四只石狮子<br/>还是<br/>山后的四十四只石狮子<br/>咬死了<br/>山前的四十四棵死涩柿子树',
      盆碰瓶:
        '桌上放个盆，<br/>盆里有个瓶，<br/>乒乒砰砰，<br/>不知是瓶碰盆，<br/>还是盆碰瓶。',
      陈郑两庄人:
        '陈庄城，<br/>郑庄城，<br/>两庄城墙都有门。<br/>陈庄人走陈庄门，<br/>郑庄人走郑庄门。<br/>忽然刮来一股风，<br/>吹乱陈郑两庄人，<br/>陈庄人过郑庄门，<br/>郑庄人走陈庄门。',
      做早操: '早晨早早起，<br/>早起做早操。<br/>人人做早操，<br/>做操身体好。',
      紫茄子:
        '紫紫茄子，<br/>紫茄子紫。<br/>紫茄子结籽，<br/>紫茄子皮紫肉不紫。<br/>紫紫茄子结籽，<br/>紫紫茄子皮紫籽也紫。<br/>你喜欢吃皮紫肉不紫的紫茄子，<br/>还是喜欢吃紫皮紫籽的紫紫茄子。',
      三哥三嫂与酸枣:
        '三哥三嫂子，<br/>借给我三斗三升酸枣子，<br/>等我明年收了酸枣子，<br/>就如数还给三哥三嫂<br/>这三斗三升酸枣子。',
      桑树与枣树:
        '操场前面有三十三棵桑树，<br/>操场后面有四十四棵枣树。<br/>张三把三十三棵桑树认作枣树，<br/>赵四把四十四棵枣树认作桑树。',
      姓陈与姓程:
        '姓陈不能说成姓程，<br/>姓程不能说成姓陈。<br/>禾木是程，<br/>耳东是陈。<br/>如果陈程不分，<br/>就会认错人。',
      老彭捧着一个盆:
        '老彭捧着一个盆，<br/>路过老庞干活儿的棚，<br/>老庞的棚碰了老彭的盆。<br/>棚倒盆碎棚砸盆。<br/>盆碎棚倒盆撞棚。<br/>老彭要赔老庞的棚，<br/>老庞要赔老彭的盆。<br/>老庞陪着老彭去买盆，<br/>老彭陪着老庞来修棚。',
      长城长:
        '长城长，<br/>城墙长，<br/>收集整理长长长城长城墙，<br/>城墙长长城长长。'
    };
    this.raokouContentShow = new Array(20).fill(true);
  }

  ngOnInit() {}

  collapseShow(i) {
    this.raokouContentShow[i] = !this.raokouContentShow[i];
    this.collapsed = this.callapsedOrNot();
  }
  callapsedOrNot(): boolean {
    for (const b of this.raokouContentShow) {
      if (!b) {
        return true;
      }
    }
    return false;
  }

  controlShow() {
    if (this.collapsed) {
      this.raokouContentShow.fill(true);
    } else {
      this.raokouContentShow.fill(false);
    }
    this.collapsed = !this.collapsed;
  }
}
