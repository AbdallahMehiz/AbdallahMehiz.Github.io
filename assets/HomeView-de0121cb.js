import{_ as l,o as c,c as d,r as _,a as u,b as f,d as a,w as o,e as p,f as r,t as i}from"./index-19068eb3.js";const g={},m={class:"info-holder"},h=u("div",{class:"lil-brown-box"},null,-1);function v(e,t){return c(),d("div",m,[_(e.$slots,"default"),h])}const b=l(g,[["render",v]]),S="/assets/profile_pic-b2e8b2b5.jpg";const w={name:"HomeView",components:{QuickInfoHolder:b},setup(){return{}},methods:{calculateAge(e){let t=new Date;return t.getMonth()<8?t.getFullYear()-e-1:t.getFullYear()-e},currentTime(){let e=new Date;return`${e.getHours().toString().length==1?"0"+e.getHours():e.getHours()}:${e.getMinutes().toString().length==1?"0"+e.getMinutes():e.getMinutes()}`}}},H={class:"HomeView"},A=p('<div class="profilepic-container" data-v-5b86001f><img src="'+S+'" alt="" data-v-5b86001f></div><div class="info" data-v-5b86001f><h1 class="name" data-v-5b86001f>Abdallah, Mehiz</h1><h2 class="job" data-v-5b86001f>Computer Science Student</h2><h3 class="location" data-v-5b86001f>Ras-El-Oued, Bourdj-Bou-Arrerridj, Algeria</h3><p data-v-5b86001f> Hello, I&#39;m Abdallah Mehiz, a 2<sup data-v-5b86001f>nd</sup> year Computer Science Student at the University of Bachir-El-Ibrahimi. </p><p data-v-5b86001f> Currently Learning Back-end Web Development with ASP.NET Core and Vue.js. Currently Learning Android Development with Kotlin and Android Studio. </p><p data-v-5b86001f> Planning to learn Embedded Systems, Software Engineering, and Game Dev. </p></div>',2),y={class:"generalinfo-container"};function V(e,t,$,x,k,s){const n=f("QuickInfoHolder");return c(),d("div",H,[A,u("div",y,[a(n,null,{default:o(()=>[r("Age: "+i(s.calculateAge(2003)),1)]),_:1}),a(n,null,{default:o(()=>[r("Time Zone: GMT+1("+i(s.currentTime())+")",1)]),_:1}),a(n,null,{default:o(()=>[r("Languages: Arabic, English, French")]),_:1})])])}const C=l(w,[["render",V],["__scopeId","data-v-5b86001f"]]);export{C as default};
