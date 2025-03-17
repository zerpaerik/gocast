import{a as g}from"./chunk-JXLTAFCH.js";import{b as S,d as y}from"./chunk-AABJJZTE.js";import{a as k}from"./chunk-S64CES6D.js";import{c as C}from"./chunk-W2TXPC45.js";import{a as x}from"./chunk-363XZGVK.js";import{a as h,b as E}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import"./chunk-66MCY2UZ.js";import{B as b,C as f}from"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as p,Hc as i,Oc as u,Pc as s,Qc as v,Vb as r,hc as t,ic as e,jc as n,tc as a,yb as o}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";var w=()=>({}),q=(()=>{class m{quantity=1;product=1;increaseQuantity(){this.quantity++}decreaseQuantity(){this.quantity>0&&this.quantity--}increase(){this.product++}decrease(){this.product>0&&this.product--}createinvoiceColumns=[{header:"PRODUCT NAME",field:"PRODUCT NAME"},{header:"DESCRIPTION",field:"DESCRIPTION"},{header:"QUANTITY",field:"QUANTITY"},{header:"PRICE PER UNIT",field:"PRICE PER UNIT"},{header:"TOTAL",field:"TOTAL"},{header:"ACTION",field:"ACTION"}];Currency=[{label:"Select Currency",value:1},{label:"USD - (United States Dollar)",value:2},{label:"BHD - (Bahraini Dinar)",value:3},{label:"KWD - (Kuwaiti Dinar)",value:4},{label:"CHF - (Swiss Franc)",value:5}];static \u0275fac=function(d){return new(d||m)};static \u0275cmp=p({type:m,selectors:[["app-createinvoice"]],standalone:!0,features:[u([S]),s],decls:208,vars:24,consts:[["title","Create-Invoice","title1","Invoice","activeTitle","Create-Invoice"],[1,"row"],[1,"col-xl-9"],[1,"card","custom-card"],[1,"card-header","d-md-flex","d-block"],[1,"h5","mb-0","d-sm-flex","d-block","align-items-center"],["src","./assets/images/brand-logos/toggle-logo.png","alt",""],[1,"ms-sm-2","ms-0","mt-sm-0","mt-2"],["type","text","placeholder","Invoice Title","value","INV TITLE",1,"form-control","form-control-light","form-control-sm"],[1,"mx-2"],[1,"mt-sm-0","mt-2"],["type","text","placeholder","Invoice ID","value","INV ID",1,"form-control","form-control-light","form-control-sm"],[1,"ms-auto","mt-md-0","mt-2"],[1,"btn","btn-sm","btn-primary","me-2"],[1,"ri-file-pdf-line","ms-1","align-middle","d-inline-block"],[1,"btn","btn-sm","btn-icon","btn-primary1-light","me-2"],[1,"bi","bi-plus-lg"],[1,"btn","btn-sm","btn-icon","btn-primary2-light","me-2"],[1,"bi","bi-download"],[1,"card-body"],[1,"row","gy-3"],[1,"col-xl-12"],[1,"col-xl-4","col-lg-4","col-md-6","col-sm-6"],[1,"dw-semibold","mb-2"],[1,"row","gy-2"],["type","text","id","Company-Name","placeholder","Company Name","value","SPRUKO TECHNOLOGIES",1,"form-control","form-control-light"],["id","company-address","placeholder","Enter Address","rows","3",1,"form-control","form-control-light"],["type","text","id","company-mail","placeholder","Company Email","value","",1,"form-control","form-control-light"],["type","text","id","company-phone","placeholder","Phone Number","value","",1,"form-control","form-control-light"],["id","invoice-subject","placeholder","Subject","rows","4",1,"form-control","form-control-light"],[1,"col-xl-4","col-lg-4","col-md-6","col-sm-6","ms-auto","mt-sm-0","mt-3"],["type","text","id","customer-Name","placeholder","Customer Name","value","Toni Stark",1,"form-control","form-control-light"],["id","customer-address","placeholder","Enter Address","rows","3",1,"form-control","form-control-light"],["type","text","id","customer-mail","placeholder","Customer Email","value","",1,"form-control","form-control-light"],["type","text","id","customer-phone","placeholder","Phone Number","value","",1,"form-control","form-control-light"],["type","text","id","zip-code","placeholder","Zip Code","value","",1,"form-control","form-control-light"],[1,"col-xl-12","choices-control","creative-inv"],[1,"dw-semibold","mb-2","mt-2"],[3,"options","id","selectClass","clearable","searchable","hideSelected","placeholder","additionalProperties"],[1,"col-xl-3"],["for","invoice-number",1,"form-label"],["type","text","id","invoice-number","placeholder","Inv No","value","#SPK120219890",1,"form-control","form-control-light"],["for","invoice-date-issued",1,"form-label"],["placeholder","Choose Date",1,"form-control",3,"mode","altInput","convertModelValue","enableTime","dateFormat"],["for","invoice-date-due",1,"form-label"],["for","invoice-due-amount",1,"form-label"],["type","text","id","invoice-due-amount","placeholder","Enter Amount","value","$12,983.78",1,"form-control","form-control-light"],[1,"table-responsive"],["tableClass"," nowrap text-nowrap border mt-3",3,"columns","showCheckbox"],["type","text","placeholder","Enter Product Name",1,"form-control","form-control-light"],["rows","1","placeholder","Enter Description",1,"form-control","form-control-light"],[1,"invoice-quantity-container"],[1,"input-group","border","rounded","flex-nowrap"],[1,"btn","btn-icon","btn-primary","input-group-text","flex-fill","product-quantity-minus",3,"click"],[1,"ri-subtract-line"],["type","text","aria-label","quantity","id","product-quantity5",1,"form-control","form-control-sm","border-0","text-center","w-100",3,"value"],[1,"btn","btn-icon","btn-primary","input-group-text","flex-fill","product-quantity-plus",3,"click"],[1,"ri-add-line"],["placeholder","","type","text","value","$84.00",1,"form-control","form-control-light"],["placeholder","","type","text","value","$251.00",1,"form-control","form-control-light"],[1,"btn","btn-sm","btn-icon","btn-danger-light"],[1,"ri-delete-bin-5-line"],["type","text","aria-label","quantity","id","product-quantity6",1,"form-control","form-control-sm","border-0","text-center","w-100",3,"value"],["placeholder","Enter Amount","type","text",1,"form-control","form-control-light"],["colspan","6",1,"border-bottom-0"],["href","javascript:void(0);",1,"btn","btn-light"],["colspan","4"],["colspan","2"],["tableClass"," table-sm text-nowrap mb-0 table-borderless",3,"showCheckbox"],["scope","row"],[1,"fw-medium"],["type","text","placeholder","Enter Amount","value","$2519.89",1,"form-control","form-control-light","invoice-amount-input"],["type","text","placeholder","Enter Amount","value","$15.58",1,"form-control","form-control-light","invoice-amount-input"],[1,"text-success"],["type","text","placeholder","Enter Amount","value","$112.00",1,"form-control","form-control-light","invoice-amount-input"],[1,"text-danger"],["type","text","placeholder","Enter Amount","value","$214.00",1,"form-control","form-control-light","invoice-amount-input"],["type","text","placeholder","Enter Amount","value","$2.00",1,"form-control","form-control-light","invoice-amount-input"],[1,"fs-14","fw-medium"],["type","text","placeholder","Enter Amount","value","$2,106.68",1,"form-control","form-control-light","invoice-amount-input"],["for","invoice-note",1,"form-label"],["id","invoice-note","rows","3",1,"form-control","form-control-light"],[1,"card-footer","d-flex","align-items-center","justify-content-between","gap-2","flex-wrap"],[1,"btn","btn-primary1-light"],[1,"ri-eye-line","me-1","align-middle","d-inline-block"],[1,"btn","btn-primary","m-1"],[1,"ri-send-plane-2-line","ms-1","align-middle","d-inline-block"],[1,"card-header"],[1,"card-title"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group"],["type","radio","name","btnradio","id","btnradio2",1,"btn-check"],["for","btnradio2",1,"btn","btn-outline-primary","mt-sm-0","mt-1"],["type","radio","name","btnradio","id","btnradio3","checked","",1,"btn-check"],["for","btnradio3",1,"btn","btn-outline-primary","mt-sm-0","mt-1"],["type","text","id","invoice-payment-cardname","placeholder","Card Number","value","1323 3213 4546 XXXX",1,"form-control","form-control-light"],["for","invoice-payment-cardname",1,"form-label","mb-0"],["href","javascript:void(0);",1,"text-muted","fs-11"],[1,"fs-12","text-danger","align-middle"],["type","text","placeholder","Card Holder Name",1,"form-control","form-control-light"],["type","password","placeholder","Enter OTP",1,"form-control","form-control-light","mb-2"],["role","alert",1,"alert","alert-primary2"]],template:function(d,l){d&1&&(n(0,"app-page-header",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div"),n(7,"img",6),e(),t(8,"div",7),n(9,"input",8),e(),t(10,"div",9),i(11,":"),e(),t(12,"div",10),n(13,"input",11),e()(),t(14,"div",12)(15,"button",13),i(16,"Save As PDF"),n(17,"i",14),e(),t(18,"button",15),n(19,"i",16),e(),t(20,"button",17),n(21,"i",18),e()()(),t(22,"div",19)(23,"div",20)(24,"div",21)(25,"div",1)(26,"div",22)(27,"p",23),i(28," Billing From : "),e(),t(29,"div",24)(30,"div",21),n(31,"input",25),e(),t(32,"div",21),n(33,"textarea",26),e(),t(34,"div",21),n(35,"input",27),e(),t(36,"div",21),n(37,"input",28),e(),t(38,"div",21),n(39,"textarea",29),e()()(),t(40,"div",30)(41,"p",23),i(42," Billing To : "),e(),t(43,"div",24)(44,"div",21),n(45,"input",31),e(),t(46,"div",21),n(47,"textarea",32),e(),t(48,"div",21),n(49,"input",33),e(),t(50,"div",21),n(51,"input",34),e(),t(52,"div",21),n(53,"input",35),e(),t(54,"div",36)(55,"p",37),i(56," Currency : "),e(),n(57,"app-spk-ng-select",38),e()()()()(),t(58,"div",39)(59,"label",40),i(60,"Invoice ID"),e(),n(61,"input",41),e(),t(62,"div",39)(63,"label",42),i(64,"Date Issued"),e(),n(65,"app-spk-flatpickr",43),e(),t(66,"div",39)(67,"label",44),i(68,"Due Date"),e(),n(69,"app-spk-flatpickr",43),e(),t(70,"div",39)(71,"label",45),i(72,"Due Amount"),e(),n(73,"input",46),e(),t(74,"div",21)(75,"div",47)(76,"app-spk-reusable-tables",48)(77,"tr")(78,"td"),n(79,"input",49),e(),t(80,"td"),n(81,"textarea",50),e(),t(82,"td",51)(83,"div",52)(84,"button",53),a("click",function(){return l.decrease()}),n(85,"i",54),e(),n(86,"input",55),t(87,"button",56),a("click",function(){return l.increase()}),n(88,"i",57),e()()(),t(89,"td"),n(90,"input",58),e(),t(91,"td"),n(92,"input",59),e(),t(93,"td")(94,"button",60),n(95,"i",61),e()()(),t(96,"tr")(97,"td"),n(98,"input",49),e(),t(99,"td"),n(100,"textarea",50),e(),t(101,"td",51)(102,"div",52)(103,"button",53),a("click",function(){return l.decreaseQuantity()}),n(104,"i",54),e(),n(105,"input",62),t(106,"button",56),a("click",function(){return l.increaseQuantity()}),n(107,"i",57),e()()(),t(108,"td"),n(109,"input",63),e(),t(110,"td"),n(111,"input",63),e(),t(112,"td")(113,"button",60),n(114,"i",61),e()()(),t(115,"tr")(116,"td",64)(117,"a",65),n(118,"i",16),i(119," Add Product"),e()()(),t(120,"tr"),n(121,"td",66),t(122,"td",67)(123,"app-spk-reusable-tables",68)(124,"tr")(125,"th",69)(126,"div",70),i(127,"Sub Total :"),e()(),t(128,"td"),n(129,"input",71),e()(),t(130,"tr")(131,"th",69)(132,"div",70),i(133,"Avail Discount :"),e()(),t(134,"td"),n(135,"input",72),e()(),t(136,"tr")(137,"th",69)(138,"div",70),i(139,"Coupon Discount "),t(140,"span",73),i(141,"(3.5%)"),e(),i(142," :"),e()(),t(143,"td"),n(144,"input",74),e()(),t(145,"tr")(146,"th",69)(147,"div",70),i(148,"Vat "),t(149,"span",75),i(150,"(7.5%)"),e(),i(151," :"),e()(),t(152,"td"),n(153,"input",76),e()(),t(154,"tr")(155,"th",69)(156,"div",70),i(157,"Due Till Date :"),e()(),t(158,"td"),n(159,"input",77),e()(),t(160,"tr")(161,"th",69)(162,"div",78),i(163,"Total :"),e()(),t(164,"td"),n(165,"input",79),e()()()()()()()(),t(166,"div",21)(167,"div")(168,"label",80),i(169,"Note:"),e(),t(170,"textarea",81),i(171,"Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"),e()()()()(),t(172,"div",82)(173,"button",83),n(174,"i",84),i(175,"Preview"),e(),t(176,"button",85),i(177,"Send Invoice "),n(178,"i",86),e()()()(),t(179,"div",39)(180,"div",3)(181,"div",87)(182,"div",88),i(183," Mode Of Payment "),e()(),t(184,"div",19)(185,"div",20)(186,"div",21)(187,"div",89),n(188,"input",90),t(189,"label",91),i(190,"UPI"),e(),n(191,"input",92),t(192,"label",93),i(193,"Credit/Debit Card"),e()()(),t(194,"div",21),n(195,"input",94),t(196,"label",95)(197,"a",96),i(198,"Enter valid card number "),t(199,"sup",97),i(200," *"),e()()()(),t(201,"div",21),n(202,"input",98),e(),t(203,"div",21),n(204,"input",99),e(),t(205,"div",21)(206,"div",100),i(207," Please Make sure to pay the invoice bill within 120 days. "),e()()()()()()()),d&2&&(o(57),r("options",l.Currency)("id","invoice-currency")("selectClass","")("clearable",!0)("searchable",!0)("hideSelected",!0)("placeholder","select currency")("additionalProperties",v(23,w)),o(8),r("mode","single")("altInput",!1)("convertModelValue",!0)("enableTime",!1)("dateFormat","Y-m-d"),o(4),r("mode","single")("altInput",!1)("convertModelValue",!0)("enableTime",!1)("dateFormat","Y-m-d"),o(7),r("columns",l.createinvoiceColumns)("showCheckbox",!1),o(10),r("value",l.product),o(19),r("value",l.quantity),o(18),r("showCheckbox",!1))},dependencies:[E,h,C,b,g,f,y,x,k]})}return m})();export{q as CreateinvoiceComponent};
