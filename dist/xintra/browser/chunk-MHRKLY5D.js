import{a as y}from"./chunk-WCBSUTTC.js";import{a as w}from"./chunk-5YCAR6ZG.js";import{a as F}from"./chunk-XZRHDCBB.js";import"./chunk-HX3ESI56.js";import{a as C}from"./chunk-S64CES6D.js";import"./chunk-W2TXPC45.js";import{b as S}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import{A as b}from"./chunk-LWEV5N6L.js";import{k as h}from"./chunk-6SH7557L.js";import{Ba as p,Eb as u,Hc as n,Pc as v,Qc as g,Vb as d,hc as r,ic as e,jc as s,tc as f,yb as m,zb as o}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var E=()=>({}),j=(()=>{class a{router;formBuilder;renderer;toastr;prismCode=y;constructor(l,t,i,c){this.router=l,this.formBuilder=t,this.renderer=i,this.toastr=c}ngOnInit(){}cityOptions=[{label:"Buscar",value:""},{label:"Asistencia Vial",value:"London"},{label:"Salud",value:"Manchester"},{label:"Animales",value:"Liverpool"},{label:"Otros",value:"Liverpool"}];handleSelectChange(l){}newFunForm;error="";get form(){return this.newFunForm.controls}Submit(){console.log("llego al formulario"),console.log(this.newFunForm),this.router.navigate(["/apps/gestion/funcionalidades"]),this.toastr.success("Registro exitoso","GoCast Admin",{timeOut:3e3,positionClass:"toast-top-right"})}static \u0275fac=function(t){return new(t||a)(o(h),o(b),o(u),o(F))};static \u0275cmp=p({type:a,selectors:[["new-seguro"]],standalone:!0,features:[v],decls:24,vars:11,consts:[[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[1,"row","g-3"],[1,"col-md-3"],["for","validationDefault01",1,"form-label"],["type","number","id","validationDefault01","required","","formControlName","name",1,"form-control"],["type","number","placeholder","Registro de informaci\xF3n fiscal","required","","formControlName","name",1,"form-control"],[1,"col-md-6"],[3,"change","options","selectClass","clearable","multiple","hideSelected","searchable","placeholder","additionalProperties"],[1,"col-12"],[1,""],["href","/apps/seguros/seguros",1,"btn","btn-primary","btn-wave"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"app-showcode-card",2)(3,"form",3)(4,"div",0)(5,"div",4)(6,"label",5),n(7,"Nombre de compa\xF1ia"),e(),s(8,"input",6),e(),r(9,"div",4)(10,"label",5),n(11,"R.I.F"),e(),s(12,"input",7),e(),r(13,"div",8)(14,"label",5),n(15,"Servicios que presta"),e(),r(16,"app-spk-ng-select",9),f("change",function(_){return i.handleSelectChange(_)}),e()()(),s(17,"br")(18,"br")(19,"br"),r(20,"div",10)(21,"div",11)(22,"a",12),n(23,"Enviar"),e()()()()()()()),t&2&&(m(2),d("title"," Crear compa\xF1ia de seguros")("prism",i.prismCode.validationTS1),m(14),d("options",i.cityOptions)("selectClass","rounded-sm")("clearable",!0)("multiple",!0)("hideSelected",!0)("searchable",!0)("placeholder","Buscar servicio")("additionalProperties",g(10,E)))},dependencies:[S,w,C]})}return a})();export{j as SegurosNewComponent};
