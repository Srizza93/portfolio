(()=>{var n,e={338:(n,e,t)=>{"use strict";var a=t(379),o=t.n(a),i=t(795),r=t.n(i),c=t(569),s=t.n(c),l=t(565),d=t.n(l),p=t(216),f=t.n(p),u=t(589),m=t.n(u),v=t(890),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=f(),o()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;var b=t(963),_=t(252),h={class:"sub-root"},x=t(577),w={class:"tabs-container"},y=["name"];const k={name:"TabContainer",data:function(){return{tabs:[{id:1,text:"Home"},{id:2,text:"Portfolio"},{id:3,text:"Cv"},{id:4,text:"Contacts"}]}},methods:{selectTab:function(n){var e=n.target,t=document.querySelector(".".concat(e.innerHTML.toLowerCase())),a=document.querySelectorAll(".tab-container_tab-title"),o=document.querySelectorAll(".content-container_page");a.forEach((function(n){return n.classList.remove("selected-tab")})),o.forEach((function(n){return n.classList.remove("selected-content")})),e.classList.add("selected-tab"),t.classList.add("selected-content")},openHomePage:function(){var n=document.querySelector("[name='Home']"),e=document.querySelector(".home");n.classList.add("selected-tab"),e.classList.add("selected-content")}},mounted:function(){this.openHomePage()}};var j=t(881),S={};S.styleTagTransform=m(),S.setAttributes=d(),S.insert=s().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=f(),o()(j.Z,S),j.Z&&j.Z.locals&&j.Z.locals;var z=t(744);const Z=(0,z.Z)(k,[["render",function(n,e,t,a,o,i){return(0,_.wg)(),(0,_.iD)("div",w,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.tabs,(function(n){return(0,_.wg)(),(0,_.iD)("div",{class:"tab-container",key:n.id},[(0,_._)("span",{class:"tab-container_tab-title",name:n.text,onClick:e[0]||(e[0]=function(){return i.selectTab&&i.selectTab.apply(i,arguments)})},(0,x.zw)(n.text),9,y)])})),128))])}],["__scopeId","data-v-838989de"]]);var T={class:"content-container"},C={class:"content-container_page home"},E=[(0,_.uE)('<div class="content-container_page-home" data-v-46efa64f><div class="presentation" data-v-46efa64f><span class="presentation_hello" data-v-46efa64f>Hello, I&#39;m...</span><span class="presentation_name" data-v-46efa64f>Simone Rizza</span><span class="presentation_job" data-v-46efa64f>Frontend Developer</span></div><div class="bars-container" data-v-46efa64f><div class="bars-container-bar blue-bar" data-v-46efa64f></div><div class="bars-container-bar white-bar" data-v-46efa64f></div><div class="bars-container-bar blue-bar" data-v-46efa64f></div><div class="bars-container-bar white-bar" data-v-46efa64f></div><div class="bars-container-bar blue-bar" data-v-46efa64f></div><div class="bars-container-bar white-bar" data-v-46efa64f></div></div></div>',1)];const H={name:"Home"};var D=t(823),I={};I.styleTagTransform=m(),I.setAttributes=d(),I.insert=s().bind(null,"head"),I.domAPI=r(),I.insertStyleElement=f(),o()(D.Z,I),D.Z&&D.Z.locals&&D.Z.locals;const A=(0,z.Z)(H,[["render",function(n,e,t,a,o,i){return(0,_.wg)(),(0,_.iD)("div",C,E)}],["__scopeId","data-v-46efa64f"]]);var L=function(n){return(0,_.dD)("data-v-47e255ce"),n=n(),(0,_.Cn)(),n},P={class:"content-container_page portfolio"},M={class:"portfolio-container"},O=["href"],F={class:"portfolio-container_project-container_inner"},V={class:"portfolio-container_project-container_inner_front"},q={class:"portfolio-container_project-container_project-name"},J=["src"],U={class:"portfolio-container_project-container_inner_back"},W={class:"portfolio-container_project-container_inner_back-container"},Y=L((function(){return(0,_._)("h4",{class:"portfolio-container_project-container_inner_back_title"}," Description ",-1)})),K={class:"portfolio-container_project-container_inner_back_description"},R={class:"portfolio-container_project-container_inner_back-container"},B=L((function(){return(0,_._)("h4",{class:"portfolio-container_project-container_inner_back_title"}," Tools ",-1)})),N={class:"portfolio-container_project-container_inner_back_tools"},G=["href"];const $={name:"Portfolio",data:function(){return{projects:[{id:1,name:"Social Network",image:"social.png",link:"https://srizza93.github.io/social/deploy/index.html",description:"Social Network - Purely Frontend - Responsive - Mocked functions",tools:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"]},{id:2,name:"Movie Streaming",image:"streaming.png",link:"https://srizza93.github.io/streaming/deploy/index.html",description:"Movie Streaming website - Purely Frontend - Responsive",tools:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"]},{id:3,name:"E-commerce",image:"e-commerce.png",link:"https://srizza93.github.io/e-commerce/deploy/index.html",description:"E-commerce website - Purely Frontend - Responsive",tools:["Webpack","HTML","CSS","JS","Vue","Vuex","Vue Test Utils","Jest"]},{id:4,name:"Tooltip plugin",image:"tooltip.png",link:"https://srizza93.github.io/tooltip/",description:"A tool tip plugin with specific conditions and optional tasks - Responsive",tools:["HTML","CSS","JS"]},{id:5,name:"Square task",image:"square-task.png",link:"https://srizza93.github.io/square_task/",description:"Square following mouse",tools:["HTML","CSS","JS"]},{id:6,name:"HTML Email layout",image:"email-layout.png",link:"https://srizza93.github.io/cv-email-html/",description:"Personal CV in HTML-email format - Responsive",tools:["HTML"]}]}},methods:{getImgUrl:function(n){return t(473)("./"+n)}}};var Q=t(141),X={};X.styleTagTransform=m(),X.setAttributes=d(),X.insert=s().bind(null,"head"),X.domAPI=r(),X.insertStyleElement=f(),o()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;const nn=(0,z.Z)($,[["render",function(n,e,t,a,o,i){return(0,_.wg)(),(0,_.iD)("div",P,[(0,_._)("div",M,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.projects,(function(n){return(0,_.wg)(),(0,_.iD)("a",{class:"portfolio-container_project-container",key:n.id,href:n.link},[(0,_._)("div",F,[(0,_._)("div",V,[(0,_._)("span",q,(0,x.zw)(n.name),1),(0,_._)("img",{class:"portfolio-container_project-container_project-img",src:i.getImgUrl(n.image)},null,8,J)]),(0,_._)("div",U,[(0,_._)("div",W,[Y,(0,_._)("span",K,(0,x.zw)(n.description),1)]),(0,_._)("div",R,[B,(0,_._)("ul",N,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(n.tools,(function(n,e){return(0,_.wg)(),(0,_.iD)("li",{class:"portfolio-container_project-container_inner_back_tools_tool",key:e+"/"+n},(0,x.zw)(n),1)})),128))])]),(0,_._)("a",{class:"portfolio-container_project-container_inner_back_project-link",href:n.link},"Go to website",8,G)])])],8,O)})),128))])])}],["__scopeId","data-v-47e255ce"]]);var en=function(n){return(0,_.dD)("data-v-5750e68e"),n=n(),(0,_.Cn)(),n},tn={class:"content-container_page cv"},an={class:"cv-download-container"},on=["href","download"],rn=en((function(){return(0,_._)("span",{class:"cv_download_text"},"Download",-1)})),cn=["src","alt"],sn=(0,_.uE)('<div class="cv_section cv_section_icons" data-v-5750e68e><a href="https://www.linkedin.com/in/simonerizza1993" data-v-5750e68e><img class="cv_section_icons_icon" src="https://github.com/Srizza93/cv-email-html/blob/main/linkedin.png?raw=true" alt="linkedin" data-v-5750e68e></a><a href="https://github.com/Srizza93" data-v-5750e68e><img class="cv_section_icons_icon" src="https://github.com/Srizza93/cv-email-html/blob/main/github.png?raw=true" alt="github" data-v-5750e68e></a></div><div class="cv_section" data-v-5750e68e><span class="cv_title" data-v-5750e68e>About</span><p data-v-5750e68e> Since my childhood I&#39;ve been passionate about software development and IT, I fell in love with these disciplines which I would like to orient myself professionally. My constant desire for growth, with the skills acquired during my experiences in multiple European countries, and my tenacity, make me a person today experienced and determined to achieve his goals. </p></div>',2),ln={class:"cv_section"},dn=en((function(){return(0,_._)("span",{class:"cv_title"},"Experiences",-1)})),pn={class:"cv_list-container"},fn={class:"cv_section"},un=en((function(){return(0,_._)("span",{class:"cv_title"},"Skills",-1)})),mn={class:"cv_list-container"},vn=(0,_.uE)('<div class="cv_section" data-v-5750e68e><span class="cv_title" data-v-5750e68e>Education</span><ul class="cv_list-container" data-v-5750e68e><li class="cv_list-container_items" data-v-5750e68e>I.I.S.S. S.Mottura</li><li class="cv_list-container_items" data-v-5750e68e>Bachelor&#39;s degree</li><li class="cv_list-container_items" data-v-5750e68e> Technological Scientific High School </li><li class="cv_list-container_items" data-v-5750e68e>2009/2012</li></ul></div>',1);const gn={name:"Cv",data:function(){return{experiences:[{id:1,company:"Booking.com",job:"Frontend Developer - Mentorship",dates:"January 2021 – Present",city:"Lille, Hauts-de-France, France"},{id:2,company:"Booking.com",job:"CS Senior Guest Specialist",dates:"May 2019 – Present",city:"Lille, Hauts-de-France, France"},{id:3,company:"Booking.com",job:"CS Guest Specialist",dates:"March 2018 – October 2021",city:"Lille, Hauts-de-France, France"}],skills:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"},{id:4,name:"Vue"},{id:5,name:"Vuex"},{id:6,name:"Vue Test Utils"},{id:7,name:"Webpack"},{id:8,name:"Jest"},{id:9,name:"Git"}],cvs:[{id:1,name:"cv-fr",alt:"french-flag",img:"fr-flag.png",path:"https://srizza93.github.io/portfolio/src/downloads/cv-fr.pdf"},{id:2,name:"cv-eng",alt:"uk-flag",img:"uk-flag.png",path:"https://srizza93.github.io/portfolio/src/downloads/cv-eng.pdf"},{id:3,name:"cv-ita",alt:"ita-flag",img:"ita-flag.png",path:"https://srizza93.github.io/portfolio/src/downloads/cv-ita.pdf"}]}},methods:{getImgUrl:function(n){return t(473)("./"+n)}}};var bn=t(764),_n={};_n.styleTagTransform=m(),_n.setAttributes=d(),_n.insert=s().bind(null,"head"),_n.domAPI=r(),_n.insertStyleElement=f(),o()(bn.Z,_n),bn.Z&&bn.Z.locals&&bn.Z.locals;const hn=(0,z.Z)(gn,[["render",function(n,e,t,a,o,i){return(0,_.wg)(),(0,_.iD)("div",tn,[(0,_._)("div",an,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.cvs,(function(n){return(0,_.wg)(),(0,_.iD)("a",{class:"cv_download",href:n.path,download:n.name,key:n.id},[rn,(0,_._)("img",{class:"cv_download_flag",src:i.getImgUrl(n.img),alt:n.alt},null,8,cn)],8,on)})),128))]),sn,(0,_._)("div",ln,[dn,(0,_._)("ul",pn,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.experiences,(function(n){return(0,_.wg)(),(0,_.iD)("li",{class:"cv_list-container_items",key:n.id+n.job},[(0,_._)("span",null,(0,x.zw)(n.job),1),(0,_._)("span",null,(0,x.zw)(n.dates),1),(0,_._)("span",null,(0,x.zw)(n.company),1),(0,_._)("span",null,(0,x.zw)(n.city),1)])})),128))])]),(0,_._)("div",fn,[un,(0,_._)("ul",mn,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.skills,(function(n){return(0,_.wg)(),(0,_.iD)("li",{class:"cv_list-container_items",key:n.id+n.name},(0,x.zw)(n.name),1)})),128))])]),vn])}],["__scopeId","data-v-5750e68e"]]);var xn={class:"content-container_page contacts"},wn=[(0,_.uE)('<span class="contacts_title" data-v-2acc84b4>Phone:</span><a class="contacts_link" href="tel:+33772233271" data-v-2acc84b4>+33772233271</a><span class="contacts_title" data-v-2acc84b4>Email:</span><a class="contacts_link" href="mailto:simonerizzanl@gmail.com" data-v-2acc84b4>simonerizzanl@gmail.com</a><span class="contacts_title" data-v-2acc84b4>Linkedin:</span><a class="contacts_link" href="https://www.linkedin.com/in/simonerizza1993" data-v-2acc84b4><img class="cv_section_icons_icon" src="https://github.com/Srizza93/cv-email-html/blob/main/linkedin.png?raw=true" alt="linkedin" data-v-2acc84b4></a>',6)];const yn={name:"Contacts"};var kn=t(906),jn={};jn.styleTagTransform=m(),jn.setAttributes=d(),jn.insert=s().bind(null,"head"),jn.domAPI=r(),jn.insertStyleElement=f(),o()(kn.Z,jn),kn.Z&&kn.Z.locals&&kn.Z.locals;const Sn={name:"ContentContaienr",components:{Home:A,Portfolio:nn,Cv:hn,Contacts:(0,z.Z)(yn,[["render",function(n,e,t,a,o,i){return(0,_.wg)(),(0,_.iD)("div",xn,wn)}],["__scopeId","data-v-2acc84b4"]])}};var zn=t(412),Zn={};Zn.styleTagTransform=m(),Zn.setAttributes=d(),Zn.insert=s().bind(null,"head"),Zn.domAPI=r(),Zn.insertStyleElement=f(),o()(zn.Z,Zn),zn.Z&&zn.Z.locals&&zn.Z.locals;const Tn={name:"App",components:{TabsContainer:Z,ContentContainer:(0,z.Z)(Sn,[["render",function(n,e,t,a,o,i){var r=(0,_.up)("home"),c=(0,_.up)("portfolio"),s=(0,_.up)("cv"),l=(0,_.up)("contacts");return(0,_.wg)(),(0,_.iD)("div",T,[(0,_.Wm)(r),(0,_.Wm)(c),(0,_.Wm)(s),(0,_.Wm)(l)])}]])}};var Cn=t(456),En={};En.styleTagTransform=m(),En.setAttributes=d(),En.insert=s().bind(null,"head"),En.domAPI=r(),En.insertStyleElement=f(),o()(Cn.Z,En),Cn.Z&&Cn.Z.locals&&Cn.Z.locals;const Hn=(0,z.Z)(Tn,[["render",function(n,e,t,a,o,i){var r=(0,_.up)("tabs-container"),c=(0,_.up)("content-container");return(0,_.wg)(),(0,_.iD)("div",h,[(0,_.Wm)(r),(0,_.Wm)(c)])}],["__scopeId","data-v-dea69fe6"]]);var Dn;document.body.appendChild(((Dn=document.createElement("div")).classList.add("app-root"),Dn)),(0,b.ri)(Hn).mount(".app-root")},456:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.sub-root[data-v-dea69fe6] {\n  display: flex;\n  flex-direction: column;\n  background-color: #0e76a8;\n}\n",""]);const c=r},906:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.contacts[data-v-2acc84b4] {\n  flex-direction: column;\n  align-items: center;\n}\n.contacts_title[data-v-2acc84b4] {\n  color: #0e76a8;\n  font-weight: 600;\n  padding: 10px;\n  font-size: 21px;\n}\n.contacts_link[data-v-2acc84b4] {\n  color: black;\n  text-decoration: none;\n  font-size: 18px;\n}\n.cv_section_icons_icon[data-v-2acc84b4] {\n  display: block;\n  width: 68px;\n  height: 48px;\n  margin: 5px;\n  border: 1px solid #d3d3d3;\n  border-radius: 10px;\n}\n.selected-content[data-v-2acc84b4] {\n  display: flex;\n}\n",""]);const c=r},412:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.content-container_page {\n  display: none;\n  padding: 130px;\n  background-color: white;\n}\n@media screen and (max-width: 600px) {\n.content-container_page {\n    padding: 130px 5px;\n}\n}\n",""]);const c=r},764:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.cv[data-v-5750e68e] {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.cv-download-container[data-v-5750e68e] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.cv_download[data-v-5750e68e] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: #0e76a8;\n  text-decoration: none;\n}\n.cv_download[data-v-5750e68e]:hover {\n  opacity: 0.7;\n}\n.cv_download_text[data-v-5750e68e] {\n  padding: 5px;\n  color: white;\n  font-weight: 600;\n}\n.cv_download_flag[data-v-5750e68e] {\n  width: 35px;\n  height: auto;\n  padding: 5px;\n}\n.cv_section[data-v-5750e68e] {\n  padding: 20px 0;\n}\n.cv_section_icons[data-v-5750e68e] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.cv_section_icons_icon[data-v-5750e68e] {\n  display: block;\n  width: 68px;\n  height: 48px;\n  margin: 5px;\n  border: 1px solid #d3d3d3;\n  border-radius: 10px;\n}\n.cv_title[data-v-5750e68e] {\n  padding: 10px;\n  color: #0e76a8;\n  font-weight: 600;\n  font-size: 21px;\n}\n.cv_list-container[data-v-5750e68e] {\n  padding: 0;\n  list-style-type: none;\n}\n.cv_list-container_items[data-v-5750e68e] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.selected-content[data-v-5750e68e] {\n  display: flex;\n}\n",""]);const c=r},823:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.home[data-v-46efa64f] {\n  padding: 0 130px 130px 130px;\n}\n.content-container_page-home[data-v-46efa64f] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n.presentation[data-v-46efa64f] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  width: 300px;\n  height: 400px;\n}\n.presentation_hello[data-v-46efa64f] {\n  position: absolute;\n  top: 130px;\n  left: calc(50% - 37.27px);\n}\n.presentation_name[data-v-46efa64f] {\n  position: absolute;\n  top: -60px;\n  left: calc(50% - 112.8px);\n  font-size: 35px;\n  font-weight: 600;\n  animation-name: presentation-name-46efa64f;\n  animation-duration: 2s;\n  animation-timing-function: ease-in;\n  -webkit-animation-fill-mode: forwards;\n}\n.presentation_job[data-v-46efa64f] {\n  position: absolute;\n  top: 150px;\n  left: calc(50% - 110.48px);\n  font-size: 25px;\n  animation-name: presentation-job-46efa64f;\n  animation-duration: 0.5s;\n  animation-delay: 1.6s;\n  animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n}\n.bars-container[data-v-46efa64f] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 375px;\n  margin: 130px 20px;\n}\n.bars-container-bar[data-v-46efa64f] {\n  position: relative;\n  width: 20px;\n  height: 215px;\n  margin: 5px;\n  border: 1px solid #0e76a8;\n  border-radius: 2px;\n  animation-duration: 8s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease;\n}\n.blue-bar[data-v-46efa64f] {\n  background-color: #0e76a8;\n  animation-name: blue-bar-animation-46efa64f;\n}\n.white-bar[data-v-46efa64f] {\n  animation-name: white-bar-animation-46efa64f;\n}\n.selected-content[data-v-46efa64f] {\n  display: flex;\n}\n@keyframes blue-bar-animation-46efa64f {\n0% {\n    background-color: #0e76a8;\n    top: 0;\n}\n50% {\n    background-color: white;\n    top: 150px;\n}\n100% {\n    background-color: #0e76a8;\n    top: 0;\n}\n}\n@keyframes white-bar-animation-46efa64f {\n0% {\n    background-color: white;\n    top: 150px;\n}\n50% {\n    background-color: #0e76a8;\n    top: 0;\n}\n100% {\n    background-color: white;\n    top: 150px;\n}\n}\n@keyframes presentation-name-46efa64f {\n0% {\n    color: white;\n    top: -60px;\n}\n10% {\n    color: #0e76a8;\n    transform: rotate(-5deg);\n}\n90% {\n    color: #0e76a8;\n    transform: rotate(10deg);\n}\n100% {\n    color: #0e76a8;\n    top: 150px;\n}\n}\n@keyframes presentation-job-46efa64f {\nfrom {\n    top: 150px;\n}\nto {\n    top: 200px;\n}\n}\n@media screen and (max-width: 750px) {\n.home[data-v-46efa64f] {\n    padding: 0 0 130px 0;\n}\n.content-container_page-home[data-v-46efa64f] {\n    flex-direction: column;\n    align-items: center;\n}\n.presentation[data-v-46efa64f] {\n    height: 300px;\n}\n.bars-container[data-v-46efa64f] {\n    margin: 20px;\n}\n}\n@media screen and (max-width: 300px) {\n.presentation[data-v-46efa64f] {\n    width: 280px;\n}\n}\n",""]);const c=r},141:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.portfolio-container[data-v-47e255ce] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.portfolio-container_project-container[data-v-47e255ce] {\n  background-color: transparent;\n  width: 302px;\n  height: 350px;\n  margin: 10px;\n  border: 1px solid #d3d3d3;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\n  perspective: 1000px;\n}\n.portfolio-container_project-container_inner[data-v-47e255ce] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n.portfolio-container_project-container_inner_front[data-v-47e255ce],\n.portfolio-container_project-container_inner_back[data-v-47e255ce] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden; /* Safari */\n  backface-visibility: hidden;\n}\n.portfolio-container_project-container:hover\n  .portfolio-container_project-container_inner[data-v-47e255ce] {\n  transform: rotateY(180deg);\n}\n.portfolio-container_project-container_inner_front[data-v-47e255ce] {\n  background-color: white;\n  color: black;\n}\n\n/* Style the back side */\n.portfolio-container_project-container_inner_back[data-v-47e255ce] {\n  padding: 20px;\n  background-color: #0e76a8;\n  color: white;\n  transform: rotateY(180deg);\n}\n.portfolio-container_project-container_inner_back_title[data-v-47e255ce] {\n  margin: 0 0 5px 0;\n}\n.portfolio-container_project-container_inner_back_tools[data-v-47e255ce] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.portfolio-container_project-container_project-name[data-v-47e255ce] {\n  color: #0e76a8;\n  font-weight: 600;\n  padding: 10px;\n  font-size: 21px;\n}\n.portfolio-container_project-container_project-img[data-v-47e255ce] {\n  width: 300px;\n  height: 300px;\n}\n.portfolio-container_project-container_inner_back_project-link[data-v-47e255ce] {\n  padding: 10px 0;\n  color: #0e76a8;\n  text-decoration: none;\n}\n.portfolio-container_project-container_inner_back_project-link[data-v-47e255ce]:hover {\n  text-decoration: underline;\n}\n.selected-content[data-v-47e255ce] {\n  display: flex;\n}\n@media screen and (max-width: 600px) {\n.portfolio-container_project-container[data-v-47e255ce]{\n    width: 202px;\n    height: 250px;\n}\n.portfolio-container_project-container_project-img[data-v-47e255ce] {\n    width: 200px;\n    height: 200px;\n}\n}\n",""]);const c=r},881:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"\n.tabs-container[data-v-838989de] {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  position: relative;\n  width: 100%;\n  height: 100px;\n  padding: 10px 10px 0 10px;\n}\n.tabs-container[data-v-838989de]::-webkit-scrollbar {\n  display: none;\n}\n.tabs-container[data-v-838989de] {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.tab-container[data-v-838989de] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 5px 0 5px;\n}\n.tab-container_tab-title[data-v-838989de] {\n  width: 100px;\n  padding: 5px;\n  margin-top: auto;\n  border-width: 1px 1px 0 1px;\n  border-radius: 10px 10px 0 0;\n  text-align: center;\n  background-color: #787878;\n  font-weight: 600;\n  opacity: 0.7;\n  cursor: pointer;\n}\n.tab-container_tab-title[data-v-838989de]:not(.selected-tab):hover {\n  opacity: 0.6;\n}\n.selected-tab[data-v-838989de] {\n  background-color: white;\n  opacity: 1;\n}\n@media screen and (max-width: 600px) {\n.tabs-container[data-v-838989de] {\n    justify-content: flex-start;\n    overflow-x: auto;\n}\n}\n",""]);const c=r},890:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.app-root {\n  display: flex;\n  flex-direction: column;\n}\n\n",""]);const c=r},473:(n,e,t)=>{var a={"./e-commerce.png":365,"./email-layout.png":192,"./fr-flag.png":404,"./ita-flag.png":177,"./social.png":429,"./square-task.png":549,"./streaming.png":238,"./tooltip.png":572,"./uk-flag.png":914};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=i,n.exports=o,o.id=473},365:(n,e,t)=>{"use strict";n.exports=t.p+"c227e504da0e2f418bf2.png"},192:(n,e,t)=>{"use strict";n.exports=t.p+"92f77ecf40aaa2b0e65a.png"},404:(n,e,t)=>{"use strict";n.exports=t.p+"d435854f9a61ab21857c.png"},177:(n,e,t)=>{"use strict";n.exports=t.p+"4c86bd86c3793bac17b3.png"},429:(n,e,t)=>{"use strict";n.exports=t.p+"067daae8642df735ce2a.png"},549:(n,e,t)=>{"use strict";n.exports=t.p+"4edda9f8822963e9564e.png"},238:(n,e,t)=>{"use strict";n.exports=t.p+"6a205dfdeaaf4fb662de.png"},572:(n,e,t)=>{"use strict";n.exports=t.p+"3ad76efe76fc1031b854.png"},914:(n,e,t)=>{"use strict";n.exports=t.p+"7ac26c3e2f8e22083791.png"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,n=[],a.O=(e,t,o,i)=>{if(!t){var r=1/0;for(d=0;d<n.length;d++){for(var[t,o,i]=n[d],c=!0,s=0;s<t.length;s++)(!1&i||r>=i)&&Object.keys(a.O).every((n=>a.O[n](t[s])))?t.splice(s--,1):(c=!1,i<r&&(r=i));if(c){n.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[t,o,i]},a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),(()=>{var n={179:0};a.O.j=e=>0===n[e];var e=(e,t)=>{var o,i,[r,c,s]=t,l=0;if(r.some((e=>0!==n[e]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var d=s(a)}for(e&&e(t);l<r.length;l++)i=r[l],a.o(n,i)&&n[i]&&n[i][0](),n[r[l]]=0;return a.O(d)},t=self.webpackChunkportfolio=self.webpackChunkportfolio||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var o=a.O(void 0,[812],(()=>a(338)));o=a.O(o)})();