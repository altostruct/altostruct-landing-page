"use strict";(self.webpackChunkaltostruct_website_gatsby=self.webpackChunkaltostruct_website_gatsby||[]).push([[691],{8469:function(e,t,a){function l(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function n(e,t){var a=t.left,l=t.right,n=t.up,r=t.down,o=t.top,i=t.bottom,c=t.big,m=t.mirror,d=t.opposite,f=(a?1:0)|(l?2:0)|(o||r?4:0)|(i||n?8:0)|(m?16:0)|(d?32:0)|(e?64:0)|(c?128:0);if(u.hasOwnProperty(f))return u[f];var p=a||l||n||r||o||i,v=void 0,E=void 0;if(p){if(!m!=!(e&&d)){var g=[l,a,i,o,r,n];a=g[0],l=g[1],o=g[2],i=g[3],n=g[4],r=g[5]}var h=c?"2000px":"100%";v=a?"-"+h:l?h:"0",E=r||o?"-"+h:n||i?h:"0"}return u[f]=(0,s.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+v+", "+E+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),u[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,i=void 0===o?s.defaults.duration:o,c=e.delay,d=void 0===c?s.defaults.delay:c,u=e.count,f=void 0===u?s.defaults.count:u,p=l(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===r?i:r,delay:d,forever:a,count:f,style:{animationFillMode:"both"},reverse:p.left};return(0,m.default)(p,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,i=a(5697),c=a(403),m=(o=c)&&o.__esModule?o:{default:o},s=a(9431),d={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},u={};r.propTypes=d,t.default=r,e.exports=t.default},5391:function(e,t,a){a.r(t);var l=a(2182),n=a(6322),r=a(7294),o=a(1398),i=a(8491);t.default=function(){var e=(0,o.Z)().t;return r.createElement(r.Fragment,null,r.createElement(n.Z,{pathName:""}),r.createElement(i.Z,{mainCategory:e("CLOUD"),techonology:e("AWS"),image:r.createElement("p",null,"asd"),inDepthDescription:e("Letar ni efter Seniora AWS konsulter i Stockholm? Då har ni kommit helt rätt. Vi har arbetat med AWS ända sedan början och brinner helhjärtat för att bygga lösningar på cloud. Med våra seniora AWS konsulter får ni allting ni behöver för att ta er produkt till nästa nivå."),title:"",titleDescription:"Seniora AWS arkitekter"}),r.createElement(l.Z,null))}},8491:function(e,t,a){a.d(t,{Z:function(){return x}});a(5743);var l=a(6076),n=a(9029),r=a(7294),o=a(1496),i=a(2935),c=a.p+"static/foodfacts-4dafe589714a0b984395ed9dc8de7140.png",m=a.p+"static/nrlyze-34dcd84ce7d79445b36cf5976a8b3225.png",s=a(9731),d=a(803),u=a.n(d),f=a(1398),p=a(5444),v=a(8469),E=a.n(v),g=a(8387);var h=function(e){var t=e.mainCategory,a=e.techonology,n=void 0===globalThis.window,o=(0,f.Z)(),i=o.t,c=o.languagePrefix;return r.createElement(r.Fragment,null,r.createElement("div",{className:"h-screen",style:{height:"100vh"}},r.createElement("div",{style:{position:"fixed",width:"100vw",zIndex:0,height:"140vh"}},!n&&r.createElement(g.default,null))),r.createElement("div",{className:"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"},r.createElement("h1",{className:"md:text-8xl text-center text-6xl font-bold uppercase"},r.createElement(u(),null,r.createElement("span",{className:"text-xl md:text-3xl font-light"},i("KONSULTER I STOCKHOLM INOM"))),r.createElement("div",{className:"flex"},r.createElement("span",{className:"text-black flex m-auto gap-2"},r.createElement(u(),{delay:500},r.createElement("span",null,t),r.createElement("span",null," / "),r.createElement("span",{className:"overflow-hidden border-solid"},r.createElement(E(),{delay:700,left:!0},a)))))),r.createElement(u(),{delay:800},r.createElement("p",{className:"text-black text-center py-2 text-lg md:text-xl"},i("Konsultbolaget som älskar cloud och webben"),r.createElement("br",null))),r.createElement(u(),{delay:1e3},r.createElement("div",{className:"flex pt-2"},r.createElement("div",{className:"flex m-auto gap-2"},r.createElement(l.Z,{type:"secondary",link:c+"about",className:"p-20 "},i("Om oss")),r.createElement(l.Z,{link:"#contact",className:"p-20 "},i("Kontakta oss")))))))};function b(e){var t=e.author,a=e.cite;return r.createElement("div",null,r.createElement(u(),null,r.createElement("h3",null,'"',a,'"')),r.createElement(u(),null,r.createElement("div",{className:"mt-1"},r.createElement("cite",null,t))))}var x=function(e){var t=(0,p.useStaticQuery)("3145094253"),a=(0,f.Z)(),d=a.t,v=(a.languagePrefix,e.title,e.mainCategory,e.techonology,e.titleDescription),E=e.inDepthDescription;return e.image,globalThis.window,r.createElement("div",null,r.createElement(h,e),r.createElement("div",{style:{backgroundColor:"white",zIndex:1,position:"relative"}},r.createElement(i.Z,{bottomImage:r.createElement(o.Z,{fixed:t.cloud.childImageSharp.fixed,imgStyle:{objectFit:"contain"}}),position:"center"},r.createElement("div",{id:"info"},r.createElement("div",null,r.createElement(u(),null,r.createElement("p",{className:"text-3xl mb-3 text-orange-400"},d("Vad kan vi erbjuda dig?")),r.createElement("h1",{className:"text-6xl font-semibold"},v)),r.createElement(u(),null,r.createElement("p",{className:"py-10 text-lg"},E))))),r.createElement(i.Z,{position:"full"},r.createElement("div",{className:"text-center"},r.createElement(u(),null,r.createElement("h1",{className:"text-8xl font-semibold"},d("Några "),r.createElement("i",{className:"text-blue-400"},d("project "))))),r.createElement("div",{className:"p-0 md:p-32 pt-20"},r.createElement(s.Z,{animatedOnView:!0,cols:2,grid:[{title:d("Mobilapp"),description:d("Modern och skalbar app redo för framtiden. Byggd på AWS med React Native."),link:"https://www.foodfacts.se/",image:r.createElement("img",{src:c})},{title:"Datadriven platform",description:"Hemsida byggd med REST och Cloud. Byggd med React och Linode.",link:"https://www.foodfacts.se/",image:r.createElement("img",{src:m})}]}))),r.createElement(i.Z,{dark:!0,position:"center"},r.createElement("div",null,r.createElement(u(),null,r.createElement("h1",{className:"text-6xl font-bold mb-10"},d("Lyssna vad våra "),r.createElement("i",{className:"text-green-500"},d("grymma kunder ")),d("har att säga"))),r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"3em"}},r.createElement(b,{cite:"Med hjälp av Altostruct har vi kunnat utveckla vår lösning baserat på en svensk molnleverantör med hög grad av säkerhet, tillförlitlighet och regelefterlydnad.",author:d("Peter Vesterberg - CEO Saluto AB")}),r.createElement(b,{cite:"Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifråninfrastruktur till apputveckling för att bygga en skalbar och modern lösning.",author:d("Erik Standin Pers - Founder Foodfacts")}),r.createElement("p",{className:"text-xs"},d("* Många fler citat ifrån kunder till men det är för mycket att läsa. Vi är allvarliga, 100% av våra tidigare kunder skulle rekomendera oss.")),r.createElement("div",{className:"py-5"},r.createElement(l.Z,{link:"#contact"},d("Bli vår nästa nöjda kund")))))),r.createElement("div",{id:"contact"},r.createElement(i.Z,{position:"full"},r.createElement("div",{className:"p-4 md:p-32"},r.createElement(n.Z,null))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8b312e5b1272226c8b62.js.map