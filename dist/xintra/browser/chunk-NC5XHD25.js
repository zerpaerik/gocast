import{l as u,o as b}from"./chunk-6SH7557L.js";import{Ba as s,Hc as n,Pc as p,Vb as d,_b as m,hc as e,ic as t,jc as i,tc as c,yb as l}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var v=(()=>{class a{constructor(){document.body.classList.add("authentication-background")}ngOnDestroy(){document.body.classList.remove("authentication-background")}showPassword=!1;toggleClass="off-line";createpassword(){this.showPassword=!this.showPassword,this.toggleClass==="off-line"?this.toggleClass="line":this.toggleClass="off-line"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=s({type:a,selectors:[["app-basic"]],standalone:!0,features:[p],decls:51,vars:4,consts:[[1,"container"],[1,"row","justify-content-center","align-items-center","authentication","authentication-basic","h-100"],[1,"col-xxl-5","col-xl-5","col-lg-5","col-md-6","col-sm-8","col-12"],[1,"card","custom-card","my-4"],[1,"card-body","p-5"],[1,"mb-3","d-flex","justify-content-center"],["routerLink","/dashboards/sales"],["src","./assets/images/brand-logos/desktop-logo.png","alt","logo",1,"desktop-logo"],["src","./assets/images/brand-logos/desktop-white.png","alt","logo",1,"desktop-white"],[1,"h5","mb-2","text-center"],[1,"mb-4","text-muted","op-7","fw-normal","text-center"],[1,"row","gy-3"],[1,"col-xl-12"],["for","signin-username",1,"form-label","text-default"],[1,"fs-12","text-danger"],["type","text","id","signin-username","placeholder","user name",1,"form-control"],[1,"col-xl-12","mb-2"],["for","signin-password",1,"form-label","text-default","d-block"],["routerLink","/authentication/reset-password/basic",1,"float-end","fw-normal","text-muted"],[1,"position-relative"],["type","password","id","signin-password","placeholder","password","autocomplete","",1,"form-control","create-password-input",3,"type"],["href","javascript:void(0);","id","button-addon2",1,"show-password-button","text-muted",3,"click"],[1,"mt-2"],[1,"form-check"],["type","checkbox","value","","id","defaultCheck1",1,"form-check-input"],["for","defaultCheck1",1,"form-check-label","text-muted","fw-normal"],[1,"d-grid","mt-4"],["routerLink","/dashboards/sales",1,"btn","btn-primary"],[1,"text-center"],[1,"text-muted","mt-3","mb-0"],["routerLink","/authentication/sign-up/basic",1,"text-primary"],[1,"btn-list","text-center","mt-3"],[1,"btn","btn-icon","btn-wave","btn-primary-light"],[1,"ri-facebook-line","lh-1","align-center","fs-17"],[1,"btn","btn-icon","btn-wave","btn-primary1-light"],[1,"ri-twitter-x-line","lh-1","align-center","fs-17"],[1,"btn","btn-icon","btn-wave","btn-primary2-light"],[1,"ri-instagram-line","lh-1","align-center","fs-17"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),i(7,"img",7)(8,"img",8),t()(),e(9,"p",9),n(10,"Sign In"),t(),e(11,"p",10),n(12,"Welcome back Henry s!"),t(),e(13,"div",11)(14,"div",12)(15,"label",13),n(16,"User Name"),e(17,"sup",14),n(18,"*"),t()(),i(19,"input",15),t(),e(20,"div",16)(21,"label",17),n(22,"Password"),e(23,"sup",14),n(24,"*"),t(),e(25,"a",18),n(26,"Forget password ?"),t()(),e(27,"div",19),i(28,"input",20),e(29,"a",21),c("click",function(){return r.createpassword()}),i(30,"i"),t()(),e(31,"div",22)(32,"div",23),i(33,"input",24),e(34,"label",25),n(35," Remember password ? "),t()()()()(),e(36,"div",26)(37,"a",27),n(38,"Sign In"),t()(),e(39,"div",28)(40,"p",29),n(41,"Dont have an account? "),e(42,"a",30),n(43,"Sign Up"),t()()(),e(44,"div",31)(45,"button",32),i(46,"i",33),t(),e(47,"button",34),i(48,"i",35),t(),e(49,"button",36),i(50,"i",37),t()()()()()()()),o&2&&(l(28),d("type",r.showPassword?"text":"password"),l(2),m("ri-eye-",r.toggleClass," align-middle"))},dependencies:[b,u]})}return a})();export{v as BasicComponent};
