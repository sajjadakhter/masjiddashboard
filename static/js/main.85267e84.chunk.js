(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(a,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(1),n=t(0),m=t(29),i=t.n(m),s=t(2),c=t.n(s),l=(t(7),function(a,e,t,m){var s=Object(n.useState)({}),l=Object(r.a)(s,2),u=l[0],h=l[1],o=Object(n.useState)({}),d=Object(r.a)(o,2),j=d[0],f=d[1],E=Object(n.useState)({}),b=Object(r.a)(E,2),O=b[0],_=b[1],q=Object(n.useState)({}),v=Object(r.a)(q,2),N=v[0],g=v[1],y=Object(n.useState)({}),p=Object(r.a)(y,2),w=p[0],S=p[1],M=Object(n.useState)({}),I=Object(r.a)(M,2),T=I[0],k=I[1],z=Object(n.useState)({}),A=Object(r.a)(z,2),D=A[0],J=A[1],W=Object(n.useState)([]),x=Object(r.a)(W,2),F=x[0],R=x[1],Y=Object(n.useState)({}),B=Object(r.a)(Y,2),C=B[0],H=B[1],Q=function(r){var n=r+t+":"+e+":"+a;return c()(n,"hh:mm a YYYY:M:D")};return Object(n.useEffect)(function(){var r="http://ummahsoft.org/salahtime/api/masjidi/v1/index.php/masjids/"+m+"/iqamahandprayertimes/"+t+"/"+e;i.a.get(r).then(function(e){console.log(e),console.log(e.data.iqamaTimes);var t=e.data.masjidInfo,r=e.data.prayerTimes[a-1];H({name:t.title,shortname:JSON.parse(t.masjid_preferences).short_name}),h({start:Q(r.fajr_start_time),iqamah:Q(t.fajr_iqama_time)}),f(Q(r.shuruq)),_({start:Q(r.zuhr_start_time),iqamah:Q(t.zuhr_iqama_time)}),g({start:Q(r.asr_start_time),iqamah:Q(t.asr_iqama_time)}),S({start:Q(r.magrib_start_time),iqamah:Q(r.magrib_start_time)}),k({start:Q(r.isha_start_time),iqamah:Q(t.isha_iqama_time)}),J({month:parseInt(r.hijri_month),day:parseInt(r.hijri_day),year:1440,date:r.hijri_date}),R([{name:"Fajar",start:Q(r.fajr_start_time),end:Q(r.shuruq),iqamah:Q(t.fajr_iqama_time),current:!1},{name:"Shuruq",start:Q(r.shuruq)},{name:"Zuhar",start:Q(r.zuhr_start_time),end:Q(r.asr_start_time),iqamah:Q(t.zuhr_iqama_time),current:!1},{name:"Asar",start:Q(r.asr_start_time),end:Q(r.magrib_start_time),iqamah:Q(t.asr_iqama_time),current:!1},{name:"Magrib",start:Q(r.magrib_start_time),end:Q(r.isha_start_time),iqamah:Q(r.magrib_start_time),current:!1},{name:"Isha",start:Q(r.isha_start_time),end:Q(r.fajr_start_time),iqamah:Q(t.isha_iqama_time),current:!1},{name:"Friday",start:Q(r.zuhr_start_time),end:Q(r.asr_start_time),iqamah:Q(t.jumma1_iqama),current:!1}])}).catch(function(a){console.log(a)})},[a,m,e,t]),[u,O,N,w,T,j,D,F,C]})},14:function(a,e,t){"use strict";var r=t(0),n=t.n(r),m=t(2),i=t.n(m);e.a=function(a){a.tick;var e=i()();return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"time"},n.a.createElement("div",null,e.format(" h:mm ")),n.a.createElement("div",{className:"ampm"},e.format(" ss a")))))}},15:function(a,e,t){"use strict";var r=t(2),n=t.n(r),m=t(0),i=t.n(m);e.a=function(a){var e=a.salahName,t=a.salahtime,r=a.salahMsg;return i.a.createElement("div",{className:"next-salah"},i.a.createElement("div",{className:"title"}," ",e," ",r," in"),i.a.createElement("div",{className:"time"},"  ",n.a.duration(n()(t).diff(n()())).format(", h [hours], m [minutes]",{trim:!0})))}},16:function(a,e,t){"use strict";t.d(e,"a",function(){return m});var r=t(1),n=t(0),m=function(a,e,t,m,i,s,c,l,u,h){var o=Object(n.useState)(""),d=Object(r.a)(o,2),j=d[0],f=d[1],E=Object(n.useState)("Fajar"),b=Object(r.a)(E,2),O=b[0],_=b[1],q=Object(n.useState)(""),v=Object(r.a)(q,2),N=v[0],g=v[1],y=Object(n.useState)([]),p=Object(r.a)(y,2),w=p[0],S=p[1],M=function(a){l<a.start?(g("starts"),f(a.start)):l<a.iqamah&&(g("iqamah"),f(a.iqamah))};return Object(n.useEffect)(function(){h.forEach(function(a){return a.current=!1});var a=0;for(a=0;a<h.length;a++){var e=h[a];if(l<e.start&&"Shuruq"!==e.name){_(e.name),e.current=!0,M(e);break}}h.length>0&&a>=h.length&&(_("Fajar"),M(c),h[0].current=!0),h.length>6&&(h[5].end=c.start),S(h)},[a,t,m,i,s,e,u]),[O,j,N,w]}},17:function(a,e,t){"use strict";var r=t(1),n=t(0),m=t(2),i=t.n(m);e.a=function(a){var e=Object(n.useState)(i()()),t=Object(r.a)(e,2),m=t[0],s=t[1],c=Object(n.useState)(0),l=Object(r.a)(c,2),u=l[0],h=l[1],o=Object(n.useState)(0),d=Object(r.a)(o,2),j=d[0],f=d[1],E=Object(n.useState)(0),b=Object(r.a)(E,2),O=b[0],_=b[1];return Object(n.useEffect)(function(){var a=setInterval(function(){return function(){var a=new Date;s(i()()),h(a.getHours()),f(a.getMinutes()),_(a.getSeconds())}()},1e3);return function(){clearInterval(a)}},[]),[m,u,j,O]}},18:function(a,e,t){"use strict";var r=t(0),n=t.n(r),m=t(31),i=t.n(m);var s=function(a){var e=a.day,t=a.month;a.year;return void 0===e?null:n.a.createElement("div",null,function(a,e,t){var r=new Array("Muharram","Safar","Rabi-al Awwal","Rabi-al Thani","Jumada al-Ula","Jumada al-Thani","Rajab","Sha'ban","Ramadhan","Shawwal","Dhul Qa'dah","Dhul Hijjah");return i()(a)+" "+r[e-1]}(e,t))},c=t(2),l=t.n(c);e.a=function(a){a.tick;var e=a.hijri,t=l()();return n.a.createElement("div",null,n.a.createElement("div",{className:"date"},t.format("dddd, MMMM Do")),n.a.createElement("div",{className:"date-hijri"},n.a.createElement(s,{day:e.day,month:e.month,year:e.year})))}},32:function(a,e,t){a.exports=t(64)},39:function(a,e,t){},40:function(a,e,t){},61:function(a,e,t){},63:function(a,e,t){},64:function(a,e,t){"use strict";t.r(e);t(33);var r=t(0),n=t.n(r),m=t(28),i=t.n(m),s=(t(39),t(40),function(){return window.innerWidth>=1920?t(65).default():window.innerWidth>=1080?t(66).default():n.a.createElement("h1",null,"Current screen width ",window.innerWidth," is not currently supported Only supported with are 1920 and 1080")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},65:function(a,e,t){"use strict";t.r(e);var r=t(1),n=t(0),m=t.n(n),i=t(69),s=t(67),c=t(68),l=t(11),u=t(2),h=t.n(u),o=(t(61),t(6)),d=t.n(o),j=function(a){a.fajar,a.shuruq,a.zuhar,a.asar,a.magrib,a.isha,a.friday;var e=a.className,t=a.showIqamaTitle,r=a.salahTimes;return m.a.createElement(s.a,{className:e},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:10},m.a.createElement(s.a,{className:"iqama"},t&&m.a.createElement(c.a,null,m.a.createElement(s.a,null,"Iqama")),r.map(function(a){return m.a.createElement(c.a,null,m.a.createElement("div",{className:"title"},a.name),m.a.createElement(d.a,{className:a.current?"current":"",format:"h:mm"},"Shuruq"===a.name?a.start:a.iqamah),"Shuruq"!==a.name&&m.a.createElement("div",{className:"info"},m.a.createElement(d.a,{format:"h:mm"},a.start),"-",m.a.createElement(d.a,{format:"h:mm"},a.end)))}))),m.a.createElement(c.a,{sm:1}))},f=t(14),E=t(15),b=t(16),O=t(18),_=t(17),q=t(7);e.default=function(){var a=Object(_.a)(),e=Object(r.a)(a,4),t=e[0],n=(e[1],e[2],e[3]),u=h()(),o=h()().add(1,"days"),d=Object(q.b)({masjidid:q.a}),v=Object(r.a)(d,2),N=v[0],g=(v[1],Object(l.a)(u.date(),u.month()+1,u.year(),N.masjidid)),y=Object(r.a)(g,9),p=y[0],w=y[1],S=y[2],M=y[3],I=y[4],T=y[5],k=y[6],z=y[7],A=y[8],D=Object(l.a)(o.date(),o.month()+1,o.year(),N.masjidid),J=Object(r.a)(D,8),W=J[0],x=(J[1],J[2],J[3],J[4],J[5],J[6],J[7],Object(b.a)(p,T,w,S,M,I,W,u,t,z)),F=Object(r.a)(x,4),R=F[0],Y=F[1],B=F[2],C=F[3];return m.a.createElement("div",{className:"App"},m.a.createElement(i.a,{fluid:!0},m.a.createElement(s.a,null,m.a.createElement(c.a,{className:"masjid-name"},A.name," ",A.shortname)),m.a.createElement(s.a,{className:"toprow"},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:4},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:10},m.a.createElement(O.a,{time:n,hijri:k}),m.a.createElement(E.a,{salahName:R,salahMsg:B,salahtime:Y})),m.a.createElement(c.a,{sm:1})),m.a.createElement(c.a,{sm:2}),m.a.createElement(c.a,{sm:4,className:"timecontainer"},m.a.createElement(f.a,{tick:n})),m.a.createElement(c.a,{sm:1})),m.a.createElement(j,{className:"today",salahTimes:C,fajar:p.iqamah,shuruq:T,zuhar:w.iqamah,asar:S.iqamah,magrib:M.iqamah,isha:I.iqamah,friday:w.iqamah})))}},66:function(a,e,t){"use strict";t.r(e);var r=t(1),n=t(0),m=t.n(n),i=t(69),s=t(67),c=t(68),l=t(11),u=t(2),h=t.n(u),o=(t(63),t(6)),d=t.n(o),j=function(a){a.fajar,a.shuruq,a.zuhar,a.asar,a.magrib,a.isha,a.friday;var e=a.className,t=(a.showIqamaTitle,a.salahTimes);return m.a.createElement(s.a,{className:e},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:10},m.a.createElement(s.a,null," "),t.map(function(a){return m.a.createElement(s.a,{style:{alignContent:"center"},className:a.current?"current":""},m.a.createElement(c.a,{className:"title"},a.name),m.a.createElement(c.a,null," ","Shuruq"!==a.name&&m.a.createElement("div",{className:"info"},m.a.createElement(d.a,{format:"h:mm"},a.start),"-",m.a.createElement(d.a,{format:"h:mm"},a.end))," "),m.a.createElement(c.a,null,m.a.createElement(d.a,{format:"h:mm"},"Shuruq"===a.name?a.start:a.iqamah)))})),m.a.createElement(c.a,{sm:1}))},f=t(14),E=t(15),b=t(16),O=t(18),_=t(17),q=t(7);e.default=function(){var a=Object(_.a)(),e=Object(r.a)(a,4),t=e[0],n=(e[1],e[2],e[3]),u=h()(),o=h()().add(1,"days"),d=Object(q.b)({masjidid:q.a}),v=Object(r.a)(d,2),N=v[0],g=(v[1],Object(l.a)(u.date(),u.month()+1,u.year(),N.masjidid)),y=Object(r.a)(g,9),p=y[0],w=y[1],S=y[2],M=y[3],I=y[4],T=y[5],k=y[6],z=y[7],A=y[8],D=Object(l.a)(o.date(),o.month()+1,o.year(),N.masjidid),J=Object(r.a)(D,8),W=J[0],x=(J[1],J[2],J[3],J[4],J[5],J[6],J[7],Object(b.a)(p,T,w,S,M,I,W,u,t,z)),F=Object(r.a)(x,4),R=F[0],Y=F[1],B=F[2],C=F[3];return m.a.createElement("div",{className:"App"},m.a.createElement(i.a,{fluid:!0},m.a.createElement(s.a,null,m.a.createElement(c.a,{className:"masjid-name"},A.name," ",A.shortname)),m.a.createElement(s.a,{className:"toprow"},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:4},m.a.createElement(c.a,{sm:1}),m.a.createElement(c.a,{sm:10},m.a.createElement(E.a,{salahName:R,salahMsg:B,salahtime:Y})),m.a.createElement(c.a,{sm:1})),m.a.createElement(c.a,{sm:6,className:"timecontainer"},m.a.createElement(f.a,{tick:n}),m.a.createElement(O.a,{time:n,hijri:k})),m.a.createElement(c.a,{sm:1})),m.a.createElement(s.a,{style:{height:"100px"}}),m.a.createElement(j,{className:"today",salahTimes:C,fajar:p.iqamah,shuruq:T,zuhar:w.iqamah,asar:S.iqamah,magrib:M.iqamah,isha:I.iqamah,friday:w.iqamah})))}}},[[32,1,2]]]);
//# sourceMappingURL=main.85267e84.chunk.js.map