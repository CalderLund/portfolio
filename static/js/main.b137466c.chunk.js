(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(7),c=s.n(i),r=(s(12),s(2)),o=s(3),l=s(5),d=s(4),h=s(0),m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)(n.a.Fragment,{children:Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)("h1",{className:"responsive-headline",children:e.name}),Object(h.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),s}(a.Component),j=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:"images/calder.png",alt:""})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:e.aboutme}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e.name}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:e.address}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:e.website})]})]})})]})]})})}}]),s}(a.Component),u=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(h.jsx)("div",{className:"row item",children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("h3",{children:e.UniversityName}),Object(h.jsxs)("p",{className:"info",children:[e.specialization,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),e.Achievements.map((function(e){return Object(h.jsx)("li",{class:"li-class",children:e})})),Object(h.jsx)("br",{})]})})}))})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(h.jsx)("div",{className:"row item",children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("h3",{children:e.CompanyName}),Object(h.jsxs)("p",{className:"info",children:[e.specialization,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),e.Achievements.map((function(e){return Object(h.jsx)("li",{class:"li-class",children:e})})),Object(h.jsx)("br",{})]})})}))})]})]})}}]),s}(a.Component),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(e){e.preventDefault(),console.log("The link was clicked.")},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.props.resumeData;return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check out some of my projects."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:t.portfolio&&t.portfolio.map((function(t){return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:"",onClick:e.handleClick,children:[Object(h.jsx)("img",{src:"".concat(t.imgurl),className:"item-img"}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:t.name}),Object(h.jsxs)("p",{children:[t.description,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Software used: ",t.techstack]})]})})]})})})}))})]})})})}}]),s}(a.Component),p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)("div",{className:"row section-head",children:Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(h.jsx)("div",{className:"widget",children:Object(h.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),s}(a.Component),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"twelve columns",children:Object(h.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})})}))})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),g={imagebaseurl:"http://calderlund.github.io/portfolio/",name:"Calder Lund",role:"4th year Computer Scientist at the University of Waterloo",linkedinId:"Your LinkedIn Id",roleDescription:" I enjoy working on projects that challenge me. I am rarely satisfied with what I have accomplished knowing there is so much more that can always be done.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/calder-lund-874381156/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/CalderLund",className:"fa fa-github"},{name:"youtube",url:"https://www.youtube.com/user/TheBurntLemons",className:"fa fa-youtube"}],aboutme:"I am a former competitive hockey player, musician, film creator and computer scientist. I currently specialize in Infrastructure Engineering, but I have worked on a variety of projects that include machine learning, website design, software security, computer networks and much more. Outside of school, I spend most of my time playing basketball, writing music or improving my slightly above mediocre chess skills.",address:"Toronto, Canada",website:"cjlund@uwaterloo.ca",education:[{UniversityName:"University of Waterloo",specialization:"Bachelors of Computer Science",MonthOfPassing:"Expected April",YearOfPassing:"2022",Achievements:["GPA of 3.6/4.0","Minor in Combinatorics and Optimization","Business Option"]}],work:[{CompanyName:"Wish (ContextLogic Inc.)",specialization:"Infrastructure Security Engineer",MonthOfLeaving:"May 2020 - Aug 2021",YearOfLeaving:"",Achievements:["Secured AWS subnet communication across all accounts by building automated NACL tooling using HashiCorp Terraform and Python","Wrote and deployed HashiCorp Vault client management tools using Golang and Python to store secrets securely","Created authentication/authorization tools for MongoDB clients to allow for improved metrics and control over user/service access rights","Automated Kubernetes deployments using JSONNET","Built secure repository to authenticate Dex, Vault and AWS clients"]},{CompanyName:"BlackBerry Limited",specialization:"Software Security Developer",MonthOfLeaving:"Sep 2019 - Dec 2019",YearOfLeaving:"",Achievements:["Designed and implemented a patent-pending machine learning algorithm for action recognition in the automotive field","Developed production-level cybersecurity software for Android and iOS devices using C++","Built testing framework for team to allow for easy unit testing allowing for long-term sustainability of code","Found and fixed critical bugs before major release date ensuring product met product requirements","Worked in fast-paced Agile environment on scrum team"]},{CompanyName:"DaganTech (formerly AgriLogicAI)",specialization:"Machine Learning Product Developer",MonthOfLeaving:"Jan 2019 - Apr 2019",YearOfLeaving:"",Achievements:["Solved problems in agriculture using computer vision, time-series analysis and other machine learning techniques","Designed a FCN-LSTM capable of predicting a farm\u2019s crop growth allowing for easy anomaly detection","Performed data analysis using Python, Jupyter Notebooks and R"]},{CompanyName:"CIBC Capital Markets",specialization:"Software Developer",MonthOfLeaving:"May 2018 - Aug 2018",YearOfLeaving:"",Achievements:["Created hedging solutions in finance space using supervised learning and technical indicators","Prototyped and designed end to end application that provides statistical analysis tools for traders","Worked on trade-floor side-by-side with liability traders"]}],portfolio:[{name:"UWPath",description:"Web application designed to help UWaterloo students plan their courses properly, following their majors, minors and options.",techstack:"Python, Vue.js, Django, Docker, Kubernetes, Bash, AWS, CircleCi, PostgreSQL",imgurl:"images/greyImage.png",url:"https://github.com/CalderLund"},{name:"UWPath",description:"Web application designed to help UWaterloo students plan their courses properly, following their majors, minors and options.",techstack:"Python, Vue.js, Django, Docker, Kubernetes, Bash, AWS, CircleCi, PostgreSQL",imgurl:"images/greyImage.png",url:"https://github.com/UW-Path/"},{name:"UWPath",description:"Web application designed to help UWaterloo students plan their courses properly, following their majors, minors and options.",techstack:"Python, Vue.js, Django, Docker, Kubernetes, Bash, AWS, CircleCi, PostgreSQL",imgurl:"images/greyImage.png",url:"https://github.com/UW-Path/"},{name:"UWPath",description:"Web application designed to help UWaterloo students plan their courses properly, following their majors, minors and options.",techstack:"Python, Vue.js, Django, Docker, Kubernetes, Bash, AWS, CircleCi, PostgreSQL",imgurl:"images/greyImage.png",url:"https://github.com/UW-Path/"},{name:"UWPath",description:"Web application designed to help UWaterloo students plan their courses properly, following their majors, minors and options.",techstack:"Python, Vue.js, Django, Docker, Kubernetes, Bash, AWS, CircleCi, PostgreSQL",imgurl:"images/greyImage.png",url:"https://github.com/UW-Path/"}]},f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{resumeData:g}),Object(h.jsx)(j,{resumeData:g}),Object(h.jsx)(u,{resumeData:g}),Object(h.jsx)(b,{resumeData:g}),Object(h.jsx)(p,{resumeData:g}),Object(h.jsx)(O,{resumeData:g})]})}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b137466c.chunk.js.map