import{a as h}from"./chunk-6BK5IX6N.js";import"./chunk-2ZDM7KQR.js";import{a as m,b as y}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as l,Hc as d,Pc as c,Vb as p,hc as t,ic as a,jc as i,yb as s}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var f=(()=>{class r{chartOptions={series:[{name:"Primary",data:[{x:"Category 1",y:503},{x:"Category 2",y:580},{x:"Category 3",y:135}]},{name:"Primary1",data:[{x:"Category 1",y:733},{x:"Category 2",y:385},{x:"Category 3",y:715}]},{name:"Warning",data:[{x:"Category 1",y:255},{x:"Category 2",y:211},{x:"Category 3",y:441}]},{name:"Secondary",data:[{x:"Category 1",y:428},{x:"Category 2",y:749},{x:"Category 3",y:559}]}],chart:{height:350,type:"line"},plotOptions:{line:{isSlopeChart:!0}},tooltip:{followCursor:!0,intersect:!1,shared:!0},dataLabels:{background:{enabled:!0},formatter(n,e){let o=e.w.config.series[e.seriesIndex].name;return n!==null?o:""}},yaxis:{show:!0,labels:{show:!0}},xaxis:{position:"bottom"},legend:{show:!0,position:"bottom",horizontalAlign:"center"},stroke:{width:[2,3,4,2],dashArray:[0,0,5,2],curve:"smooth"},colors:["#5c67f7","#E354D4","#FFC658","#9e5cf7"]};chartOptions1={series:[{name:"Primary",data:[{x:"Jan",y:43},{x:"Feb",y:58}]},{name:"Primary1",data:[{x:"Jan",y:33},{x:"Feb",y:38}]},{name:"Warning",data:[{x:"Jan",y:55},{x:"Feb",y:21}]}],chart:{height:350,type:"line"},plotOptions:{line:{isSlopeChart:!0}},colors:["#5c67f7","#E354D4","#FFC658","#9e5cf7"]};static \u0275fac=function(e){return new(e||r)};static \u0275cmp=l({type:r,selectors:[["app-slope-charts"]],standalone:!0,features:[c],decls:18,vars:2,consts:[["title","Slope Charts","title1","Apex Charts","activeTitle","Slope Charts"],[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","basic-slope-chart"],[3,"chartOptions"],["id","multigroupchart"]],template:function(e,o){e&1&&(i(0,"app-page-header",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),d(6," Basic Slope Chart"),a()(),t(7,"div",6)(8,"div",7),i(9,"app-apex-chart",8),a()()()(),t(10,"div",2)(11,"div",3)(12,"div",4)(13,"div",5),d(14," Multi-group Slope Chart"),a()(),t(15,"div",6)(16,"div",9),i(17,"app-apex-chart",8),a()()()()()),e&2&&(s(9),p("chartOptions",o.chartOptions1),s(8),p("chartOptions",o.chartOptions))},dependencies:[y,m,h]})}return r})();export{f as SlopeChartsComponent};
