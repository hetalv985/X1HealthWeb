(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",(function(){return g}));var i=e("ofXK"),o=e("TEn/"),a=e("3Pt+"),c=e("tyNb"),b=e("fXoL");const l=["canvas1"],s=["canvas2"],r=["canvas3"],d=[{path:"",component:(()=>{class t{constructor(){this.videos=[{imgPath:"assets/images/meditate.jpg",title:"Happy Meditation"},{imgPath:"assets/images/together.jpg",title:"Heart to Heart"},{imgPath:"assets/images/food.jpg",title:"Food for thought"},{imgPath:"assets/images/coffee.jpg",title:"What's in your coffee?"}]}ngAfterViewInit(){let t=this.canvasEl1.nativeElement,n=this.canvasEl2.nativeElement,e=this.canvasEl3.nativeElement;t.width=100,t.height=100,n.width=100,n.height=100,e.width=100,e.height=100,this.drawCircle(t,Math.PI,"50%"),this.drawCircle(n,1.2*Math.PI,"66%"),this.drawCircle(e,.4*Math.PI,"20%")}drawCircle(t,n,e){let i=t.getContext("2d");i.beginPath(),i.arc(t.width/2,t.height/2,40,0,2*Math.PI),i.lineWidth=1,i.strokeStyle="#ffffff",i.stroke(),i.font="16px Arial",i.fillStyle="#ffffff",i.fillText(e,t.width/2-10,t.height/2+8),i.closePath(),i.beginPath(),i.arc(t.width/2,t.height/2,40,0,n),i.lineWidth=5,i.strokeStyle="#1bd0e1",i.stroke()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Cb({type:t,selectors:[["app-home"]],viewQuery:function(t,n){var e;1&t&&(b.bc(l,!0),b.bc(s,!0),b.bc(r,!0)),2&t&&(b.Xb(e=b.Tb())&&(n.canvasEl1=e.first),b.Xb(e=b.Tb())&&(n.canvasEl2=e.first),b.Xb(e=b.Tb())&&(n.canvasEl3=e.first))},decls:57,vars:1,consts:[[3,"translucent"],["size","4"],[1,"heading"],[1,"stats"],["position","stacked"],[1,"ion-canvas"],["canvas1",""],["canvas2",""],["canvas3",""]],template:function(t,n){1&t&&(b.Lb(0,"ion-header",0),b.Lb(1,"ion-toolbar"),b.Lb(2,"ion-title"),b.ac(3," X1 Health "),b.Kb(),b.Kb(),b.Kb(),b.Lb(4,"ion-content"),b.Lb(5,"ion-grid"),b.Lb(6,"ion-row"),b.Lb(7,"ion-col"),b.Lb(8,"ion-label"),b.ac(9,"Recommended for you"),b.Kb(),b.Kb(),b.Kb(),b.Lb(10,"ion-row"),b.Lb(11,"ion-col"),b.Lb(12,"ion-label"),b.ac(13,"Today"),b.Kb(),b.Kb(),b.Kb(),b.Lb(14,"ion-row"),b.Lb(15,"ion-col",1),b.Lb(16,"ion-card"),b.Lb(17,"ion-card-header"),b.Lb(18,"ion-label",2),b.ac(19,"Standing"),b.Kb(),b.Kb(),b.Lb(20,"ion-card-content"),b.Lb(21,"ion-item",3),b.Lb(22,"ion-label",4),b.ac(23,"Goal: 90 mins"),b.Kb(),b.Lb(24,"ion-label",4),b.ac(25,"Completed: 45 mins"),b.Kb(),b.Kb(),b.Lb(26,"div",5),b.Jb(27,"canvas",null,6),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(29,"ion-col",1),b.Lb(30,"ion-card"),b.Lb(31,"ion-card-header"),b.Lb(32,"ion-label",2),b.ac(33,"Exercise"),b.Kb(),b.Kb(),b.Lb(34,"ion-card-content"),b.Lb(35,"ion-item",3),b.Lb(36,"ion-label",4),b.ac(37,"Goal: 90 mins"),b.Kb(),b.Lb(38,"ion-label",4),b.ac(39,"Completed: 60 mins"),b.Kb(),b.Kb(),b.Lb(40,"div",5),b.Jb(41,"canvas",null,7),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(43,"ion-col",1),b.Lb(44,"ion-card"),b.Lb(45,"ion-card-header"),b.Lb(46,"ion-label",2),b.ac(47,"Steps"),b.Kb(),b.Kb(),b.Lb(48,"ion-card-content"),b.Lb(49,"ion-item",3),b.Lb(50,"ion-label",4),b.ac(51,"Goal: 5000 steps"),b.Kb(),b.Lb(52,"ion-label",4),b.ac(53,"Completed: 1002 steps"),b.Kb(),b.Kb(),b.Lb(54,"div",5),b.Jb(55,"canvas",null,8),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&t&&b.Wb("translucent",!0)},directives:[o.h,o.n,o.m,o.f,o.g,o.l,o.e,o.j,o.b,o.d,o.c,o.i],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.ion-scroll[_ngcontent-%COMP%]{white-space:nowrap;height:300px;overflow-x:auto}.ion-scroll[_ngcontent-%COMP%]   .scroll-item[_ngcontent-%COMP%]{display:inline-block;width:400px}.heading[_ngcontent-%COMP%]{padding-top:8px;font-size:16px;color:#fff}.stats[_ngcontent-%COMP%]{width:75%;display:inline-block;vertical-align:top;font-size:20px}.stats[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-bottom:8px}.ion-canvas[_ngcontent-%COMP%]{width:100px;display:inline-block}.chart[_ngcontent-%COMP%]{width:70%;margin-top:16px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(d)],c.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(n){return new(n||t)},imports:[[i.b,a.a,o.o,h]]}),t})()}}]);