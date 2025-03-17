import{a as K,d as q,e as H}from"./chunk-MIZQ3UEK.js";import"./chunk-IO2JD2WI.js";import"./chunk-NCYFWSDI.js";import"./chunk-2MEGTBP5.js";import{a as U}from"./chunk-PBV2MBDY.js";import{a as z}from"./chunk-363XZGVK.js";import{a as B,b as R}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import{$ as O,U as J,V as N,r as L}from"./chunk-66MCY2UZ.js";import{B as F,C as V,b as T,g as _,m as A}from"./chunk-LWEV5N6L.js";import{l as M,o as P}from"./chunk-6SH7557L.js";import{Ba as b,Hc as i,Ic as u,Jc as k,Lc as y,Ma as p,Mc as j,Na as c,Nc as C,Pc as I,Vb as o,Zb as v,_b as f,ce as D,dc as x,fc as S,gc as E,hc as t,ic as e,jc as n,nc as h,tc as g,vc as w,yb as r}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import"./chunk-BI7C37SH.js";function Y(s,W){if(s&1){let a=h();t(0,"tr",75)(1,"td",136)(2,"input",137),C("ngModelChange",function(l){let d=p(a).$implicit;return j(d.checked,l)||(d.checked=l),c(l)}),e()(),t(3,"td")(4,"button",138),i(5,": :"),e()(),t(6,"td")(7,"span",49),i(8),e()(),t(9,"td")(10,"span"),n(11,"i",139),i(12),e()(),t(13,"td"),i(14),e(),t(15,"td",140)(16,"div",141)(17,"a",142),n(18,"i",132),e(),t(19,"a",143),g("click",function(){let l=p(a).$implicit,d=w();return c(d.remove(l.date))}),n(20,"i",134),e()()()()}if(s&2){let a=W.$implicit;r(2),y("ngModel",a.checked),r(6),u(a.task),r(2),f("fw-medium text-",a.bg,""),r(2),u(a.status),r(2),k(" ",a.date," ")}}var de=(()=>{class s{movies=["Episode I - The Phantom Menace","Episode II - Attack of the Clones","Episode III - Revenge of the Sith","Episode IV - A New Hope","Episode V - The Empire Strikes Back","Episode VI - Return of the Jedi","Episode VII - The Force Awakens","Episode VIII - The Last Jedi","Episode IX \u2013 The Rise of Skywalker"];drop(a){K(this.projects,a.previousIndex,a.currentIndex)}projects=[{checked:!0,task:"Implement responsive design",bg:"primary2",status:"Not Started",date:"17-Jan-2024"},{checked:!1,task:"Fix login authentication issue",bg:"success",status:"Completed",date:"17-Jan-2024"},{checked:!1,task:"Optimize database queries",bg:"primary2",status:"Not Started",date:"18-Feb-2024"},{checked:!0,task:"Integrate third-party API",bg:"warning",status:"Pending",date:"19-Feb-2024"},{checked:!0,task:"Create user documentation",bg:"primary2",status:"Not Started",date:"21-Feb-2024"},{checked:!1,task:"Deploy to staging environment",bg:"primary",status:"In Progress",date:"24-Feb-2024"},{checked:!0,task:"Conduct security audit",bg:"primary2",status:"Not Started",date:"27-Feb-2024"}];getCheckedTasks(){return this.projects.filter(a=>a.checked)}remove(a){let m=this.projects.filter(l=>l.date!=a);this.projects=m}projectColumn=[{header:"",field:"",tableHeadColumn:"todolist-handle-drag"},{header:"Task Title",field:"Task Title"},{header:"Status",field:"Status"},{header:"End Date",field:"End Date"},{header:"Action",field:"Action"}];static \u0275fac=function(m){return new(m||s)};static \u0275cmp=b({type:s,selectors:[["app-project-overviwe"]],standalone:!0,features:[I],decls:373,vars:15,consts:[["title","Project Overview","title1","Projects","activeTitle","Project Overview"],[1,"row"],[1,"col-xxl-8"],[1,"card","custom-card"],[1,"card-header","justify-content-between"],[1,"card-title"],["routerLink","/apps/projects/create-project",1,"btn","btn-sm","btn-primary","btn-wave","m-1"],[1,"ri-add-line","align-middle","me-1","fw-medium"],["href","javascript:void(0);",1,"btn","btn-sm","btn-primary1","btn-wave"],[1,"ri-share-line","align-middle","fw-medium","me-1"],[1,"card-body"],[1,"d-flex","align-items-center","mb-4","gap-2","flex-wrap"],[1,"avatar","avatar-lg","me-1","bg-primary-gradient"],[1,"ri-stack-line","fs-24","lh-1"],[1,"fw-medium","mb-2","task-title"],[1,"badge","bg-success-transparent"],[1,"text-muted","fs-12"],[1,"ri-circle-fill","text-success","mx-2","fs-9"],[1,"ms-auto","align-self-start"],[3,"Customclass","Icon","IconClass","Menuclass"],["ngbDropdownItem","","href","javascript:void(0);",1,"dropdown-item"],[1,"ri-eye-line","align-middle","me-1","d-inline-block"],[1,"ri-edit-line","align-middle","me-1","d-inline-block"],[1,"ri-delete-bin-line","me-1","align-middle","d-inline-block"],[1,"fs-15","fw-medium","mb-2"],[1,"text-muted","mb-4"],[1,"d-flex","gap-5","mb-4","flex-wrap"],[1,"d-flex","align-items-center","gap-2","me-3"],[1,"avatar","avatar-md","avatar-rounded","me-1","bg-primary1-transparent"],[1,"ri-calendar-event-line","fs-18","lh-1","align-middle"],[1,"fw-medium","mb-0","task-title"],[1,"fs-12","text-muted"],[1,"avatar","avatar-md","avatar-rounded","me-1","bg-primary2-transparent"],[1,"ri-time-line","fs-18","lh-1","align-middle"],[1,"d-flex","align-items-center","gap-2"],[1,"avatar","avatar-md","p-1","avatar-rounded","me-1","bg-primary-transparent"],["src","./assets/images/faces/11.jpg","alt",""],[1,"d-block","fs-14","fw-medium"],[1,"mb-4"],[1,"col-xl-6"],[1,"task-details-key-tasks","mb-0"],[1,"d-flex","align-items-center","justify-content-between","mb-2"],[1,"fs-15","fw-medium"],["href","javascript:void(0);",1,"btn","btn-primary-light","btn-wave","btn-sm","waves-effect","waves-light"],[1,"list-group"],[1,"list-group-item"],[1,"d-flex","align-items-center"],[1,"me-2"],[1,"ri-link","fs-15","text-secondary","lh-1","p-1","bg-secondary-transparent","rounded-circle"],[1,"fw-medium"],[1,"d-flex","gap-2","flex-wrap"],[1,"badge","bg-light","text-default","border"],[1,"card-footer"],[1,"d-flex","align-items-center","justify-content-between","gap-2","flex-wrap"],[1,"d-flex","gap-3","align-items-center"],[1,"fs-12"],[1,"avatar-list-stacked"],["data-bs-toggle","tooltip","tooltipClass","tooltip-primary","ngbTooltip","John",1,"avatar","avatar-sm","avatar-rounded"],["src","./assets/images/faces/2.jpg","alt","img"],["data-bs-toggle","tooltip","tooltipClass","tooltip-primary","ngbTooltip","Emily",1,"avatar","avatar-sm","avatar-rounded"],["src","./assets/images/faces/8.jpg","alt","img"],["data-bs-toggle","tooltip","tooltipClass","tooltip-primary","ngbTooltip","Liam",1,"avatar","avatar-sm","avatar-rounded"],["src","./assets/images/faces/5.jpg","alt","img"],["data-bs-toggle","tooltip","tooltipClass","tooltip-primary","ngbTooltip","Sophia",1,"avatar","avatar-sm","avatar-rounded"],["src","./assets/images/faces/10.jpg","alt","img"],["data-bs-toggle","tooltip","tooltipClass","tooltip-primary","ngbTooltip","Charlotte",1,"avatar","avatar-sm","avatar-rounded"],["src","./assets/images/faces/15.jpg","alt","img"],[1,"d-block"],[1,"badge","bg-info"],[1,"badge","bg-primary3"],[1,"card","custom-card","overflow-hidden"],[1,"btn","btn-sm","btn-primary-light","btn-wave"],["id","todo-content",1,"card-body","p-0","position-relative"],[1,"table-responsive"],["tableClass","  text-nowrap","checkboxClass","","cdkDropList","",3,"cdkDropListDropped","columns","showCheckbox"],["cdkDrag","",1,"todo-box"],[1,"col-xxl-4"],[1,"card","custom-card","justify-content-between"],[1,"card-header"],[1,"list-unstyled","profile-timeline"],[1,"avatar","avatar-sm","shadow-sm","bg-primary","avatar-rounded","profile-timeline-avatar"],[1,"mb-2","d-flex","align-items-start","gap-2"],[1,"ms-auto","bg-light","text-muted","badge"],[1,"text-muted","mb-0"],[1,"avatar","avatar-sm","shadow-sm","bg-primary2","avatar-rounded","profile-timeline-avatar"],[1,"avatar","avatar-sm","shadow-sm","avatar-rounded","profile-timeline-avatar"],["src","./assets/images/faces/12.jpg","alt",""],[1,"text-muted","mb-2","d-flex","align-items-start","gap-2","flex-wrap","flex-xxl-nowrap"],[1,"text-default"],[1,"profile-activity-media","mb-0"],["href","javascript:void(0);"],["src","./assets/images/media/file-manager/3.png","alt",""],[1,"fs-11","text-muted"],[1,"avatar","avatar-sm","shadow-sm","bg-primary3","avatar-rounded","profile-timeline-avatar"],[1,"text-muted","mb-2","d-flex","align-items-start","gap-2","flex-wrap"],[1,"profile-activity-media","mb-2"],["src","./assets/images/media/media-21.jpg","alt",""],[1,"avatar","avatar-xs","avatar-rounded"],["src","./assets/images/faces/3.jpg","alt","img"],["src","./assets/images/faces/9.jpg","alt","img"],["src","./assets/images/faces/6.jpg","alt","img"],["src","./assets/images/faces/14.jpg","alt","img"],["src","./assets/images/faces/7.jpg","alt",""],[1,"mb-2"],[1,"text-muted","mb-0","fs-12"],["src","./assets/images/media/media-45.jpg","alt",""],[1,"mb-1","d-flex","align-items-start","gap-2","flex-wrap","flex-xxl-nowrap"],["href","javascript:void(0);",1,"text-secondary"],[1,"text-muted"],["src","./assets/images/media/media-28.jpg","alt",""],["src","./assets/images/media/media-30.jpg","alt",""],[1,"d-sm-flex","align-items-center","lh-1"],[1,"me-sm-2","mb-2","mb-sm-0","p-1","rounded-circle","bg-primary-transparent","d-inline-block"],["src","./assets/images/faces/5.jpg","alt","",1,"avatar","avatar-sm","avatar-rounded"],[1,"flex-fill"],[1,"input-group","flex-nowrap"],["type","text","placeholder","Share your thoughts","aria-label","Recipient's username with two button addons",1,"form-control","w-sm-50","border","shadow-none"],["type","button",1,"btn","btn-primary-light","btn-wave","waves-effect","waves-light"],[1,"bi","bi-emoji-smile"],[1,"bi","bi-paperclip"],[1,"bi","bi-camera"],["type","button",1,"btn","btn-primary","btn-wave","waves-effect","waves-light","text-nowrap"],[3,"Customclass","title","Icon","IconClass","Menuclass"],[1,"card-body","p-0"],[1,"list-group","list-group-flush"],[1,"d-flex","align-items-center","flex-wrap","gap-2"],[1,"avatar","avatar-md","avatar-rounded","p-2","bg-light","lh-1"],["src","./assets/images/media/file-manager/1.png","alt",""],[1,"d-block","fw-medium"],[1,"d-block","text-muted","fs-12","fw-normal"],[1,"btn-list"],[1,"btn","btn-sm","btn-icon","btn-info-light","btn-wave"],[1,"ri-edit-line"],[1,"btn","btn-sm","btn-icon","btn-danger-light","btn-wave"],[1,"ri-delete-bin-line"],[1,"avatar","avatar-rounded","bg-light","lh-1"],[1,"task-checkbox"],["type","checkbox","value","","aria-label","...",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"btn","btn-icon","btn-sm","btn-wave","btn-light","todo-handle"],[1,"ri-circle-line","fw-semibold","fs-7","me-2","lh-1","align-middle"],[1,"text-end"],[1,"d-flex","gap-2"],["href","javascript:void(0);",1,"btn","btn-icon","btn-sm","btn-info-light","btn-wave","waves-effect","waves-light"],["href","javascript:void(0);",1,"btn","btn-icon","btn-sm","btn-danger-light","btn-wave","waves-effect","waves-light",3,"click"]],template:function(m,l){m&1&&(n(0,"app-page-header",0),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6," Project Details "),e(),t(7,"div")(8,"a",6),n(9,"i",7),i(10,"Create Project"),e(),t(11,"a",8),n(12,"i",9),i(13,"Share"),e()()(),t(14,"div",10)(15,"div",11)(16,"span",12),n(17,"i",13),e(),t(18,"div")(19,"h6",14),i(20," Customer Feedback Dashboard Development "),e(),t(21,"span",15),i(22," In progress"),e(),t(23,"span",16),n(24,"i",17),i(25,"Last Updated 1 Day Ago"),e()(),t(26,"div",18)(27,"spk-dropdowns",19)(28,"li")(29,"a",20),n(30,"i",21),i(31,"View"),e()(),t(32,"li")(33,"a",20),n(34,"i",22),i(35,"Edit"),e()(),t(36,"li")(37,"a",20),n(38,"i",23),i(39,"Delete"),e()()()()(),t(40,"div",24),i(41,"Project Description :"),e(),t(42,"p",25),i(43,"The Customer Feedback Dashboard Development project aims to create a comprehensive dashboard that aggregates and visualizes customer feedback data. This will enable our team to gain actionable insights and improve customer satisfaction."),e(),t(44,"div",26)(45,"div",27)(46,"span",28),n(47,"i",29),e(),t(48,"div")(49,"div",30),i(50," Start Date "),e(),t(51,"span",31),i(52,"28 August, 2024"),e()()(),t(53,"div",27)(54,"span",32),n(55,"i",33),e(),t(56,"div")(57,"div",30),i(58," End Date "),e(),t(59,"span",31),i(60,"30 Oct, 2024"),e()()(),t(61,"div",34)(62,"span",35),n(63,"img",36),e(),t(64,"div")(65,"span",37),i(66,"Amith Catzem"),e(),t(67,"span",31),i(68,"Project Manager"),e()()()(),t(69,"div",38)(70,"div",1)(71,"div",39)(72,"div",24),i(73,"Key tasks :"),e(),t(74,"ul",40)(75,"li"),i(76,"Design and implement a user-friendly dashboard interface."),e(),t(77,"li"),i(78,"Integrate data sources and APIs to fetch customer feedback data."),e(),t(79,"li"),i(80,"Develop interactive data visualizations for easy interpretation."),e(),t(81,"li"),i(82,"Implement filters and sorting functionalities for data analysis."),e(),t(83,"li"),i(84,"Create user authentication and access control features."),e(),t(85,"li"),i(86,"Perform usability testing and iterate based on feedback."),e()()(),t(87,"div",39)(88,"div",41)(89,"div",42),i(90,"Sub Tasks :"),e(),t(91,"a",43),i(92,"See More"),e()(),t(93,"ul",44)(94,"li",45)(95,"div",46)(96,"div",47),n(97,"i",48),e(),t(98,"div",49),i(99,"Research latest web development trends."),e()()(),t(100,"li",45)(101,"div",46)(102,"div",47),n(103,"i",48),e(),t(104,"div",49),i(105,"Create technical specifications document."),e()()(),t(106,"li",45)(107,"div",46)(108,"div",47),n(109,"i",48),e(),t(110,"div",49),i(111,"Optimize website for mobile responsiveness."),e()()()()()()(),t(112,"div",24),i(113,"Skills :"),e(),t(114,"div",50)(115,"span",51),i(116,"UI/UX Design"),e(),t(117,"span",51),i(118,"Data Integration"),e(),t(119,"span",51),i(120,"Data Visualization"),e(),t(121,"span",51),i(122,"Front-End Development"),e(),t(123,"span",51),i(124,"Authentication Systems"),e(),t(125,"span",51),i(126,"Usability Testing"),e(),t(127,"span",51),i(128,"Agile Methodology"),e(),t(129,"span",51),i(130,"API Development"),e()()(),t(131,"div",52)(132,"div",53)(133,"div",54)(134,"span",55),i(135,"Assigned To :"),e(),t(136,"div",56)(137,"span",57),n(138,"img",58),e(),t(139,"span",59),n(140,"img",60),e(),t(141,"span",61),n(142,"img",62),e(),t(143,"span",63),n(144,"img",64),e(),t(145,"span",65),n(146,"img",66),e()()(),t(147,"div",54)(148,"span",55),i(149,"Status:"),e(),t(150,"span",67)(151,"span",68),i(152,"On going"),e()()(),t(153,"div",54)(154,"span",55),i(155,"Priority:"),e(),t(156,"span",37)(157,"span",69),i(158,"Medium"),e()()()()()(),t(159,"div",70)(160,"div",4)(161,"div",5),i(162,"To Do Tasks"),e(),t(163,"div",71),n(164,"i",7),i(165,"Add Task"),e()(),t(166,"div",72)(167,"div")(168,"div",73)(169,"app-spk-reusable-tables",74),g("cdkDropListDropped",function(X){return l.drop(X)}),S(170,Y,21,7,"tr",75,x),e()()()()()(),t(172,"div",76)(173,"div",77)(174,"div",78)(175,"div",5),i(176,"Project Discussions"),e()(),t(177,"div",10)(178,"ul",79)(179,"li")(180,"div")(181,"span",80),i(182," A "),e(),t(183,"div",81)(184,"div")(185,"span",49),i(186,"Project Kick-off Meeting"),e()(),t(187,"span",82),i(188,"15,Jun 2024 - 06:20"),e()(),t(189,"p",83),i(190," Discuss project scope, objectives, and timelines. "),e()()(),t(191,"li")(192,"div")(193,"span",84),i(194," B "),e(),t(195,"div",81)(196,"div")(197,"span",49),i(198,"Project Details Page Planning"),e()(),t(199,"span",82),i(200,"20, Jun 2024 - 09:00"),e()(),t(201,"p",83),i(202," Define feature requirements and layout for the project details page. "),e()()(),t(203,"li")(204,"div")(205,"span",85),n(206,"img",86),e(),t(207,"div",87)(208,"div")(209,"span",88)(210,"b"),i(211,"Brenda Adams"),e(),i(212," shared a document with "),t(213,"b"),i(214,"you"),e()(),i(215,". "),e(),t(216,"span",82),i(217,"18,Jun 2024 - 09:15"),e()(),t(218,"p",89)(219,"a",90),n(220,"img",91),e(),t(221,"span",92),i(222,"728.62KB"),e()()()(),t(223,"li")(224,"div")(225,"span",93),i(226," J "),e(),t(227,"div",94)(228,"div")(229,"span",88)(230,"b"),i(231,"You"),e(),i(232," shared a post with 4 people "),t(233,"b"),i(234,"John,Emma,Liam,Sophie"),e()(),i(235,". "),e(),t(236,"span",82),i(237,"30,Jun 2024 - 13:20"),e()(),t(238,"p",95)(239,"a",90),n(240,"img",96),e()(),t(241,"div")(242,"div",56)(243,"span",97),n(244,"img",98),e(),t(245,"span",97),n(246,"img",99),e(),t(247,"span",97),n(248,"img",100),e(),t(249,"span",97),n(250,"img",101),e()()()()(),t(251,"li")(252,"div")(253,"span",85),n(254,"img",102),e(),t(255,"div",103)(256,"span",49),i(257,"Security and Compliance Audit"),e()(),t(258,"p",104),i(259," Ensure the system adheres to security and regulatory requirements. "),e()()(),t(260,"li")(261,"div")(262,"span",85),n(263,"img",105),e(),t(264,"div",106)(265,"div")(266,"b"),i(267,"Lucas"),e(),i(268," Commented on Project "),t(269,"a",107)(270,"u"),i(271,"#System Integration"),e()(),i(272,". "),e(),t(273,"span",82),i(274,"25,Jun 2024 - 10:52"),e()(),t(275,"p",108),i(276,"Integration progress looks good, keep it up! \u{1F44D}"),e(),t(277,"p",89)(278,"a",90),n(279,"img",109),e(),t(280,"a",90),n(281,"img",110),e()()()()()(),t(282,"div",52)(283,"div",111)(284,"div",112),n(285,"img",113),e(),t(286,"div",114)(287,"div",115),n(288,"input",116),t(289,"button",117),n(290,"i",118),e(),t(291,"button",117),n(292,"i",119),e(),t(293,"button",117),n(294,"i",120),e(),t(295,"button",121),i(296,"Post"),e()()()()()(),t(297,"div",70)(298,"div",4)(299,"div",5),i(300," Project Documents "),e(),t(301,"spk-dropdowns",122)(302,"li")(303,"a",20),i(304,"Download"),e()(),t(305,"li")(306,"a",20),i(307,"Import"),e()(),t(308,"li")(309,"a",20),i(310,"Export"),e()()()(),t(311,"div",123)(312,"ul",124)(313,"li",45)(314,"div",125)(315,"span",126),n(316,"img",127),e(),t(317,"div",114)(318,"a",90)(319,"span",128),i(320,"Project Proposal.pdf"),e()(),t(321,"span",129),i(322,"1.2MB"),e()(),t(323,"div",130)(324,"button",131),n(325,"i",132),e(),t(326,"button",133),n(327,"i",134),e()()()(),t(328,"li",45)(329,"div",125)(330,"span",135),n(331,"img",91),e(),t(332,"div",114)(333,"a",90)(334,"span",128),i(335,"Contracts.docx"),e()(),t(336,"span",129),i(337,"1.5MB"),e()(),t(338,"div",130)(339,"button",131),n(340,"i",132),e(),t(341,"button",133),n(342,"i",134),e()()()(),t(343,"li",45)(344,"div",125)(345,"span",126),n(346,"img",127),e(),t(347,"div",114)(348,"a",90)(349,"span",128),i(350,"Meeting Notes.txt"),e()(),t(351,"span",129),i(352,"256KB"),e()(),t(353,"div",130)(354,"button",131),n(355,"i",132),e(),t(356,"button",133),n(357,"i",134),e()()()(),t(358,"li",45)(359,"div",125)(360,"span",135),n(361,"img",91),e(),t(362,"div",114)(363,"a",90)(364,"span",128),i(365,"User Manual.pdf"),e()(),t(366,"span",129),i(367,"1.8MB"),e()(),t(368,"div",130)(369,"button",131),n(370,"i",132),e(),t(371,"button",133),n(372,"i",134),e()()()()()()()()()),m&2&&(r(27),v("btn btn-sm btn-wave btn-primary-light waves-effect waves-light no-caret"),o("Customclass","dropdown")("Icon",!0)("IconClass","fe fe-more-vertical")("Menuclass","dropdown-menu  dropdown-menu-end"),r(142),o("columns",l.projectColumn)("showCheckbox",!0),r(),E(l.projects),r(131),v("btn btn-light btn-full btn-sm no-caret "),o("Customclass","dropdown")("title","View All")("Icon",!0)("IconClass","ti ti-chevron-down ms-1")("Menuclass","dropdown-menu"))},dependencies:[R,B,P,M,N,J,O,L,D,F,T,_,A,V,U,H,q,z]})}return s})();export{de as ProjectOverviweComponent};
