import{c as u}from"./chunk-LZABV6DF.js";import"./chunk-IO2JD2WI.js";import"./chunk-2MEGTBP5.js";import{a as f}from"./chunk-6BK5IX6N.js";import{b as v}from"./chunk-2ZDM7KQR.js";import{a as x,b as g}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as h,Hc as d,Pc as l,Vb as o,hc as t,ic as a,jc as n,yb as m}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var b=(()=>{class s{chartOptions;chartOptions1;chartOptions2;constructor(){this.chartOptions={series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],chart:{height:350,type:"scatter",zoom:{enabled:!0,type:"xy"}},xaxis:{tickAmount:10,labels:{formatter:function(i){return parseFloat(i).toFixed(1)}}},yaxis:{tickAmount:7}},this.chartOptions1={series:[{name:"TEAM 1",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"TEAM 2",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"TEAM 3",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})},{name:"TEAM 4",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:60})},{name:"TEAM 5",data:this.generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})}],chart:{height:350,type:"scatter",zoom:{type:"xy"}},dataLabels:{enabled:!1},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"datetime"},yaxis:{max:70}},this.chartOptions2={series:[{name:"Messenger",data:[[16.4,5.4],[21.7,4],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7],[10.9,8.2],[16.4,4],[13.6,4.3],[13.6,12],[29.9,3],[10.9,5.2],[16.4,6.5],[10.9,8],[24.5,7.1],[10.9,7],[8.1,4.7],[19,10],[27.1,10],[24.5,8],[27.1,3],[29.9,11.5],[27.1,.8],[22.1,2]]},{name:"Instagram",data:[[6.4,5.4],[11.7,4],[15.4,3],[9,2],[10.9,11],[20.9,7],[12.9,8.2],[6.4,14],[11.6,12]]}],chart:{height:350,type:"scatter",animations:{enabled:!1},zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4D72AA","#9DD6FF"],xaxis:{tickAmount:10,min:0,max:40,labels:{rotate:0,trim:!1}},yaxis:{tickAmount:7},markers:{size:20},fill:{type:"image",opacity:1,image:{src:["./assets/images/faces/2.jpg","./assets/images/faces/5.jpg"],width:40,height:40}},legend:{show:!0}}}generateDayWiseTimeSeries(i,r,e){for(var c=0,p=[];c<r;){var y=Math.floor(Math.random()*(e.max-e.min+1))+e.min;p.push([i,y]),i+=864e5,c++}return p}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=h({type:s,selectors:[["app-scatter-charts"]],standalone:!0,features:[l],decls:26,vars:3,consts:[["title","Scatter Charts","title1","Apex Charts","activeTitle","Scatter Charts"],[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","scatter-basic"],[3,"chartOptions"],["id","scatter-datetime"],["id","scatter-image"]],template:function(r,e){r&1&&(n(0,"app-page-header",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),d(6,"Basic Scatter Chart"),a()(),t(7,"div",6)(8,"div",7),n(9,"app-apex-chart",8),a()()()(),t(10,"div",2)(11,"div",3)(12,"div",4)(13,"div",5),d(14,"Datetime Scatter Chart"),a()(),t(15,"div",6)(16,"div",9),n(17,"app-apex-chart",8),a()()()(),t(18,"div",2)(19,"div",3)(20,"div",4)(21,"div",5),d(22,"Image Fill Scatter Chart"),a()(),t(23,"div",6)(24,"div",10),n(25,"app-apex-chart",8),a()()()()()),r&2&&(m(9),o("chartOptions",e.chartOptions),m(8),o("chartOptions",e.chartOptions1),m(8),o("chartOptions",e.chartOptions2))},dependencies:[u,g,x,v,f]})}return s})();export{b as ScatterChartsComponent};
