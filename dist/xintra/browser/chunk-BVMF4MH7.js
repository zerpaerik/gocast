import{b as R}from"./chunk-ZNA4QXEM.js";import{b as M}from"./chunk-2ZDM7KQR.js";import{a as P}from"./chunk-PBV2MBDY.js";import{a as k}from"./chunk-363XZGVK.js";import{a as X,b as I}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import{U as D,V as N,r as S,w as B}from"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as u,Hc as i,Ic as c,Jc as p,Ma as g,Na as b,Pc as E,Vb as d,Zb as T,_b as m,dc as x,fc as v,gc as f,hc as e,ic as t,jc as l,nc as C,rb as y,tc as h,vc as w,yb as a}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";function A(r,H){if(r&1){let n=C();e(0,"tr",14)(1,"td")(2,"div",23)(3,"span",24),l(4,"img",25),t(),e(5,"div",26),i(6),t()()(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t(),e(11,"td"),i(12),t(),e(13,"td"),i(14),t(),e(15,"td")(16,"span"),i(17),t()(),e(18,"td",27),i(19),t(),e(20,"td")(21,"button",28),l(22,"i",29),t(),e(23,"button",30),h("click",function(){let s=g(n).$implicit,_=w();return b(_.click(s.id))}),l(24,"i",31),t()()()}if(r&2){let n=H.$implicit;a(4),d("src",n.src,y),a(2),p("",n.name," "),a(2),c(n.date),a(2),p(" ",n.txn,""),a(),m("text-",n.bg1," fw-medium"),a(),c(n.type),a(2),c(n.amount),a(2),m("badge bg-",n.bg,"-transparent"),a(),c(n.status),a(2),c(n.recipoent)}}var K=(()=>{class r{cryptos=[{id:1,src:"./assets/images/crypto-currencies/regular/Bitcoin.svg",name:"Bitcoin (BTC)",date:"2024-06-01 10:15:22",txn:"TXN123456789",type:"Withdrawal",bg1:"danger",amount:"0.5 BTC",status:"Completed",bg:"primary",recipoent:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{id:2,src:"./assets/images/crypto-currencies/regular/Ethereum.svg",name:"Ethereum (ETH)",date:"2024-06-02 14:30:45",txn:"TXN987654321",type:"Deposit",bg1:"success",amount:"10.0 ETH",bg:"primary3",status:"Pending",recipoent:"0x32Be343B94f860124dC4fEe278FDCBD38C102D88"},{id:3,src:"./assets/images/crypto-currencies/regular/litecoin.svg",name:"Litecoin (LTC)",date:"2024-06-03 09:45:10",txn:"TXN567890123",type:"Buy",bg1:"info",amount:"50.0 LTC",bg:"primary",status:"Completed",recipoent:"MV3rLMY1Tep6Rhbt4x8fZ2rERKx1CBYKFz"},{id:4,src:"./assets/images/crypto-currencies/regular/Ripple.svg",name:"Ripple (XRP)",date:"2024-06-04 16:20:55",txn:"TXN246801357",type:"Sell",bg1:"secondary",amount:"1000 XRP",bg:"primary1",status:"Failed",recipoent:"rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh"},{id:5,src:"./assets/images/crypto-currencies/regular/Bitcoin.svg",name:"Bitcoin (BTC)",date:"2024-06-05 11:55:30",txn:"TXN654321789",type:"Transfer",bg1:"warning",amount:"1.2 BTC",bg:"primary",status:"Completed",recipoent:"3BbDtxBSjgfTRxaBUgRqAeW1XVo8JpEzYy"},{id:6,src:"./assets/images/crypto-currencies/regular/Ethereum.svg",name:"Ethereum (ETH)",date:"2024-06-06 08:10:18",txn:"TXN135790246",type:"Withdrawal",bg1:"danger",amount:"5.5 ETH",bg:"primary3",status:"Pending",recipoent:"0x1dF62f291b2E969f6B5e158bcCC90eD80720D82e"},{id:7,src:"./assets/images/crypto-currencies/regular/Bitcoin.svg",name:"Bitcoin (BTC)",date:"2024-06-07 15:20:35",txn:"TXN789012345",type:"Deposit",bg1:"success",amount:"0.8 BTC",bg:"primary",status:"Completed",recipoent:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"},{id:8,src:"./assets/images/crypto-currencies/regular/litecoin.svg",name:"Litecoin (LTC)",date:"2024-06-08 12:55:50",txn:"TXN456789012",type:"Sell",bg1:"secondary",amount:"25.0 LTC",bg:"primary",status:"Completed",recipoent:"LPnPZ8qY2TAnYXUTtrBMHK5h8BQ4mP51sU"},{id:9,src:"./assets/images/crypto-currencies/regular/Ripple.svg",name:"Ripple (XRP)",date:"2024-06-09 09:30:05",txn:"TXN901234567",type:"Buy",bg1:"danger",amount:"500 XRP",bg:"primary3",status:"Pending",recipoent:"rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg"},{id:10,src:"./assets/images/crypto-currencies/regular/Bitcoin.svg",name:"Bitcoin (BTC)",date:"2024-06-10 14:45:22",txn:"TXN234567890",type:"Transfer",bg1:"warning",amount:"1.0 BTC",bg:"primary",status:"Completed",recipoent:"3CwTjvdAx2T1ZCFjHoUYaX6jTEy4d8BQsE"}];click(n){let o=this.cryptos.filter(s=>s.id!=n);this.cryptos=o}transactionColumn=[{header:"Cryptocurrency",field:"Cryptocurrency"},{header:"Date & Time",field:"Date & Time"},{header:"Transaction ID",field:"Transaction ID"},{header:"Type",field:"Type"},{header:"Amount",field:"Amount"},{header:"Status",field:"Status"},{header:"Recipient Address",field:"Recipient Address"},{header:"Actions",field:"Actions"}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=u({type:r,selectors:[["app-transactions"]],standalone:!0,features:[E],decls:46,vars:9,consts:[["title","Transactions","title1","Crypto","activeTitle","Transactions"],[1,"row"],[1,"col-xl-12"],[1,"card","custom-card"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"d-flex","flex-wrap","gap-2"],["type","text","placeholder","Search Here","aria-label",".form-control-sm example",1,"form-control","form-control-sm"],[3,"Customclass","title","Icon","IconClass","Menuclass"],["ngbDropdownItem","","href","javascript:void(0);",1,"dropdown-item"],[1,"btn","btn-secondary","btn-sm","btn-wave"],[1,"card-body","p-0"],[1,"table-responsive"],["tableClass"," text-nowrap",3,"columns","showCheckbox"],[1,"transaction-list"],[1,"card-footer","border-top-0"],["aria-label","Page navigation"],[1,"pagination","mb-0","float-end"],[1,"page-item","disabled"],[1,"page-link"],[1,"page-item"],["href","javascript:void(0);",1,"page-link"],["aria-current","page",1,"page-item","active"],[1,"d-flex","align-items-center","gap-2"],[1,"avatar","avatar-xs","avatar-rounded"],["alt","",3,"src"],[1,"fw-medium"],[1,"text-muted"],["data-bs-toggle","tooltip","data-bs-placement","top","ngbTooltip","download",1,"btn","btn-info-light","btn-icon","btn-sm"],[1,"ri-download-2-line"],[1,"btn","btn-danger-light","btn-icon","ms-1","btn-sm","transactions-delete",3,"click"],[1,"ri-delete-bin-5-line"]],template:function(o,s){o&1&&(l(0,"app-page-header",0),e(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6," Transaction History "),t(),e(7,"div",6)(8,"div"),l(9,"input",7),t(),e(10,"spk-dropdowns",8)(11,"li")(12,"a",9),i(13,"This Week"),t()(),e(14,"li")(15,"a",9),i(16,"This Month"),t()(),e(17,"li")(18,"a",9),i(19,"This Year"),t()()(),e(20,"div")(21,"button",10),i(22,"View All"),t()()()(),e(23,"div",11)(24,"div",12)(25,"app-spk-reusable-tables",13),v(26,A,25,14,"tr",14,x),t()()(),e(28,"div",15)(29,"nav",16)(30,"ul",17)(31,"li",18)(32,"a",19),i(33,"Previous"),t()(),e(34,"li",20)(35,"a",21),i(36,"1"),t()(),e(37,"li",22)(38,"a",21),i(39,"2"),t()(),e(40,"li",20)(41,"a",21),i(42,"3"),t()(),e(43,"li",20)(44,"a",21),i(45,"Next"),t()()()()()()()()),o&2&&(a(10),T("btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"),d("Customclass","dropdown")("title","Sort By")("Icon",!0)("IconClass","ri-arrow-down-s-line align-middle ms-1")("Menuclass","dropdown-menu"),a(15),d("columns",s.transactionColumn)("showCheckbox",!1),a(),f(s.cryptos))},dependencies:[I,X,B,S,N,D,M,R,k,P]})}return r})();export{K as TransactionsComponent};
