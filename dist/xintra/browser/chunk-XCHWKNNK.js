import{a as D}from"./chunk-5YCAR6ZG.js";import{a as A,b as $}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import{R as U,S as L,T as P}from"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import"./chunk-6SH7557L.js";import{Ba as v,Bc as H,Cc as Y,Dc as R,Hc as c,Jc as B,Ma as T,Na as f,Pc as k,Pd as M,Qb as C,Va as x,Vb as r,Zb as E,_b as I,cc as _,ce as V,ec as h,fc as p,gc as b,hc as a,ic as i,jc as u,nc as y,tc as d,vc as g,wc as F,xc as S,yb as n}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import{g as N}from"./chunk-BI7C37SH.js";var w={};N(w,{toasts1:()=>K,toasts10:()=>et,toasts2:()=>O,toasts3:()=>X,toasts4:()=>q,toasts5:()=>G,toasts6:()=>W,toasts7:()=>z,toasts8:()=>Z,toasts9:()=>tt,toastsReuse:()=>Q});var Q=`@if(content1){
  <ngb-toast [class]="buttonClass" [autohide]="autohide" role="alert" aria-live="assertive"
  aria-atomic="true">
  <div class="d-flex">
      {{content1}}
    <button class="btn-close {{btnClass}} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
      (click)="show9 = true"></button>
  </div>
  <ng-content></ng-content>
</ngb-toast>
}
@else {

  <ngb-toast
 [delay]="5000"
 [autohide]="autohide"
 [header]="header"
 [ngClass]="buttonClass"
 (hide)="show = false" 
 >
     <ng-content>
         <ng-template ngbToastHeader (hide)="show = true;">
             <img
               class="bd-placeholder-img rounded me-2"
               src="./assets/images/brand-logos/favicon.ico"
               alt="Your Image"
               />
               <strong class="me-auto">Xintra</strong>
               <small>11 mins ago</small>
         </ng-template>
         {{content}}
     </ng-content>
     <!-- <button aria-label="Close" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
     >
     <span aria-hidden="true"></span>
   </button> -->
 </ngb-toast> 
}
`,K=`<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" (click)="showToast()" >Show live
toast</button>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toasts; track toasts) {
<ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToast(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header text-default">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,O=`@if (show6){
    <ngb-toast  class="toast align-items-center text-bg-primary  border-0 fade show  mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
              Hello, world! This is the Primary toast message
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show6 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show7){
    <ngb-toast  class="toast align-items-center text-bg-secondary border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the Secondary toast.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show7 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show8){
    <ngb-toast  class="toast align-items-center text-bg-warning border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the  warning toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show8 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show9){
    <ngb-toast  class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the info toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show9 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }`,X=`@if (show) {
    <ngb-toast [autohide]="false" (hidden)="show = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,q=`<div class="toast-container position-static">
@if (show1) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>just now</small>
        </ng-template>
        See? Just like this.
    </ngb-toast>
}
@if (show2) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>2 seconds ago</small>
        </ng-template>
        Heads up, toasts will stack automatically
    </ngb-toast>
}

</div>`,G=`@if (show3) {
    <ngb-toast [autohide]="false" (hidden)="show3 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,W=` @if (show10){
    <ngb-toast  class="toast align-items-center  mb-2 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-black">
                Hello, world! This is a toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close  me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show10 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
<div>
    <span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    </span>
</div>
@if (show11){
<ngb-toast
[autohide]="false"
class="toast fade show mt-2"
role="alert"
aria-live="assertive"
aria-atomic="true"
>
<div class="toast-body">
  Hello, world! This is a toast message.
  <div class="mt-2 pt-2 me-2 border-top">
    <button type="button" class="btn btn-primary btn-sm btn-wave">
      Take action
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm btn-wave"
      data-bs-dismiss="toast"
      (click)="show11 = false"
    >
      Close
    </button>
  </div>
</div>
</ngb-toast>
}`,z=`<div class="btn-list">
<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn" data-bs-dismiss="toast"
                            aria-label="Close"  (click)="showToastprimary()" >Primary</button>
<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn" (click)="showToastseconday()"
>secondary</button>
<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn"  (click)="showToastwarning()"
>warning</button>
<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn"  (click)="showToastinfo()"
>info</button>
<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn"  (click)="showToastsuccess()"
>success</button>
<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn"  (click)="showToastdanger()"
>danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toasts1) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary-transparent]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts2; track toasts2) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary-transparent]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts3; track toasts3) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning-transparent]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts4; track toasts4) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info-transparent]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts5; track toasts5) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success-transparent]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts6; track toasts6) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger-transparent]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
</div>`,Z=`<div class="btn-list">
<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn"  (click)="SolidToastprimary()">Primary</button>
<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn"  (click)="SolidToastsecondary()">secondary</button>
<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn"  (click)="SolidToastwarning()">warning</button>
<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn"  (click)="SolidToastinfo()">info</button>
<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn"  (click)="SolidToastsuccess()">success</button>
<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn"  (click)="SolidToastdanger()">danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toastsA; track toastsA) {
    <ngb-toast id="solid-primaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-primary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsB; track toastsB) {
    <ngb-toast id="solid-secondaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-secondary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}


@for (toast of toastsC; track toastsC) {
    <ngb-toast id="solid-warningToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-warning text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsD; track toastsD) {
    <ngb-toast id="solid-infoToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-info text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsE; track toastsE) {
    <ngb-toast id="solid-successToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-success text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsF; track toastsF) {
    <ngb-toast id="solid-dangerToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-danger text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
</div>`,tt=`<div class="btn-list">
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn" (click)="TopLeft()">Top Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" (click)="TopCenter()">Top Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" (click)="TopRight()">Top Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" (click)="MiddleLeft()">Middle Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" (click)="MiddleCenter()">Middle Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" (click)="MiddleRight()">Middle Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" (click)="BottomLeft()">Bottom Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" (click)="BottomCenter()">Bottom Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" (click)="BottomRight()">Bottom Right</button>
</div>
<div class="toast-container position-fixed top-0 start-0 p-3">
@for (toast of toasts7; track toasts7) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="toplefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="toplefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 start-50  translate-middle-x p-3">
@for (toast of toasts8; track toasts8) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts9; track toasts9) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
@for (toast of toasts10; track toasts10) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-50 translate-middle">
@for (toast of toasts11; track toasts11) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
@for (toast of toasts12; track toasts12) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-0 p-3">
@for (toast of toasts13; track toasts13) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
@for (toast of toasts14; track toasts14) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomCenterthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomCenterthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
@for (toast of toasts15; track toasts15) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,et=`<div class="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
    class="d-flex justify-content-center align-items-center w-100">
    
        @if (show5) {
            <ngb-toast class="shadow-lg fade" [autohide]="false" (hidden)="show5 = false">
                <ng-template ngbToastHeader>
                    <div class="me-auto">
                        <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                        <strong class="mx-1 ">Udon</strong>
                    </div>
                    <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
            </ngb-toast>
        }
</div>
</div>`;var j=["*","*"];function ot(e,l){if(e&1){let t=y();a(0,"ngb-toast",2)(1,"div",3),c(2),a(3,"button",4),d("click",function(){T(t);let s=g();return f(s.onClose())}),i()(),S(4),i()}if(e&2){let t=g();E(t.buttonClass),r("autohide",t.autohide),n(2),B(" ",t.content1," "),n(),I("btn-close ",t.btnClass," me-2 m-auto")}}function at(e,l){e&1&&(u(0,"img",7),a(1,"strong",8),c(2,"Xintra"),i(),a(3,"small"),c(4,"11 mins ago"),i())}function it(e,l){if(e&1){let t=y();C(0,at,5,0,"ng-template",6),d("hide",function(){T(t);let s=g(2);return f(s.show=!0)}),c(1)}if(e&2){let t=g(2);n(),B(" ",t.content," ")}}function nt(e,l){if(e&1){let t=y();a(0,"ngb-toast",5),d("hide",function(){T(t);let s=g();return f(s.show=!1)}),S(1,1,null,it,2,1),i()}if(e&2){let t=g();r("delay",5e3)("autohide",t.autohide)("header",t.header)("ngClass",t.buttonClass)}}var J=(()=>{class e{show=!1;title="";content="";header="";buttonClass="";btnClass="";content1="";autohide=!1;hide=new x;closeToast=new x;onClose(){this.closeToast.emit()}onHide(){this.show=!1,this.hide.emit()}show9=!0;hidden=()=>{this.show9=!1};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=v({type:e,selectors:[["spk-toast"]],inputs:{show:"show",title:"title",content:"content",header:"header",buttonClass:"buttonClass",btnClass:"btnClass",content1:"content1",autohide:"autohide"},outputs:{hide:"hide",closeToast:"closeToast"},standalone:!0,features:[k],ngContentSelectors:j,decls:2,vars:1,consts:[["role","alert","aria-live","assertive","aria-atomic","true",3,"class","autohide"],[3,"delay","autohide","header","ngClass"],["role","alert","aria-live","assertive","aria-atomic","true",3,"autohide"],[1,"d-flex"],["data-bs-dismiss","toast","aria-label","Close",3,"click"],[3,"hide","delay","autohide","header","ngClass"],["ngbToastHeader","",3,"hide"],["src","./assets/images/brand-logos/favicon.ico","alt","Your Image",1,"bd-placeholder-img","rounded","me-2"],[1,"me-auto"]],template:function(o,s){o&1&&(F(j),C(0,ot,5,7,"ngb-toast",0)(1,nt,3,4,"ngb-toast",1)),o&2&&_(s.content1?0:1)},dependencies:[P,L,U,V,M]})}return e})();var rt=["toastContainer"];function lt(e,l){return this.toasts8}function dt(e,l){return this.toasts9}function ct(e,l){return this.toasts10}function mt(e,l){return this.toasts11}function ut(e,l){return this.toasts12}function pt(e,l){return this.toasts13}function bt(e,l){return this.toasts14}function ht(e,l){return this.toasts15}function gt(e,l){e&1&&u(0,"spk-toast",12),e&2&&r("autohide",!0)}function Tt(e,l){if(e&1){let t=y();a(0,"spk-toast",63),d("closeToast",function(){T(t);let s=g();return f(s.handleToastClose1())})("contentClick",function(s){T(t);let m=g();return f(m.preventClose(s))}),i()}e&2&&r("buttonClass","toast align-items-center text-bg-primary border-0 mb-4")("autohide",!1)}function ft(e,l){if(e&1){let t=y();a(0,"spk-toast",64),d("closeToast",function(){T(t);let s=g();return f(s.handleToastClose2())}),i()}e&2&&r("buttonClass","toast align-items-center text-bg-secondary border-0 mb-4")("autohide",!1)}function yt(e,l){if(e&1){let t=y();a(0,"spk-toast",64),d("closeToast",function(){T(t);let s=g();return f(s.handleToastClose3())}),i()}e&2&&r("buttonClass","toast align-items-center text-bg-info border-0 mb-4")("autohide",!1)}function _t(e,l){if(e&1){let t=y();a(0,"spk-toast",64),d("closeToast",function(){T(t);let s=g();return f(s.handleToastClose4())}),i()}e&2&&r("buttonClass","toast align-items-center text-bg-warning border-0 mb-4")("autohide",!1)}function Ct(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary text-fixed-white")("autohide",!0)}function wt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary1 text-fixed-white")("autohide",!0)}function vt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary2 text-fixed-white")("autohide",!0)}function kt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary3 text-fixed-white")("autohide",!0)}function xt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-secondary text-fixed-white")("autohide",!0)}function St(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-warning text-fixed-white")("autohide",!0)}function Bt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-info text-fixed-white")("autohide",!0)}function Et(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-success text-fixed-white")("autohide",!0)}function It(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-danger text-fixed-white")("autohide",!0)}function Ft(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Ht(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary1-transparent")("autohide",!0)}function Yt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary2-transparent")("autohide",!0)}function Rt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary3-transparent")("autohide",!0)}function Mt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-secondary-transparent")("autohide",!0)}function Vt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-warning-transparent")("autohide",!0)}function Ut(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-info-transparent")("autohide",!0)}function Lt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-success-transparent")("autohide",!0)}function Pt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-danger-transparent")("autohide",!0)}function At(e,l){e&1&&u(0,"spk-toast",12),e&2&&r("autohide",!1)}function $t(e,l){if(e&1){let t=y();a(0,"spk-toast",65),d("closeToast",function(){T(t);let s=g();return f(s.handleToastClose())}),i()}e&2&&r("buttonClass","toast align-items-center fade show mb-3")("content1","Hello, world! This is a toast message.")("autohide",!1)}function Dt(e,l){if(e&1){let t=y();a(0,"spk-toast",27),c(1," Hello, world! This is a toast message. "),a(2,"div",66)(3,"button",67),c(4," Take action "),i(),a(5,"button",68),d("click",function(){T(t);let s=g();return f(s.show10=!1)}),c(6," Close "),i()()()}e&2&&r("buttonClass","toast fade show mt-2")("autohide",!1)}function jt(e,l){if(e&1){let t=y();a(0,"spk-toast",70),d("click",function(){T(t);let s=g(2);return f(s.show15=!1)}),i()}e&2&&r("buttonClass","toast colored-toast bg-primary-gradient toastify-js text-fixed-white")("autohide",!1)}function Jt(e,l){if(e&1&&C(0,jt,1,2,"spk-toast",69),e&2){let t=g();_(t.show15?0:-1)}}function Nt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Qt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Kt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Ot(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Xt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function qt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Gt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Wt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function zt(e,l){e&1&&u(0,"spk-toast",27),e&2&&r("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}var ue=(()=>{class e{prismCode=w;reusableCode=w;show=!0;show1=!0;showContent=!0;show2=!0;show3=!0;show4=!0;show5=!0;show6=!0;show7=!0;show8=!0;show9=!0;show10=!0;show11=!0;show12=!0;show13=!0;show14=!0;show15=!0;show16=!0;isclose=!0;isCollapsed=!0;isCollapsed2=!0;isCollapsed3=!0;isCollapsed4=!0;isCollapsed5=!0;isCollapsed6=!0;isCollapsed7=!0;preventClose(t){t.stopPropagation()}toastContainer;show0=!1;autohide=!0;constructor(){}ngOnInit(){}toasts=[];toasts1=[];toasts2=[];toasts3=[];toasts4=[];toasts5=[];toasts6=[];toastsA=[];toastsB=[];toastsC=[];toastsD=[];toastsE=[];toastsF=[];toastsG=[];toastsH=[];toastsI=[];toastsJ=[];toastsK=[];toasts7=[];toasts8=[];toasts9=[];toasts10=[];toasts11=[];toasts12=[];toasts13=[];toasts14=[];toasts15=[];toasts16=[];toasts17=[];toasts18=[];showToast(){let t={autohide:!0};this.toasts.push(t)}showToastprimary(){let t={autohide:!0};this.toasts1.push(t)}showToastprimary1(){let t={autohide:!0};this.toasts16.push(t)}showToastprimary2(){let t={autohide:!0};this.toasts17.push(t)}showToastprimary3(){let t={autohide:!0};this.toasts18.push(t)}showToastseconday(){let t={autohide:!0};this.toasts2.push(t)}showToastwarning(){let t={autohide:!0};this.toasts3.push(t)}showToastinfo(){let t={autohide:!0};this.toasts4.push(t)}showToastsuccess(){let t={autohide:!0};this.toasts5.push(t)}showToastdanger(){let t={autohide:!0};this.toasts6.push(t)}hideToastprimary(t){this.toasts1=this.toasts1.filter(o=>o!==t)}hideToastprimary1(t){this.toasts16=this.toasts16.filter(o=>o!==t)}hideToastprimary2(t){this.toasts17=this.toasts17.filter(o=>o!==t)}hideToastprimary3(t){this.toasts18=this.toasts18.filter(o=>o!==t)}hideToastsecondary(t){this.toasts2=this.toasts2.filter(o=>o!==t)}hideToastwarning(t){this.toasts3=this.toasts3.filter(o=>o!==t)}hideToastinfo(t){this.toasts4=this.toasts4.filter(o=>o!==t)}hideToastsuccess(t){this.toasts5=this.toasts5.filter(o=>o!==t)}hideToastdanger(t){this.toasts6=this.toasts6.filter(o=>o!==t)}hidehedaer=[{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-primary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-secondary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-warning mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-info"}];SolidToastprimary(){let t={autohide:!0};this.toastsA.push(t)}SolidToastprimary1(){let t={autohide:!0};this.toastsH.push(t)}SolidToastjs(){let t={autohide:!0};this.toastsK.push(t)}SolidToastprimary2(){let t={autohide:!0};this.toastsI.push(t)}SolidToastprimary3(){let t={autohide:!0};this.toastsJ.push(t)}SolidToastsecondary(){let t={autohide:!0};this.toastsB.push(t)}SolidToastwarning(){let t={autohide:!0};this.toastsC.push(t)}SolidToastinfo(){let t={autohide:!0};this.toastsD.push(t)}SolidToastsuccess(){let t={autohide:!0};this.toastsE.push(t)}SolidToastdanger(){let t={autohide:!0};this.toastsF.push(t)}hideToast(t){this.toasts=this.toasts.filter(o=>o!==t)}hideSolidToastprimary(t){this.toastsA=this.toastsA.filter(o=>o!==t)}hideSolidToastprimary1(t){this.toastsH=this.toastsH.filter(o=>o!==t)}hideSolidToastprimary2(t){this.toastsI=this.toastsI.filter(o=>o!==t)}hideSolidToastprimary3(t){this.toastsJ=this.toastsJ.filter(o=>o!==t)}hideSolidToastsecondary(t){this.toastsB=this.toastsB.filter(o=>o!==t)}hideSolidToastwarning(t){this.toastsC=this.toastsC.filter(o=>o!==t)}hideSolidToastinfo(t){this.toastsD=this.toastsD.filter(o=>o!==t)}hideSolidToastsuccess(t){this.toastsE=this.toastsE.filter(o=>o!==t)}hideSolidToastdanger(t){this.toastsF=this.toastsF.filter(o=>o!==t)}hidden=()=>{this.show9=!1};handleToastClose(){this.showContent=!1}handleToastClose1(){this.show11=!1}handleToastClose2(){this.show12=!1}handleToastClose3(){this.show13=!1}handleToastClose4(){this.show14=!1}contentClose(){this.show10=!1}close(){this.isclose=!1,setTimeout(()=>this.isclose=!0,3e3)}TopLeft(){let t={autohide:!0};this.toasts7.push(t)}TopCenter(){let t={autohide:!0};this.toasts8.push(t)}TopCenterhideToast(t){this.toasts8=this.toastsA.filter(o=>o!==t)}TopRight(){let t={autohide:!0};this.toasts9.push(t)}TopRighthideToast(t){this.toasts9=this.toastsA.filter(o=>o!==t)}MiddleLeft(){let t={autohide:!0};this.toasts10.push(t)}MiddleLefthideToast(t){this.toasts10=this.toastsA.filter(o=>o!==t)}MiddleCenter(){let t={autohide:!0};this.toasts11.push(t)}MiddleCenterhideToast(t){this.toasts11=this.toastsA.filter(o=>o!==t)}MiddleRight(){let t={autohide:!0};this.toasts12.push(t)}MiddleRighthideToast(t){this.toasts12=this.toastsA.filter(o=>o!==t)}BottomLeft(){let t={autohide:!0};this.toasts13.push(t)}BottomLefthideToast(t){this.toasts13=this.toastsA.filter(o=>o!==t)}BottomCenter(){let t={autohide:!0};this.toasts14.push(t)}BottomCenterthideToast(t){this.toasts14=this.toastsA.filter(o=>o!==t)}BottomRight(){let t={autohide:!0};this.toasts15.push(t)}BottomRighthideToast(t){this.toasts15=this.toastsA.filter(o=>o!==t)}showToastBasic=!1;showToastStack1=!1;showToastStack2=!1;showBasicToast(){this.showToastBasic=!0}showStackToasts(){this.showToastStack1=!0,setTimeout(()=>this.showToastStack2=!0,1e3)}solidtoasts=[{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-secondary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=v({type:e,selectors:[["app-toasts"]],viewQuery:function(o,s){if(o&1&&H(rt,5),o&2){let m;Y(m=R())&&(s.toastContainer=m.first)}},standalone:!0,features:[k],decls:177,vars:41,consts:[["title","Toasts","title1","Ui Elements","activeTitle","Toasts"],[1,"row"],[1,"col-xl-6"],["classbody","basitoastbody",3,"title","prism","reuseCode"],["content"," Hello, world! This is a toast message",3,"hide","autohide"],["classbody","stackingbody",3,"title","prism","reuseCode"],[1,"toast-container","position-static"],["buttonClass","mb-3","content","See? Just like this.",3,"hide","autohide"],["buttonClass","mb-3","content","Heads up, toasts will stack automatically",3,"hide","autohide"],[3,"reuseCode","title","prism"],["type","button","id","liveToastBtn",1,"btn","btn-primary","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3","mt-3"],["content"," Hello, world! This is a toast message",3,"autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"buttonClass","autohide"],[1,"col-xl-12"],["classbody","bgtoastbody",3,"reuseCode","title","prism"],[1,"btn-list"],["type","button","id","solidprimaryToastBtn",1,"btn","btn-primary","me-2","btn-wave",3,"click"],["type","button","id","solidprimary1ToastBtn",1,"btn","btn-primary1","me-2","btn-wave",3,"click"],["type","button","id","solidprimary2ToastBtn",1,"btn","btn-primary2","me-2","btn-wave",3,"click"],["type","button","id","solidprimary3ToastBtn",1,"btn","btn-primary3","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-secondary","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-warning","me-2","btn-wave",3,"click"],["type","button","id","solidinfoToastBtn",1,"btn","btn-info","me-2","btn-wave",3,"click"],["type","button","id","solidsuccessToastBtn",1,"btn","btn-success","me-2","btn-wave",3,"click"],["type","button","id","soliddangerToastBtn",1,"btn","btn-danger","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3"],["content","Your,toast message here.",3,"buttonClass","autohide"],["type","button","id","primaryToastBtn",1,"btn","btn-primary-light","me-2","btn-wave",3,"click"],["type","button","id","primary1ToastBtn",1,"btn","btn-primary1-light","me-2","btn-wave",3,"click"],["type","button","id","primary2ToastBtn",1,"btn","btn-primary2-light","me-2","btn-wave",3,"click"],["type","button","id","primary3ToastBtn",1,"btn","btn-primary3-light","me-2","btn-wave",3,"click"],["type","button","id","secondaryToastBtn",1,"btn","btn-secondary-light","me-2","btn-wave",3,"click"],["type","button","id","warningToastBtn",1,"btn","btn-warning-light","me-2","btn-wave",3,"click"],["type","button","id","infoToastBtn",1,"btn","btn-info-light","me-2","btn-wave",3,"click"],["type","button","id","successToastBtn",1,"btn","btn-success-light","me-2","btn-wave",3,"click"],["type","button","id","dangerToastBtn",1,"btn","btn-danger-light","me-2","btn-wave",3,"click"],[3,"buttonClass","content1","autohide"],[1,"my-4","text-muted"],[1,"bd-example","bg-light","bd-example-toasts","d-flex","justify-content-center","align-items-center","px-2"],["buttonClass","shadow-lg","content"," Hello, world! This is a toast message",3,"hide","autohide"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","toast-button",1,"btn","btn-primary-gradient","btn-wave","waves-effect","waves-light",3,"click"],["type","button","id","topleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","topcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","toprightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middleleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlecenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlerightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomrightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","start-0","p-3"],[1,"toast-container","position-fixed","top-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","top-50","start-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","top-50","start-50","translate-middle"],[1,"toast-container","position-fixed","top-50","end-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","bottom-0","start-0","p-3"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","bottom-0","end-0","p-3"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"closeToast","contentClick","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"closeToast","buttonClass","autohide"],[3,"closeToast","buttonClass","content1","autohide"],[1,"mt-3","pt-2","border-top"],["type","button",1,"btn","btn-primary","btn-sm","btn-wave","me-2"],["type","button","data-bs-dismiss","toast",1,"btn","btn-secondary","btn-sm","btn-wave",3,"click"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"click","buttonClass","autohide"]],template:function(o,s){o&1&&(u(0,"app-page-header",0),a(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"spk-toast",4),d("hide",function(){return s.show=!1}),i()(),a(5,"app-showcode-card",5)(6,"div",6)(7,"spk-toast",7),d("hide",function(){return s.show=!1}),i(),a(8,"spk-toast",8),d("hide",function(){return s.show=!1}),i()()()(),a(9,"div",2)(10,"app-showcode-card",9)(11,"button",10),d("click",function(){return s.showToast()}),c(12," Show live toast "),i(),a(13,"div",11),p(14,gt,1,1,"spk-toast",12,h),i()(),a(16,"app-showcode-card",9),C(17,Tt,1,2,"spk-toast",13)(18,ft,1,2,"spk-toast",13)(19,yt,1,2,"spk-toast",13)(20,_t,1,2,"spk-toast",13),i()()(),a(21,"div",1)(22,"div",14)(23,"app-showcode-card",15)(24,"div",16)(25,"button",17),d("click",function(){return s.SolidToastprimary()}),c(26," Primary "),i(),a(27,"button",18),d("click",function(){return s.SolidToastprimary1()}),c(28,"Primary1"),i(),a(29,"button",19),d("click",function(){return s.SolidToastprimary2()}),c(30,"Primary2"),i(),a(31,"button",20),d("click",function(){return s.SolidToastprimary3()}),c(32,"Primary3"),i(),a(33,"button",21),d("click",function(){return s.SolidToastsecondary()}),c(34," secondary "),i(),a(35,"button",22),d("click",function(){return s.SolidToastwarning()}),c(36," Warning "),i(),a(37,"button",23),d("click",function(){return s.SolidToastinfo()}),c(38," info "),i(),a(39,"button",24),d("click",function(){return s.SolidToastsuccess()}),c(40," success "),i(),a(41,"button",25),d("click",function(){return s.SolidToastdanger()}),c(42," danger "),i()(),a(43,"div",26),p(44,Ct,1,2,"spk-toast",27,h),p(46,wt,1,2,"spk-toast",27,h),p(48,vt,1,2,"spk-toast",27,h),p(50,kt,1,2,"spk-toast",27,h),p(52,xt,1,2,"spk-toast",27,h),p(54,St,1,2,"spk-toast",27,h),p(56,Bt,1,2,"spk-toast",27,h),p(58,Et,1,2,"spk-toast",27,h),p(60,It,1,2,"spk-toast",27,h),i()()(),a(62,"div",14)(63,"app-showcode-card",9)(64,"div",16)(65,"button",28),d("click",function(){return s.showToastprimary()}),c(66," Primary "),i(),a(67,"button",29),d("click",function(){return s.showToastprimary1()}),c(68,"Primary1"),i(),a(69,"button",30),d("click",function(){return s.showToastprimary2()}),c(70,"Primary2"),i(),a(71,"button",31),d("click",function(){return s.showToastprimary3()}),c(72,"Primary3"),i(),a(73,"button",32),d("click",function(){return s.showToastseconday()}),c(74," secondary "),i(),a(75,"button",33),d("click",function(){return s.showToastwarning()}),c(76," warning "),i(),a(77,"button",34),d("click",function(){return s.showToastinfo()}),c(78," info "),i(),a(79,"button",35),d("click",function(){return s.showToastsuccess()}),c(80," success "),i(),a(81,"button",36),d("click",function(){return s.showToastdanger()}),c(82," danger "),i()(),a(83,"div",26),p(84,Ft,1,2,"spk-toast",27,h),p(86,Ht,1,2,"spk-toast",27,h),p(88,Yt,1,2,"spk-toast",27,h),p(90,Rt,1,2,"spk-toast",27,h),p(92,Mt,1,2,"spk-toast",27,h),p(94,Vt,1,2,"spk-toast",27,h),p(96,Ut,1,2,"spk-toast",27,h),p(98,Lt,1,2,"spk-toast",27,h),p(100,Pt,1,2,"spk-toast",27,h),i()()(),a(102,"div",14)(103,"app-showcode-card",9),C(104,At,1,1,"spk-toast",12),i()(),a(105,"div",14)(106,"app-showcode-card",9),C(107,$t,1,3,"spk-toast",37),a(108,"div")(109,"span",38),c(110," Alternatively, you can also add additional controls and components to toasts. "),i()(),C(111,Dt,7,2,"spk-toast",27),i()()(),a(112,"div",1)(113,"div",14)(114,"app-showcode-card",9)(115,"div",39)(116,"spk-toast",40),d("hide",function(){return s.show=!1}),i()()()(),a(117,"div",14)(118,"div",41)(119,"div",42)(120,"div",43),c(121," TOASTIFY JS "),i()(),a(122,"div",44)(123,"button",45),d("click",function(){return s.SolidToastjs()}),c(124,"Click For Live Toast"),i(),a(125,"div",26),p(126,Jt,1,1,null,null,h),i()()()()(),a(128,"div",1)(129,"div",14)(130,"app-showcode-card",9)(131,"div",16)(132,"button",46),d("click",function(){return s.TopLeft()}),c(133,"Top Left"),i(),a(134,"button",47),d("click",function(){return s.TopCenter()}),c(135,"Top Center"),i(),a(136,"button",48),d("click",function(){return s.TopRight()}),c(137,"Top Right"),i(),a(138,"button",49),d("click",function(){return s.MiddleLeft()}),c(139,"Middle Left"),i(),a(140,"button",50),d("click",function(){return s.MiddleCenter()}),c(141,"Middle Center"),i(),a(142,"button",51),d("click",function(){return s.MiddleRight()}),c(143,"Middle Right"),i(),a(144,"button",52),d("click",function(){return s.BottomLeft()}),c(145,"Bottom Left"),i(),a(146,"button",53),d("click",function(){return s.BottomCenter()}),c(147,"Bottom Center"),i(),a(148,"button",54),d("click",function(){return s.BottomRight()}),c(149,"Bottom Right"),i()(),a(150,"div",55),p(151,Nt,1,2,"spk-toast",27,h),i(),a(153,"div",56),p(154,Qt,1,2,"spk-toast",27,lt,!0),i(),a(156,"div",26),p(157,Kt,1,2,"spk-toast",27,dt,!0),i(),a(159,"div",57),p(160,Ot,1,2,"spk-toast",27,ct,!0),i(),a(162,"div",58),p(163,Xt,1,2,"spk-toast",27,mt,!0),i(),a(165,"div",59),p(166,qt,1,2,"spk-toast",27,ut,!0),i(),a(168,"div",60),p(169,Gt,1,2,"spk-toast",27,pt,!0),i(),a(171,"div",61),p(172,Wt,1,2,"spk-toast",27,bt,!0),i(),a(174,"div",62),p(175,zt,1,2,"spk-toast",27,ht,!0),i()()()()),o&2&&(n(3),r("title","Basic example")("prism",s.prismCode.toasts3)("reuseCode",s.reusableCode.toastsReuse),n(),r("autohide",!1),n(),r("title","Stacking")("prism",s.prismCode.toasts4)("reuseCode",s.reusableCode.toastsReuse),n(2),r("autohide",!1),n(),r("autohide",!1),n(2),r("reuseCode",s.reusableCode.toastsReuse)("title","Live example")("prism",s.prismCode.toasts1),n(4),b(s.toasts),n(2),r("reuseCode",s.reusableCode.toastsReuse)("title","Color schemes")("prism",s.prismCode.toasts2),n(),_(s.show11?17:-1),n(),_(s.show12?18:-1),n(),_(s.show13?19:-1),n(),_(s.show14?20:-1),n(3),r("reuseCode",s.reusableCode.toastsReuse)("title","Solid Background Toasts")("prism",s.prismCode.toasts8),n(21),b(s.toastsA),n(2),b(s.toastsH),n(2),b(s.toastsI),n(2),b(s.toastsJ),n(2),b(s.toastsB),n(2),b(s.toastsC),n(2),b(s.toastsD),n(2),b(s.toastsE),n(2),b(s.toastsF),n(3),r("reuseCode",s.reusableCode.toastsReuse)("title","Color Variants Live")("prism",s.prismCode.toasts7),n(21),b(s.toasts1),n(2),b(s.toasts16),n(2),b(s.toasts17),n(2),b(s.toasts18),n(2),b(s.toasts2),n(2),b(s.toasts3),n(2),b(s.toasts4),n(2),b(s.toasts5),n(2),b(s.toasts6),n(3),r("reuseCode",s.reusableCode.toastsReuse)("title","Translucent")("prism",s.prismCode.toasts5),n(),_(s.show1?104:-1),n(2),r("reuseCode",s.reusableCode.toastsReuse)("title","Custom content")("prism",s.prismCode.toasts6),n(),_(s.showContent?107:-1),n(4),_(s.show10?111:-1),n(3),r("reuseCode",s.reusableCode.toastsReuse)("title","Aligning Toast Using Flexbox")("prism",s.prismCode.toasts10),n(2),r("autohide",!1),n(10),b(s.toastsK),n(4),r("reuseCode",s.reusableCode.toastsReuse)("title","Toast Placements")("prism",s.prismCode.toasts9),n(21),b(s.toasts7),n(3),b(s.toasts8),n(3),b(s.toasts9),n(3),b(s.toasts10),n(3),b(s.toasts11),n(3),b(s.toasts12),n(3),b(s.toasts13),n(3),b(s.toasts14),n(3),b(s.toasts15))},dependencies:[$,A,D,J]})}return e})();export{ue as ToastsComponent};
