(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",(function(){return M}));var i=e("ofXK"),o=e("TEn/"),c=e("3Pt+"),a=e("tyNb"),b=e("fXoL");const s=["canvas1"],l=["canvas2"],r=["canvas3"];function h(t,n){if(1&t&&(b.Mb(0,"ion-col",14),b.Mb(1,"ion-card"),b.Mb(2,"ion-card-content"),b.Kb(3,"ion-img",15),b.Mb(4,"ion-label",4),b.cc(5),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t){const t=n.$implicit;b.zb(3),b.Xb("src",t.imgPath),b.zb(2),b.dc(t.title)}}const d=[{path:"",component:(()=>{class t{constructor(){this.videos=[{imgPath:"assets/images/meditate.jpg",title:"Happy Meditation"},{imgPath:"assets/images/together.jpg",title:"Heart to Heart"},{imgPath:"assets/images/food.jpg",title:"Food for thought"},{imgPath:"assets/images/coffee.jpg",title:"What's in your coffee?"}]}ngAfterViewInit(){let t=this.canvasEl1.nativeElement,n=this.canvasEl2.nativeElement,e=this.canvasEl3.nativeElement;t.width=100,t.height=100,n.width=100,n.height=100,e.width=100,e.height=100,this.drawCircle(t,Math.PI,"50%"),this.drawCircle(n,1.2*Math.PI,"66%"),this.drawCircle(e,.4*Math.PI,"20%")}drawCircle(t,n,e){let i=t.getContext("2d");i.beginPath(),i.arc(t.width/2,t.height/2,40,0,2*Math.PI),i.lineWidth=1,i.strokeStyle="#ffffff",i.stroke(),i.font="16px Arial",i.fillStyle="#ffffff",i.fillText(e,t.width/2-10,t.height/2+8),i.closePath(),i.beginPath(),i.arc(t.width/2,t.height/2,40,0,n),i.lineWidth=5,i.strokeStyle="#1bd0e1",i.stroke()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Db({type:t,selectors:[["app-home"]],viewQuery:function(t,n){var e;1&t&&(b.ec(s,!0),b.ec(l,!0),b.ec(r,!0)),2&t&&(b.Yb(e=b.Ub())&&(n.canvasEl1=e.first),b.Yb(e=b.Ub())&&(n.canvasEl2=e.first),b.Yb(e=b.Ub())&&(n.canvasEl3=e.first))},decls:63,vars:2,consts:[[3,"translucent"],[1,"ion-scroll"],["class","scroll-item",4,"ngFor","ngForOf"],["size","4"],[1,"heading"],[1,"stats"],["position","stacked"],[1,"ion-canvas"],["canvas1",""],["src","assets/images/standing_chart.png",1,"chart"],["canvas2",""],["src","assets/images/exercise_chart.png",1,"chart"],["canvas3",""],["src","assets/images/steps_chart.png",1,"chart"],[1,"scroll-item"],[3,"src"]],template:function(t,n){1&t&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.cc(3," X1 Health "),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content"),b.Mb(5,"ion-grid"),b.Mb(6,"ion-row"),b.Mb(7,"ion-col"),b.Mb(8,"ion-label"),b.cc(9,"Recommended for you"),b.Lb(),b.Lb(),b.Lb(),b.Mb(10,"ion-row"),b.Mb(11,"div",1),b.bc(12,h,6,2,"ion-col",2),b.Lb(),b.Lb(),b.Mb(13,"ion-row"),b.Mb(14,"ion-col"),b.Mb(15,"ion-label"),b.cc(16,"Today"),b.Lb(),b.Lb(),b.Lb(),b.Mb(17,"ion-row"),b.Mb(18,"ion-col",3),b.Mb(19,"ion-card"),b.Mb(20,"ion-card-header"),b.Mb(21,"ion-label",4),b.cc(22,"Standing"),b.Lb(),b.Lb(),b.Mb(23,"ion-card-content"),b.Mb(24,"ion-item",5),b.Mb(25,"ion-label",6),b.cc(26,"Goal: 90 mins"),b.Lb(),b.Mb(27,"ion-label",6),b.cc(28,"Completed: 45 mins"),b.Lb(),b.Lb(),b.Mb(29,"div",7),b.Kb(30,"canvas",null,8),b.Lb(),b.Kb(32,"ion-img",9),b.Lb(),b.Lb(),b.Lb(),b.Mb(33,"ion-col",3),b.Mb(34,"ion-card"),b.Mb(35,"ion-card-header"),b.Mb(36,"ion-label",4),b.cc(37,"Exercise"),b.Lb(),b.Lb(),b.Mb(38,"ion-card-content"),b.Mb(39,"ion-item",5),b.Mb(40,"ion-label",6),b.cc(41,"Goal: 90 mins"),b.Lb(),b.Mb(42,"ion-label",6),b.cc(43,"Completed: 60 mins"),b.Lb(),b.Lb(),b.Mb(44,"div",7),b.Kb(45,"canvas",null,10),b.Lb(),b.Kb(47,"ion-img",11),b.Lb(),b.Lb(),b.Lb(),b.Mb(48,"ion-col",3),b.Mb(49,"ion-card"),b.Mb(50,"ion-card-header"),b.Mb(51,"ion-label",4),b.cc(52,"Steps"),b.Lb(),b.Lb(),b.Mb(53,"ion-card-content"),b.Mb(54,"ion-item",5),b.Mb(55,"ion-label",6),b.cc(56,"Goal: 5000 steps"),b.Lb(),b.Mb(57,"ion-label",6),b.cc(58,"Completed: 1002 steps"),b.Lb(),b.Lb(),b.Mb(59,"div",7),b.Kb(60,"canvas",null,12),b.Lb(),b.Kb(62,"ion-img",13),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.Xb("translucent",!0),b.zb(12),b.Xb("ngForOf",n.videos))},directives:[o.h,o.o,o.n,o.f,o.g,o.m,o.e,o.k,i.h,o.b,o.d,o.c,o.j,o.i],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.ion-scroll[_ngcontent-%COMP%]{white-space:nowrap;height:300px;overflow-x:auto}.ion-scroll[_ngcontent-%COMP%]   .scroll-item[_ngcontent-%COMP%]{display:inline-block;width:400px}.heading[_ngcontent-%COMP%]{padding-top:8px;font-size:16px;color:#fff}.stats[_ngcontent-%COMP%]{width:75%;display:inline-block;vertical-align:top;font-size:20px}.stats[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-bottom:8px}.ion-canvas[_ngcontent-%COMP%]{width:100px;display:inline-block}.chart[_ngcontent-%COMP%]{width:70%;margin-top:16px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(d)],a.i]}),t})(),M=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[i.b,c.a,o.p,g]]}),t})()}}]);