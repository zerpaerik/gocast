import{c as g}from"./chunk-LZABV6DF.js";import"./chunk-IO2JD2WI.js";import"./chunk-2MEGTBP5.js";import{a as f}from"./chunk-6BK5IX6N.js";import"./chunk-2ZDM7KQR.js";import{a as h,b as y}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as x,Hc as s,Pc as m,Vb as p,hc as o,ic as a,jc as r,yb as l}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var O=(()=>{class n{chartOptions;chartOptions1;chartOptions2;constructor(){this.chartOptions={series:[{type:"boxPlot",data:[{x:"Jan 2015",y:[54,66,69,75,88]},{x:"Jan 2016",y:[43,65,69,76,81]},{x:"Jan 2017",y:[31,39,45,51,59]},{x:"Jan 2018",y:[39,46,55,65,71]},{x:"Jan 2019",y:[29,31,35,39,44]},{x:"Jan 2020",y:[41,49,58,61,67]},{x:"Jan 2021",y:[54,59,66,71,88]}]}],plotOptions:{boxPlot:{colors:{upper:"#5c67f7",lower:"#e354d4"}}},chart:{height:350,type:"boxPlot",zoom:{enabled:!1}},colors:["#008FFB","#FEB019"],title:{text:"Basic BoxPlot Chart",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},xaxis:{type:"datetime",tooltip:{formatter:function(t){return new Date(t).getFullYear()}}},tooltip:{shared:!1,intersect:!0}},this.chartOptions1={series:[{name:"box",type:"boxPlot",data:[{x:new Date("2017-01-01").getTime(),y:[54,66,69,75,88]},{x:new Date("2018-01-01").getTime(),y:[43,65,69,76,81]},{x:new Date("2019-01-01").getTime(),y:[31,39,45,51,59]},{x:new Date("2020-01-01").getTime(),y:[39,46,55,65,71]},{x:new Date("2021-01-01").getTime(),y:[29,31,35,39,44]}]},{name:"outliers",type:"scatter",data:[{x:new Date("2017-01-01").getTime(),y:32},{x:new Date("2018-01-01").getTime(),y:25},{x:new Date("2019-01-01").getTime(),y:64},{x:new Date("2020-01-01").getTime(),y:27},{x:new Date("2020-01-01").getTime(),y:78},{x:new Date("2021-01-01").getTime(),y:15}]}],plotOptions:{boxPlot:{colors:{upper:"#5c67f7",lower:"#e354d4"}}},chart:{height:350,type:"boxPlot",zoom:{enabled:!1}},colors:["#5c67f7","#e354d4"],title:{text:"BoxPlot - Scatter Chart",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},xaxis:{type:"datetime",tooltip:{formatter:function(t){return new Date(t).getFullYear()}}},tooltip:{shared:!1,intersect:!0}},this.chartOptions2={series:[{data:[{x:"Category A",y:[54,66,69,75,88]},{x:"Category B",y:[43,65,69,76,81]},{x:"Category C",y:[31,39,45,51,59]},{x:"Category D",y:[39,46,55,65,71]},{x:"Category E",y:[29,31,35,39,44]},{x:"Category F",y:[41,49,58,61,67]},{x:"Category G",y:[54,59,66,71,88]}]}],chart:{height:350,type:"boxPlot",zoom:{enabled:!1}},title:{text:"Horizontal BoxPlot Chart",align:"left"},plotOptions:{bar:{horizontal:!0,barHeight:"50%"},boxPlot:{colors:{upper:"#e9ecef",lower:"#f8f9fa"}}},stroke:{colors:["#6c757d"]}}}generateDayWiseTimeSeries(t,i,e){for(var d=0,c=[];d<i;){var v=Math.floor(Math.random()*(e.max-e.min+1))+e.min;c.push([t,v]),t+=864e5,d++}return c}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["app-boxplot-charts"]],standalone:!0,features:[m],decls:26,vars:3,consts:[["title","Boxplot Charts","title1","Apex Charts","activeTitle","Boxplot Charts"],[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","boxplot-basic"],[3,"chartOptions"],["id","boxplot-scatter"],["id","boxplot-horizontal"]],template:function(i,e){i&1&&(r(0,"app-page-header",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"Basic Boxplot Chart"),a()(),o(7,"div",6)(8,"div",7),r(9,"app-apex-chart",8),a()()()(),o(10,"div",2)(11,"div",3)(12,"div",4)(13,"div",5),s(14,"Boxplot With Scatter Chart"),a()(),o(15,"div",6)(16,"div",9),r(17,"app-apex-chart",8),a()()()(),o(18,"div",2)(19,"div",3)(20,"div",4)(21,"div",5),s(22,"Horizontal Boxplot Chart"),a()(),o(23,"div",6)(24,"div",10),r(25,"app-apex-chart",8),a()()()()()),i&2&&(l(9),p("chartOptions",e.chartOptions),l(8),p("chartOptions",e.chartOptions1),l(8),p("chartOptions",e.chartOptions2))},dependencies:[g,y,h,f]})}return n})();export{O as BoxplotChartsComponent};
