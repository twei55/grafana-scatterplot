/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/data","@grafana/ui"],(function(e,t,n,a,l){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=l},function(e,t,n){"use strict";n.r(t);var a=n(3);function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,l,r=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return o}function r(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var o,i,s,c,u,d,f,m,g=n(0),p=n.n(g),b=n(2),h=n(4),v=n(1),x=function(e,t,n){var a;return a="bottom"===e?v.axisBottom(t):v.axisLeft(t),"logarithmic"===n&&(a=a.ticks(10,"~s")),a},y=function(e){var t=[];switch(e){case"plasma":t=["#0d0887","#5302a3","#8b0aa5","#b83289","#db5c68","#f48849","#febd2a","#f0f921"];break;case"turbo":t=["#23171b","#4076f5","#26d0cd","#5ffc73","#cbe839","#ff9b21","#d6390f","#900c00"];break;case"warm":t=["#6e40aa","#a83cb3","#df40a1","#ff507a","#ff704e","#f89b31","#d2c934","#aff05b"];break;case"spectral":t=["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]}return t},w=function(e,t){return 0===e&&"logarithmic"===t?1e-6:e},O=function(e){return"linear"===e?v.scaleLinear:v.scaleLog},M=function(e,t){return"logarithmic"===e&&v.min(t)<0},j=Object(h.stylesFactory)((function(){return{wrapper:Object(b.css)(o||(o=r(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(b.css)(i||(i=r(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),legend:Object(b.css)(s||(s=r(["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "],["\n      height: 80%;\n      position: absolute;\n      right: 20px;\n      width: 12px;\n    "]))),legendLabel:Object(b.css)(c||(c=r(["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "],["\n      writing-mode: tb-rl;\n      transform: rotate(-180deg);\n      position: absolute;\n      left: 12px;\n      font-size: 0.8em;\n      height: 100%;\n    "]))),legendLabelFrom:Object(b.css)(u||(u=r(["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: start;\n      height: 100%;\n    "]))),legendLabelTo:Object(b.css)(d||(d=r(["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "],["\n      position: absolute;\n      text-align: end;\n      height: 100%;\n    "]))),btnModalClose:Object(b.css)(f||(f=r(["\n      margin-top: 20px;\n    "],["\n      margin-top: 20px;\n    "])))}})),E=function(e){var t=[],n=[];return e.forEach((function(e){var l=e.fields.find((function(e){return e.type===a.FieldType.number})),r=e.fields.find((function(e){return e.type===a.FieldType.time}));l&&r&&(t.push(l.values.toArray()),n.push(r.values.toArray()))})),[t,n]};n.d(t,"plugin",(function(){return L}));var L=new a.PanelPlugin((function(e){var t,n,a=e.options,o=e.data,i=e.width,s=e.height,c=j(),u=a.circleRadius,d=[];t=l(E(o.series),2),d=t[0],n=t[1];var f,L=50,S=30,P=50,N=i-(L+30),R=s-(S+P),k=d.length>1?v.min(d[0]):0,Y=d.length>1?v.max(d[0]):100,X=O(a.scaleModeX)().domain([w(k,a.scaleModeX),Y]).range([0,N]).clamp(!0).nice(),T=x("bottom",X,a.scaleModeX),C=d.length>1?v.min(d[1]):0,_=d.length>1?v.max(d[1]):100,F=O(a.scaleModeY)().domain([w(C,a.scaleModeY),_]).range([R,0]).clamp(!0),V=x("left",F,a.scaleModeY),A=n.length>1?v.min(n[0]):0,B=n.length>1?v.max(n[0]):100,H=v.scaleQuantize().range(y(a.colorRange)).domain([A,B]),z={background:"linear-gradient(to top,"+y(a.colorRange).join(",")+")"},D=M(a.scaleModeX,d[0])||M(a.scaleModeY,d[1]),Q=l(Object(g.useState)(D),2),W=Q[0],q=Q[1],G=function(){q(!1)};return p.a.createElement("div",{className:Object(b.cx)(c.wrapper,Object(b.css)(m||(m=r(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),i,s))},p.a.createElement(h.Modal,{className:"modal",title:"System Message",isOpen:W,onDismiss:G},"One of your time series contains negative values and can't be displayed on a logarithmic scale. Please select a linear scale.",p.a.createElement("div",null,p.a.createElement(h.Button,{className:c.btnModalClose,variant:"primary",onClick:G},"Close"))),p.a.createElement("svg",{className:c.svg,width:i,height:s,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+i+" "+s},p.a.createElement("g",{transform:"translate("+L+", "+S+")"},p.a.createElement("g",null,(f=n,d.length>1&&f.length>1?d[0].map((function(e,t){return p.a.createElement("circle",{key:"circle-"+t,transform:"translate("+X(e)+", "+F(d[1][t])+")",style:{fill:""+H(n[0][t])},"data-values":e+", "+d[1][t],r:u},p.a.createElement("title",null,"X: ",""+e,", Y: ",""+d[1][t]))})):p.a.createElement("text",{transform:"translate("+(N/2-20)+", "+(R/2-20)+")"},"No data"))),p.a.createElement("g",{transform:"translate(0, "+R+")",ref:function(e){v.select(e).call(T)}}),p.a.createElement("text",{className:"axisLabel",transform:"translate("+N/2+", "+(R+P-10)+")"},o.series.length>1?o.series[0].name:""),p.a.createElement("g",{ref:function(e){v.select(e).call(V)}}),p.a.createElement("text",{className:"axisLabel",transform:"rotate(-90), translate("+-R/2+", "+-(L-10)+")"},o.series.length>1?o.series[1].name:""))),a.showLegend?p.a.createElement("div",{className:c.legend,style:z},p.a.createElement("div",{className:c.legendLabel},p.a.createElement("div",{className:c.legendLabelFrom},o.timeRange.from.format("Y-M-D HH:mm:ss")),p.a.createElement("div",{className:c.legendLabelTo},o.timeRange.to.format("Y-M-D HH:mm:ss")))):p.a.createElement("div",null))})).setPanelOptions((function(e){return e.addSelect({path:"colorRange",defaultValue:"warm",name:"Color Range",settings:{options:[{value:"plasma",label:"Plasma"},{value:"spectral",label:"Spectral"},{value:"turbo",label:"Turbo"},{value:"warm",label:"Warm"}]}}).addSelect({path:"circleRadius",defaultValue:"1",name:"Circle Radius",settings:{options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]}}).addRadio({path:"scaleModeX",defaultValue:"linear",name:"X-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addRadio({path:"scaleModeY",defaultValue:"linear",name:"Y-Axis: Scale Mode",settings:{options:[{value:"linear",label:"Linear"},{value:"logarithmic",label:"Logarithmic"}]}}).addBooleanSwitch({path:"showLegend",defaultValue:!0,name:"Show Legend"})}))}])}));
//# sourceMappingURL=module.js.map