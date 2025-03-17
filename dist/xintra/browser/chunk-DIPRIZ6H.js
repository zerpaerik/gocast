import{a as ae}from"./chunk-5YCAR6ZG.js";import{a as ie,b as se}from"./chunk-5RWOJWVD.js";import"./chunk-OES7SJOU.js";import"./chunk-IHYNIVMD.js";import{$ as te,a as X,c as Z,k as I,l as ee}from"./chunk-66MCY2UZ.js";import"./chunk-LWEV5N6L.js";import{f as K}from"./chunk-6SH7557L.js";import{Ba as L,Bc as $,Cc as F,Dc as H,Hc as o,Ic as z,Jc as b,Lc as k,Ma as h,Mc as S,Na as v,Nc as T,O as W,Oa as _,Pa as x,Pc as M,Pd as Y,Qb as O,Ub as A,Va as P,Vb as m,_b as E,cc as N,ce as J,dc as V,ec as C,f as R,fc as w,gc as y,hc as i,ic as s,jc as d,ka as G,nc as f,qb as B,rb as j,tc as p,vc as u,wc as Q,xc as U,yb as a,zb as q}from"./chunk-XJ56SYHS.js";import"./chunk-DW7GCGLI.js";import{g as le}from"./chunk-BI7C37SH.js";var D={};le(D,{alertData:()=>fe,alertData1:()=>pe,alertData2:()=>me,alertData3:()=>ce,alertData4:()=>ue,alertData5:()=>ge,alertData6:()=>he,alertData7:()=>ve,alertData8:()=>we,alertTS:()=>ne,alertTS1:()=>de,alertTS10:()=>Te,alertTS11:()=>ze,alertTS12:()=>De,alertTS13:()=>Ee,alertTS14:()=>Ve,alertTS15:()=>Le,alertTS16:()=>Be,alertTS17:()=>Me,alertTS2:()=>ye,alertTS3:()=>be,alertTS4:()=>Ce,alertTS5:()=>_e,alertTS6:()=>xe,alertTS7:()=>Ae,alertTS8:()=>ke,alertTS9:()=>Se,alertreuse:()=>oe});var oe=`  <ngb-alert  [type]="variant" [dismissible]="isDismissible"  >
  <ng-content >
  </ng-content>
  </ngb-alert>`,ne=`<ngb-alert
type="warning"
class="alert alert-warning alert-dismissible fade show"
role="alert"
>
<strong>Holy guacamole!</strong> You should check in on some of those
fields below.
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</ngb-alert>`,de=`  @for (livealert of livealerts; track livealert; let i = $index) {
    <div id="liveAlertPlaceholder">
      <div
        id="row"
        class="alert mb-2 alert-success alert-dismissible"
        role="alert"
      >
        <div>{{ livealert.message }}</div>
        <button
          type="button"
          class="btn-close"
          (click)="closeAlerts('row')"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    }
    <button
      type="button"
      (click)="showAlert()"
      class="btn btn-primary"
      id="liveAlertBtn"
    >
      Show live alert
    </button>`,me=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    livealerts: { message: string; show: boolean }[] = [];

    showAlert() {
      // Add a new alert to the array
      this.livealerts.push({
        message: 'Nice, you triggered this alert message!',
        show: true,
      });
    }
    closeAlerts(rowId: string) {
      const rowElement = document.getElementById(rowId);
      if (rowElement) {
        rowElement.remove();
      }
    }
    `,pe=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface SolidAlert {
      type: string;
      message: string;
      bg:string;
    }
    solidAlerts: SolidAlert[] = solidALERTS;
    const solidALERTS: SolidAlert[] = [
      {
        type: 'solid-primary',
        message: ' A simple solid primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-info',
        message: 'A simple solid info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-warning',
        message: 'A simple solid warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-success',
        message: 'A simple solid success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-danger',
        message: 'A simple solid danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-light',
        message: 'A simple solid light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'solid-dark',
        message: 'A simple solid dark alert\u2014check it out!',
        bg:'text-white'
      },
    ];
    `,ce=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
   solidroundedAlerts: Alert[] = solidRoundedALERTS;
        const solidRoundedALERTS: Alert[] = [
        {
          type: 'solid-primary',
          message: '  A simple solid rounded primary alert\u2014check it out!',
        },
        {
          type: 'solid-secondary',
          message: 'A simple solid rounded secondary alert\u2014check it out!',
        },
        {
          type: 'solid-warning',
          message: '  A simple solid rounded warning alert\u2014check it out!',
        },
        {
          type: 'solid-danger',
          message: 'A simple solid rounded danger alert\u2014check it out!',
        },
      ];
      solidroundedClose(index: number) {
        // Remove the alert from the array based on the index
        this.solidroundedAlerts.splice(index, 1);
      }`,ue=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
    const roundedOutlineALERTS: Alert[] = [
      {
        type: 'outline-primary',
        message: ' A simple outline primary alert\u2014check it out!',
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
      },
    ];
    roundedoutlineClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundedoutlineAlerts.splice(index, 1);
    }`,ge=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    solidShadowsAlerts: Alert[] = solidShadowsALERTS;
    const solidShadowsALERTS: Alert[] = [
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: ' A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
    ];
    solidShadowsAlertsClose(index: number) {
      // Remove the alert from the array based on the index
      this.solidShadowsAlerts.splice(index, 1);
    }`,he=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
    const roundeDefaultALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    roundeDefaultClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundeDefaultAlerts.splice(index, 1);
    }`,ve=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    const CustomeButtonALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    CustomeButtonClose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomeButtonAlerts.splice(index, 1);
    }`,we=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
    const CustomizedButtonALERTS: Alert1[] = [
      {
        type: 'outline-primary',
        icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
        message: ' A customized primary alert with an icon ',
        
      },
      {
        type: 'outline-secondary',
        message: 'A customized secondary alert with an icon ',
        icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
      },
      {
        type: 'outline-info',
        message: ' A customized warning alert with an icon ',
        icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
      },
      {
        type: 'outline-warning',
        message: ' A customized danger alert with an icon ',
        icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
      },
    ];
    customizedAlertclose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomizedButtonAlerts.splice(index, 1);
    }`,ye=`  

@for (alert of outlineAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="OutlineClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    }`,fe=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface OutlineAlert {
      type: string;
      message: string;
      bg:string;
    }
    outlineAlerts: OutlineAlert[] = outlineALERTS;

    const outlineALERTS: OutlineAlert[] = [
      {
        type: 'outline-primary',
        message: 'A simple outline primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-success',
        message: 'A simple outline success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-danger',
        message: 'A simple outline danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-light',
        message: 'A simple outline light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'outline-dark',
        message: 'A simple outline dark alert\u2014check it out!',
        bg:'text-dark'
      },
    ];
`,be=`    
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} shadow-sm alert-dismissible fade show my-2"
  >
    A simple solid primary alert with small shadow\u2014check it out!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      (click)="solidShadowsAlertsClose(i)"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }`,Ce=`   <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow">A simple primary alert with normal shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow\u2014check it out!</div>
    <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow\u2014check it out!
    </div>`,_e=` <div class="alert alert-primary" role="alert">
    A simple primary alert\u2014check it out!
</div>
<div class="alert alert-secondary" role="alert">
    A simple secondary alert\u2014check it out!
</div>
<div class="alert alert-success" role="alert">
    A simple success alert\u2014check it out!
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert\u2014check it out!
</div>
<div class="alert alert-warning" role="alert">
    A simple warning alert\u2014check it out!
</div>
<div class="alert alert-info" role="alert">
    A simple info alert\u2014check it out!
</div>
<div class="alert alert-light" role="alert">
    A simple light alert\u2014check it out!
</div>
<div class="alert alert-dark" role="alert">
    A simple dark alert\u2014check it out!
</div>`,xe=` <div class="alert alert-primary" role="alert">
A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>`,Ae=`      @for (alert of solidAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2 {{
        alert.bg
      }}"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="solidClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    } `,ke=`  
@for (alert of roundedoutlineAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="roundedoutlineClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }
      `,Se=`   @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="roundeDefaultClose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  } `,Te=`  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      (click)="CustomeButtonClose(i)"
      class="btn-close custom-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,ze=`      @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
    role="alert"
  >
    <span [innerHTML]="getSanitizedSVG(alert.icon)"></span>

    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="customizedAlertclose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,De=`   <div
 class="alert alert-primary d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-primary"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path
     d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
   />
 </svg>
 <div>An example alert with an icon</div>
</div>
<div
 class="alert alert-success d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-success"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
   <path
     d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
   />
 </svg>
 <div>An example success alert with an icon</div>
</div>
<div
 class="alert alert-warning d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-warning"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
         />
         <polygon points="13,16 11,16 11,18 13,18" />
         <polygon points="13,10 11,10 11,15 13,15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example warning alert with an icon</div>
</div>
<div
 class="alert alert-danger d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-danger"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
         />
         <rect height="6" width="2" x="11" y="7" />
         <rect height="2" width="2" x="11" y="15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example danger alert with an icon</div>
</div> `,Ee=`      <div
id="rowA"
class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowA')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowB"
class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowB')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowC"
class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowC')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowD"
class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowD')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowE"
class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowE')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowF"
class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/10.jpg" alt="img" />
</div>
<div>A simple light alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowF')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowG"
class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/15.jpg" alt="img" />
</div>
<div>A simple dark alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowG')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>`,Ve=`          <div
id="row1"
class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xs me-3">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row1')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row2"
class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row2')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row3"
class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar me-3">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row3')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row4"
class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-md me-3">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row4')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row5"
class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-lg me-3">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row5')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row6"
class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xl me-3">
  <img src="./assets/images/faces/14.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row6')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>   `,Le=` @for (alert11 of contentsalerts; track alert11.type) {
    <div class="col-xl-6">
            <ngb-alert [type]="alert11.type" (closed)="close11(alert11)">
                
                    <div [class]="alert11.class">
                    <h6 class="aletr-heading mb-0 text-fixed-white"> {{ alert11.message}}</h6>
                   
                </div>  <hr class="my-0">
                <div class="p-3">
                    <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-medium text-decoration-underline">Visit for support for queries ?</a></p>
                </div>  </ngb-alert>
          </div>
       
        }   `,Be=` 
@for (alert of solidroundedAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show mb-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="solidroundedClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }   `,Me=` <div class="row gy-3">
  <div class="col-xl-6">
    <div
      class="alert alert-primary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedA"
    >
      <div
        class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('A')"
          [attr.aria-expanded]="!isClosedA"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-secondary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedB"
    >
      <div
        class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('B')"
          [attr.aria-expanded]="!isClosedB"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-success overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedC"
    >
      <div
        class="p-3 bg-success text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('C')"
          [attr.aria-expanded]="!isClosedC"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-warning overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedD"
    >
      <div
        class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('D')"
          [attr.aria-expanded]="!isClosedD"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
</div> `;var $e=["*"],re=(()=>{class l{isDismissible=!1;variant="";close=new P;title="";linkText="";buttonClass="";onClose(){this.close.emit()}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=L({type:l,selectors:[["app-spk-alerts"]],inputs:{isDismissible:"isDismissible",variant:"variant",title:"title",linkText:"linkText",buttonClass:"buttonClass"},outputs:{close:"close"},standalone:!0,features:[M],ngContentSelectors:$e,decls:2,vars:2,consts:[[3,"closed","type","dismissible"]],template:function(n,t){n&1&&(Q(),i(0,"ngb-alert",0),p("closed",function(){return t.onClose()}),U(1),s()),n&2&&m("type",t.variant)("dismissible",t.isDismissible)},dependencies:[ee,I]})}return l})();var Fe=["staticAlert"],He=["selfClosingAlert"];function Re(l,c){if(l&1&&(i(0,"div",4)(1,"app-spk-alerts",72),o(2),s()()),l&2){let e=c.$implicit;a(),m("variant",e.color)("title",e.title),a(),z(e.title)}}function We(l,c){if(l&1){let e=f();i(0,"div",4)(1,"app-spk-alerts",73),p("close",function(){let t=h(e).$index,r=u();return v(r.handleClose(t))}),o(2),i(3,"a",74),o(4,"an example link"),s(),o(5,". Give it a click if you like. "),s()()}if(l&2){let e=c.$implicit;a(),m("variant",e.variant)("title",e.title)("isDismissible",!1),a(),b(" ",e.title," ")}}function Ge(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",75),p("close",function(){let t=h(e).$index,r=u();return v(r.solidClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.solidClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("title",e.message)("isDismissible",!0),a(),b(" ",e.message," ")}}function Pe(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.solidroundedClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.solidroundedClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function qe(l,c){if(l&1){let e=f();i(0,"div",13)(1,"div",78)(2,"div"),o(3),s(),i(4,"button",79),p("click",function(){h(e);let t=u();return v(t.closeAlerts("row"))}),d(5,"i",12),s()()()}if(l&2){let e=c.$implicit;a(3),z(e.message)}}function Oe(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.OutlineClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.OutlineClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Ne(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.solidShadowsAlertsClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.solidShadowsAlertsClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Qe(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.differentShadowsAlertsClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.differentShadowsAlertsClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Ue(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.roundedoutlineClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.roundedoutlineClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Ye(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.roundeDefaultClose(t))}),o(1),i(2,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.roundeDefaultClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Je(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.CustomeButtonClose(t))}),o(1),i(2,"button",80),p("close",function(){let t=h(e).$index,r=u();return v(r.CustomeButtonClose(t))}),d(3,"i",12),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),b(" ",e.message," ")}}function Ke(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.CustomeButtonClose(t))}),d(1,"span",81),o(2),i(3,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.CustomeButtonClose(t))}),d(4,"i",12),s()()}if(l&2){let e=c.$implicit,n=u();m("variant",e.type)("isDismissible",!0),a(),m("innerHTML",n.getSanitizedSVG(e.icon),B),a(),b(" ",e.message," ")}}function Xe(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedIconAlertclose(t))}),d(1,"span",81),o(2),i(3,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedIconAlertclose(t))}),d(4,"i",12),s()()}if(l&2){let e=c.$implicit,n=u();m("variant",e.type)("isDismissible",!0),a(),m("innerHTML",n.getSanitizedSVG(e.icon),B),a(),b(" ",e.message," ")}}function Ze(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedImageAlertclose(t))}),i(1,"div",82),d(2,"img",83),s(),o(3),i(4,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedImageAlertclose(t))}),d(5,"i",84),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(2),m("src",e.image,j),a(),b(" ",e.message," "),a(2),m("ngClass",e.type==="dark alert-img  rounded-pill flex-wrap"?"text-muted":"")}}function et(l,c){if(l&1){let e=f();i(0,"app-spk-alerts",77),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedImageAlertclose(t))}),i(1,"div"),d(2,"img",83),s(),o(3),i(4,"button",76),p("close",function(){let t=h(e).$index,r=u();return v(r.customizedImageAlertclose(t))}),d(5,"i",84),s()()}if(l&2){let e=c.$implicit;m("variant",e.type)("isDismissible",!0),a(),E("avatar ",e.avatarClass," me-3"),a(),m("src",e.image,j),a(),b(" ",e.message," "),a(2),m("ngClass",e.type==="dark alert-img   flex-wrap"?"text-muted":"")}}function tt(l,c){if(l&1&&(i(0,"button"),o(1),s()),l&2){let e=c.$implicit;E("btn btn-sm btn-",e.type," m-1"),a(),z(e.label)}}function it(l,c){if(l&1&&(i(0,"div",87),w(1,tt,2,4,"button",88,V),s()),l&2){let e=u().$implicit;a(),y(e.buttons)}}function st(l,c){if(l&1&&(i(0,"div",17)(1,"div",85)(2,"app-spk-alerts",9)(3,"button",86),d(4,"i",12),s(),i(5,"div"),d(6,"span",81),i(7,"h5"),o(8),s(),i(9,"p",87),o(10),s(),O(11,it,3,0,"div",87),s()()()()),l&2){let e=c.$implicit,n=u();a(2),m("variant",e.type)("isDismissible",!0),a(3),E("text-center px-5 pb-0  svg-",e.svg,""),a(),m("innerHTML",n.getSanitizedSVG(e.icon),B),a(2),z(e.title),a(2),z(e.message),a(),N(e.buttons.length>0?11:-1)}}function at(l,c){if(l&1){let e=f();i(0,"div",2)(1,"app-spk-alerts",75),p("close",function(){let t=h(e).$index,r=u();return v(r.additionalInfoClose(t))}),i(2,"div")(3,"h6",89),o(4),s(),i(5,"button",90),p("close",function(){let t=h(e).$index,r=u();return v(r.additionalInfoClose(t))}),d(6,"i",12),s()(),d(7,"hr",91),i(8,"div",92)(9,"p",93),o(10),i(11,"a",94),o(12),s()()()()()}if(l&2){let e=c.$implicit;a(),m("variant",e.variant)("title",e.title)("isDismissible",!0),a(),E("p-3 bg-",e.variant," text-fixed-white d-flex justify-content-between"),a(2),z(e.title),a(6),b("",e.message," "),a(2),b(" ",e.linkTitle,"")}}var rt=[{type:"success",message:"This is an success alert"},{type:"info",message:"This is an info alert"},{type:"warning",message:"This is a warning alert"},{type:"danger",message:"This is a danger alert"},{type:"primary",message:"This is a primary alert"},{type:"secondary",message:"This is a secondary alert"},{type:"light",message:"This is a light alert"},{type:"dark",message:"This is a dark alert"}],lt=[{type:"solid-primary rounded-pill",message:"  A simple solid rounded primary alert\u2014check it out!"},{type:"solid-primary1 rounded-pill",message:"  A simple solid rounded primary1 alert\u2014check it out!"},{type:"solid-primary2 rounded-pill",message:"  A simple solid rounded primary2 alert\u2014check it out!"},{type:"solid-primary3 rounded-pill",message:"  A simple solid rounded primary3 alert\u2014check it out!"},{type:"solid-secondary rounded-pill",message:"A simple solid rounded secondary alert\u2014check it out!"},{type:"solid-warning rounded-pill",message:"  A simple solid rounded warning alert\u2014check it out!"},{type:"solid-danger rounded-pill",message:"A simple solid rounded danger alert\u2014check it out!"}],ot=[{type:"solid-primary ",message:" A simple solid primary alert\u2014check it out!",bg:""},{type:"solid-secondary ",message:"A simple solid secondary alert\u2014check it out!",bg:""},{type:"solid-info ",message:"A simple solid info alert\u2014check it out!",bg:""},{type:"solid-warning ",message:"A simple solid warning alert\u2014check it out!",bg:""},{type:"solid-success ",message:"A simple solid success alert\u2014check it out!",bg:""},{type:"solid-danger ",message:"A simple solid danger alert\u2014check it out!",bg:""},{type:"solid-light ",message:"A simple solid light alert\u2014check it out!",bg:"text-dark"},{type:"solid-dark text-white ",message:"A simple solid dark alert\u2014check it out!",bg:"text-dark"}],nt=[{type:"outline-primary",message:"A simple outline primary alert\u2014check it out!",bg:""},{type:"outline-secondary",message:"A simple outline secondary alert\u2014check it out!",bg:""},{type:"outline-info",message:"A simple outline info alert\u2014check it out!",bg:""},{type:"outline-warning",message:"A simple outline warning alert\u2014check it out!",bg:""},{type:"outline-success",message:"A simple outline success alert\u2014check it out!",bg:""},{type:"outline-danger",message:"A simple outline danger alert\u2014check it out!",bg:""},{type:"outline-light",message:"A simple outline light alert\u2014check it out!",bg:"text-dark"},{type:"outline-dark text-dark",message:"A simple outline dark alert\u2014check it out!",bg:"text-dark"}],dt=[{type:"solid-primary shadow-sm",message:"A simple solid primary alert with normal shadow\u2014check it out!"},{type:"solid-primary shadow-sm",message:"A simple solid primary alert with normal shadow\u2014check it out!"},{type:"solid-primary shadow-sm",message:"A simple solid primary alert with normal shadow\u2014check it out!"},{type:"solid-secondary shadow-sm",message:"A simple solid secondary alert with normal shadow\u2014check it out!"},{type:"solid-secondary shadow-sm",message:" A simple solid secondary alert with normal shadow\u2014check it out!"},{type:"solid-secondary shadow-sm",message:"A simple solid secondary alert with normal shadow\u2014check it out!"}],mt=[{type:"primary shadow-sm",message:"A simple primary alert with normal shadow\u2014check it out!"},{type:"primary shadow-sm",message:"A simple primary alert with normal shadow\u2014check it out!"},{type:"primary shadow-sm",message:"A simple primary alert with normal shadow\u2014check it out!"},{type:"secondary shadow-sm",message:"A simple secondary alert with normal shadow\u2014check it out!"},{type:"secondary shadow-sm",message:" A simple secondary alert with normal shadow\u2014check it out!"},{type:"secondary shadow-sm",message:"A simple secondary alert with normal shadow\u2014check it out!"}],pt=[{type:"outline-primary rounded-pill",message:" A simple outline primary alert\u2014check it out!"},{type:"outline-primary1 rounded-pill",message:" A simple outline primary1 alert\u2014check it out!"},{type:"outline-primary2 rounded-pill",message:" A simple outline primary2 alert\u2014check it out!"},{type:"outline-primary3 rounded-pill",message:" A simple outline primary3 alert\u2014check it out!"},{type:"outline-secondary rounded-pill",message:"A simple outline secondary alert\u2014check it out!"},{type:"outline-info rounded-pill",message:"A simple outline info alert\u2014check it out!"},{type:"outline-warning rounded-pill",message:"A simple outline warning alert\u2014check it out!"}],ct=[{type:"primary rounded-pill",message:" A simple rounded primary alert\u2014check it out!"},{type:"primary1 rounded-pill",message:" A simple rounded primary1 alert\u2014check it out!"},{type:"primary2 rounded-pill",message:" A simple rounded primary2 alert\u2014check it out!"},{type:"primary3 rounded-pill",message:" A simple rounded primary3 alert\u2014check it out!"},{type:"secondary rounded-pill",message:"A simple rounded secondary alert\u2014check it out!"},{type:"info rounded-pill",message:"A simple rounded info alert\u2014check it out!"},{type:"warning rounded-pill",message:"A simple rounded warning alert\u2014check it out!"}],ut=[{type:"primary rounded-pill",message:" A simple rounded primary alert\u2014check it out!"},{type:"secondary rounded-pill",message:"A simple rounded secondary alert\u2014check it out!"},{type:"warning rounded-pill",message:"A simple rounded warning alert\u2014check it out!"},{type:"danger rounded-pill",message:"A simple rounded danger alert\u2014check it out!"}],gt=[{type:"primary svg-primary custom-alert-icon shadow-sm ",icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',message:" A customized primary alert with an icon "},{type:"secondary svg-secondary custom-alert-icon shadow-sm",message:"A customized secondary alert with an icon ",icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'},{type:"warning svg-warning custom-alert-icon shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'},{type:"danger svg-danger custom-alert-icon shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'}],ht=[{type:"primary svg-primary  shadow-sm ",icon:' <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',message:" A customized primary alert with an icon "},{type:"success svg-success  shadow-sm",message:"A customized success alert with an icon ",icon:' <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'},{type:"warning svg-warning  shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'},{type:"danger svg-danger  shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'}],vt=[{type:"primary alert-img  rounded-pill flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg"},{type:"primary1 alert-img  rounded-pill flex-wrap",message:"A simple primary 1alert with image\u2014check it out!",image:"./assets/images/faces/9.jpg"},{type:"primary2 alert-img  rounded-pill flex-wrap",message:"A simple primary2 alert with image\u2014check it out!",image:"./assets/images/faces/12.jpg"},{type:"primary3 alert-img  rounded-pill flex-wrap",message:"A simple primary3 alert with image\u2014check it out!",image:"./assets/images/faces/15.jpg"},{type:"secondary alert-img  rounded-pill flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg"},{type:"warning alert-img  rounded-pill flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg"},{type:"danger alert-img  rounded-pill flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg"},{type:"info alert-img  rounded-pill flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg"},{type:"light alert-img  rounded-pill flex-wrap",message:"A simple light alert with image\u2014check it out!",image:"./assets/images/faces/10.jpg"},{type:"dark alert-img  rounded-pill flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/15.jpg"}],wt=[{type:"primary alert-img   flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"primary1 alert-img   flex-wrap",message:"A simple primary1 alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"primary2 alert-img   flex-wrap",message:"A simple primary2 alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"primary3 alert-img   flex-wrap",message:"A simple primary3 alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"secondary alert-img   flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg",avatarClass:"avatar-sm"},{type:"warning alert-img   flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg",avatarClass:""},{type:"danger alert-img   flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg",avatarClass:"avatar-md"},{type:"info alert-img   flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg",avatarClass:"avatar-lg"},{type:"dark alert-img   flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/14.jpg",avatarClass:"avatar-xl"}],yt=[{type:"primary custom-alert1",svg:"primary",title:"Information",message:"This alert is created to just show the related information.",icon:'<svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>',buttons:[{label:"Decline",type:"outline-danger"},{label:"Accept",type:"primary"}]},{type:"secondary custom-alert1",title:"Confirmed",svg:"secondary",message:"This alert is created to just show the confirmation message.",icon:'<svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',buttons:[{label:"Close",type:"secondary"}]},{type:"warning custom-alert1",title:"Warning",svg:"warning",message:"This alert is created to just show the warning message.",icon:'<svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>',buttons:[{label:"Back",type:"outline-secondary"},{label:"Continue",type:"warning"}]},{type:"danger custom-alert1",title:"Danger",svg:"danger",message:"This alert is created to just show the danger message.",icon:'<svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>',buttons:[{label:"Delete",type:"danger"}]}],jt=(()=>{class l{sanitizer;toggleClass="line";prsimCodeData=D;tsCodeData=D;reusableCode=D;alerts;livealerts=[];showAlert(){this.livealerts.push({message:"Nice, you triggered this alert message!",show:!0})}close(e){this.alerts.splice(this.alerts.indexOf(e),1)}closeAlerts(e){let n=document.getElementById(e);n&&n.remove()}solidAlerts=ot;solidroundedAlerts=lt;outlineAlerts=nt;solidShadowsAlerts=dt;differentShadowsAlerts=mt;roundedoutlineAlerts=pt;roundeDefaultAlerts=ct;CustomeButtonAlerts=ut;CustomizedButtonAlerts=gt;CustomizedIconAlerts=ht;imageAlerts=vt;imageSizeAlerts=wt;confirmAlerts=yt;solidClose(e){this.solidAlerts.splice(e,1)}solidroundedClose(e){this.solidroundedAlerts.splice(e,1)}OutlineClose(e){this.outlineAlerts.splice(e,1)}solidShadowsAlertsClose(e){this.solidShadowsAlerts.splice(e,1)}differentShadowsAlertsClose(e){this.differentShadowsAlerts.splice(e,1)}roundedoutlineClose(e){this.roundedoutlineAlerts.splice(e,1)}roundeDefaultClose(e){this.roundeDefaultAlerts.splice(e,1)}CustomeButtonClose(e){this.CustomeButtonAlerts.splice(e,1)}customizedAlertclose(e){this.CustomizedButtonAlerts.splice(e,1)}customizedIconAlertclose(e){this.CustomizedIconAlerts.splice(e,1)}customizedImageAlertclose(e){this.imageAlerts.splice(e,1)}removeRow(e){let n=document.getElementById(e);n&&n.remove()}isClosed=!1;isClosed1=!1;isClosed2=!1;isClosed3=!1;isClosed4=!1;isClosed5=!1;isClosed6=!1;isClosed7=!1;isClosed8=!1;isClosed9=!1;isClosed10=!1;isClosed11=!1;isClosed12=!1;isClosed13=!1;isClosedA=!1;isClosedB=!1;isClosedC=!1;isClosedD=!1;alertData=[{color:"primary",title:"A simple primary alert\u2014check it out!"},{color:"primary1",title:"A simple primary1 alert\u2014check it out!"},{color:"primary2",title:"A simple primary2 alert\u2014check it out!"},{color:"primary3",title:"A simple primary3 alert\u2014check it out!"},{color:"secondary",title:"A simple secondary alert\u2014check it out!"},{color:"success",title:"A simple success alert\u2014check it out!"},{color:"danger",title:"A simple danger alert\u2014check it out!"},{color:"warning",title:"A simple warning alert\u2014check it out!"},{color:"info",title:"A simple info alert\u2014check it out!"},{color:"light",title:"A simple light alert\u2014check it out!"},{color:"dark",title:"A simple dark alert\u2014check it out!"}];LinkAlerts=[{variant:"primary",title:"A simple primary alert with"},{variant:"primary1",title:"A simple primary1 alert with"},{variant:"primary2",title:"A simple primary2 alert with"},{variant:"primary3",title:"A simple primary3 alert with"},{variant:"secondary",title:"A simple secondary alert with"},{variant:"success",title:"A simple success alert with"},{variant:"danger",title:"A simple danger alert with"},{variant:"warning",title:"A simple warning alert with"},{variant:"info",title:"A simple info alert with"},{variant:"light",title:"A simple light alert with"},{variant:"dark",title:"A simple dark alert with"}];additionalInfoClose(e){this.additionalInfoAlert.splice(e,1)}additionalInfoAlert=[{variant:"primary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"primary1 p-0 overflow-hidde",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"primary2 p-0 overflow-hidde",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"primary3 p-0 overflow-hidde",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"}];handleClose(e){this.LinkAlerts.splice(e,1)}Closetoggle(e){e=="zero"&&(this.isClosed=!0),e=="one"&&(this.isClosed1=!0),e=="two"&&(this.isClosed2=!0),e=="three"&&(this.isClosed3=!0),e=="four"&&(this.isClosed4=!0),e=="five"&&(this.isClosed5=!0),e=="six"&&(this.isClosed6=!0),e=="seven"&&(this.isClosed7=!0),e=="eight"&&(this.isClosed8=!0),e=="nine"&&(this.isClosed9=!0),e=="ten"&&(this.isClosed10=!0),e=="eleven"&&(this.isClosed11=!0),e=="twelve"&&(this.isClosed12=!0),e=="A"&&(this.isClosedA=!0),e=="B"&&(this.isClosedB=!0),e=="C"&&(this.isClosedC=!0),e=="D"&&(this.isClosedD=!0)}reset(){this.alerts=Array.from(rt)}_message$=new R;staticAlertClosed=!1;successMessage="";staticAlert;selfClosingAlert;getSanitizedSVG(e){return this.sanitizer.bypassSecurityTrustHtml(e)}constructor(e){this.sanitizer=e,this.reset(),this._message$.pipe(X(),G(n=>this.successMessage=n),W(5e3)).subscribe(()=>this.selfClosingAlert?.close())}changeSuccessMessage(){this._message$.next(`${new Date} - Message successfully changed.`)}static \u0275fac=function(n){return new(n||l)(q(K))};static \u0275cmp=L({type:l,selectors:[["app-alerts"]],viewQuery:function(n,t){if(n&1&&($(Fe,5),$(He,5)),n&2){let r;F(r=H())&&(t.staticAlert=r.first),F(r=H())&&(t.selfClosingAlert=r.first)}},standalone:!0,features:[M],decls:266,vars:78,consts:[["title","Alerts","title1","Ui Elements","activeTitle","Alerts"],[1,"row"],[1,"col-xl-6"],[3,"title","prism","reuseCode"],[1,"mb-3"],[3,"title","reuseCode","prism"],[1,"col-xl-12"],[3,"title","reuseCode","prism","tsCode"],[3,"variant","title","isDismissible"],[3,"variant","isDismissible"],["type","warning","role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],[1,"bi","bi-x"],["id","liveAlertPlaceholder"],["type","button","id","liveAlertBtn",1,"btn","btn-primary",3,"click"],[3,"title","reuseCode","prism","tsCode","classbody"],[3,"title","reuseCode","prism","classbody"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"row","gy-3"],[1,"col-xl-3"],[1,"card","border-0",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","alert-primary","border","border-primary","mb-0","p-2"],[1,"d-flex","align-items-start"],[1,"me-2","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-primary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],[1,"text-primary","w-100"],[1,"fw-semibold","d-flex","justify-content-between"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","p-0",3,"click"],[1,"fs-12","op-8","mb-1"],[1,"fs-12"],["href","javascript:void(0);",1,"text-secondary","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-primary","fw-semibold"],[1,"alert","alert-secondary","border","border-secondary","mb-0","p-2"],[1,"me-2","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-secondary"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],[1,"text-secondary","w-100"],["href","javascript:void(0);",1,"text-danger","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-secondary","fw-semibold"],[1,"alert","alert-warning","border","border-warning","mb-0","p-2"],[1,"me-2","svg-warning"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-warning"],["fill","none","height","24","width","24"],["d","M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"],["points","13,16 11,16 11,18 13,18"],["points","13,10 11,10 11,15 13,15"],[1,"text-warning","w-100"],["href","javascript:void(0);",1,"text-dark","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-warning","fw-semibold"],[1,"alert","alert-danger","border","border-danger","mb-0","p-2"],[1,"me-2","svg-danger"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-danger"],["d","M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"],["height","6","width","2","x","11","y","7"],["height","2","width","2","x","11","y","15"],[1,"text-danger","w-100"],["href","javascript:void(0);",1,"text-info","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-danger","fw-semibold"],[1,"alert","alert-solid-primary","border","border-primary","mb-0","p-2"],[1,"me-2","svg-white"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"text-fixed-white","w-100"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2","op-7"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold"],[1,"alert","alert-solid-secondary","border","border-secondary","mb-0","p-2"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2"],[1,"alert","alert-solid-warning","border","border-warning","mb-0","p-2"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"alert","alert-solid-danger","border","border-danger","mb-0","p-2"],[3,"variant","title"],["linkText","an example link","linkHref","javascript:void(0)",3,"close","variant","title","isDismissible"],["href","javascript:void(0);",1,"alert-link"],[3,"close","variant","title","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"close"],[3,"close","variant","isDismissible"],["id","row","role","alert",1,"alert","mb-2","alert-success","alert-dismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"click"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","custom-close",3,"close"],[3,"innerHTML"],[1,"avatar","avatar-sm","me-3","avatar-rounded"],["alt","img",3,"src"],[1,"bi","bi-x",3,"ngClass"],[1,"card","bg-white","border-0"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","ms-auto"],[1,""],[3,"class"],[1,"aletr-heading","mb-0","text-fixed-white"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","p-0","text-fixed-white",3,"close"],[1,"my-0"],[1,"p-3"],[1,"mb-0"],["href","javascript:void(0);",1,"fw-medium","text-decoration-underline"]],template:function(n,t){n&1&&(d(0,"app-page-header",0),i(1,"div",1)(2,"div",2)(3,"app-showcode-card",3),w(4,Re,3,3,"div",4,C),s()(),i(6,"div",2)(7,"app-showcode-card",5),w(8,We,6,4,"div",4,C),s()(),i(10,"div",6)(11,"app-showcode-card",7),w(12,Ge,4,4,"app-spk-alerts",8,C),s()(),i(14,"div",6)(15,"app-showcode-card",7),w(16,Pe,4,3,"app-spk-alerts",9,C),s()(),i(18,"div",2)(19,"app-showcode-card",5)(20,"ngb-alert",10)(21,"strong"),o(22,"Holy guacamole!"),s(),o(23," You should check in on some of those fields below. "),i(24,"button",11),d(25,"i",12),s()()()(),i(26,"div",2)(27,"app-showcode-card",7),w(28,qe,6,1,"div",13,C),i(30,"button",14),p("click",function(){return t.showAlert()}),o(31," Show live alert "),s()()(),i(32,"div",6)(33,"app-showcode-card",7),w(34,Oe,4,3,"app-spk-alerts",9,C),s()(),i(36,"div",2)(37,"app-showcode-card",7),w(38,Ne,4,3,"app-spk-alerts",9,C),s()(),i(40,"div",2)(41,"app-showcode-card",5),w(42,Qe,4,3,"app-spk-alerts",9,C),s()(),i(44,"div",2)(45,"app-showcode-card",7),w(46,Ue,4,3,"app-spk-alerts",9,C),s()(),i(48,"div",2)(49,"app-showcode-card",7),w(50,Ye,4,3,"app-spk-alerts",9,C),s()(),i(52,"div",6)(53,"app-showcode-card",7),w(54,Je,4,3,"app-spk-alerts",9,C),s()(),i(56,"div",2)(57,"app-showcode-card",15),w(58,Ke,5,4,"app-spk-alerts",9,C),s()(),i(60,"div",2)(61,"app-showcode-card",5),w(62,Xe,5,4,"app-spk-alerts",9,C),s()(),i(64,"div",6)(65,"app-showcode-card",16),w(66,Ze,6,5,"app-spk-alerts",9,V),s()(),i(68,"div",6)(69,"app-showcode-card",5),w(70,et,6,8,"app-spk-alerts",9,V),s()(),i(72,"div",6)(73,"div",1),w(74,st,12,9,"div",17,V),s(),i(76,"div",6)(77,"app-showcode-card",5)(78,"div",18),w(79,at,13,9,"div",2,C),s()()(),i(81,"div",1)(82,"div",19)(83,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed5,g)||(t.isClosed5=g),g}),i(84,"div",21)(85,"div",22)(86,"div",23),_(),i(87,"svg",24),d(88,"path",25)(89,"path",26),s()(),x(),i(90,"div",27)(91,"div",28),o(92," Information Alert"),i(93,"button",29),p("click",function(){return t.Closetoggle("five")}),d(94,"i",12),s()(),i(95,"div",30),o(96," Information alert to show to information "),s(),i(97,"div",31)(98,"a",32),o(99,"cancel"),s(),i(100,"a",33),o(101,"open"),s()()()()()()(),i(102,"div",19)(103,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed6,g)||(t.isClosed6=g),g}),i(104,"div",34)(105,"div",22)(106,"div",35),_(),i(107,"svg",36),d(108,"path",37)(109,"path",38),s()(),x(),i(110,"div",39)(111,"div",28),o(112," Success Alert"),i(113,"button",29),p("click",function(){return t.Closetoggle("six")}),d(114,"i",12),s()(),i(115,"div",30),o(116," Success alert to show to success message "),s(),i(117,"div",31)(118,"a",40),o(119,"cancel"),s(),i(120,"a",41),o(121,"open"),s()()()()()()(),i(122,"div",19)(123,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed7,g)||(t.isClosed7=g),g}),i(124,"div",42)(125,"div",22)(126,"div",43),_(),i(127,"svg",44)(128,"g"),d(129,"rect",45),s(),i(130,"g")(131,"g")(132,"g"),d(133,"path",46)(134,"polygon",47)(135,"polygon",48),s()()()()(),x(),i(136,"div",49)(137,"div",28),o(138," Warning Alert"),i(139,"button",29),p("click",function(){return t.Closetoggle("seven")}),d(140,"i",12),s()(),i(141,"div",30),o(142," Warning alert to show warning message "),s(),i(143,"div",31)(144,"a",50),o(145,"cancel"),s(),i(146,"a",51),o(147,"open"),s()()()()()()(),i(148,"div",19)(149,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed8,g)||(t.isClosed8=g),g}),i(150,"div",52)(151,"div",22)(152,"div",53),_(),i(153,"svg",54)(154,"g"),d(155,"rect",45),s(),i(156,"g")(157,"g")(158,"g"),d(159,"path",55)(160,"rect",56)(161,"rect",57),s()()()()(),x(),i(162,"div",58)(163,"div",28),o(164," Danger Alert"),i(165,"button",29),p("click",function(){return t.Closetoggle("eight")}),d(166,"i",12),s()(),i(167,"div",30),o(168," Danger alert to show the danger message "),s(),i(169,"div",31)(170,"a",59),o(171,"cancel"),s(),i(172,"a",60),o(173,"open"),s()()()()()()()()(),i(174,"div",6)(175,"div",1)(176,"div",19)(177,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed9,g)||(t.isClosed9=g),g}),i(178,"div",61)(179,"div",22)(180,"div",62),_(),i(181,"svg",63),d(182,"path",25)(183,"path",26),s()(),x(),i(184,"div",64)(185,"div",28),o(186," Information Alert"),i(187,"button",29),p("click",function(){return t.Closetoggle("nine")}),d(188,"i",12),s()(),i(189,"div",30),o(190," Information alert to show to information "),s(),i(191,"div",31)(192,"a",65),o(193,"cancel"),s(),i(194,"a",66),o(195,"open"),s()()()()()()(),i(196,"div",19)(197,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed10,g)||(t.isClosed10=g),g}),i(198,"div",67)(199,"div",22)(200,"div",62),_(),i(201,"svg",63),d(202,"path",37)(203,"path",38),s()(),x(),i(204,"div",64)(205,"div",28),o(206," Success Alert"),i(207,"button",29),p("click",function(){return t.Closetoggle("ten")}),d(208,"i",12),s()(),i(209,"div",30),o(210," Success alert to show to success message "),s(),i(211,"div",31)(212,"a",68),o(213,"close"),s()()()()()()(),i(214,"div",19)(215,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed11,g)||(t.isClosed11=g),g}),i(216,"div",69)(217,"div",22)(218,"div",62),_(),i(219,"svg",70)(220,"g"),d(221,"rect",45),s(),i(222,"g")(223,"g")(224,"g"),d(225,"path",46)(226,"polygon",47)(227,"polygon",48),s()()()()(),x(),i(228,"div",64)(229,"div",28),o(230," Warning Alert"),i(231,"button",29),p("click",function(){return t.Closetoggle("eleven")}),d(232,"i",12),s()(),i(233,"div",30),o(234," Warning alert to show to warning message "),s(),i(235,"div",31)(236,"a",65),o(237,"skip"),s(),i(238,"a",66),o(239,"open"),s()()()()()()(),i(240,"div",19)(241,"div",20),T("ngbCollapseChange",function(g){return S(t.isClosed12,g)||(t.isClosed12=g),g}),i(242,"div",71)(243,"div",22)(244,"div",62),_(),i(245,"svg",70)(246,"g"),d(247,"rect",45),s(),i(248,"g")(249,"g")(250,"g"),d(251,"path",55)(252,"rect",56)(253,"rect",57),s()()()()(),x(),i(254,"div",64)(255,"div",28),o(256," Danger Alert"),i(257,"button",29),p("click",function(){return t.Closetoggle("twelve")}),d(258,"i",12),s()(),i(259,"div",30),o(260," Danger alert to show to danger message "),s(),i(261,"div",31)(262,"a",65),o(263,"close"),s(),i(264,"a",66),o(265,"continue"),s()()()()()()()()()()),n&2&&(a(3),m("title","Default alerts")("prism",t.prsimCodeData.alertTS5)("reuseCode",t.reusableCode.alertreuse),a(),y(t.alertData),a(3),m("title","Links in alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS6),a(),y(t.LinkAlerts),a(3),m("title"," Solid Colored Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS7)("tsCode",t.tsCodeData.alertData1),a(),y(t.solidAlerts),a(3),m("title"," Rounded Solid Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS16)("tsCode",t.tsCodeData.alertData3),a(),y(t.solidroundedAlerts),a(3),m("title","Basic Alert")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS),a(8),m("title","Live example")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS1)("tsCode",t.tsCodeData.alertData2),a(),y(t.livealerts),a(5),m("title","Outline Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS2)("tsCode",t.tsCodeData.alertData),a(),y(t.outlineAlerts),a(3),m("title","Solid Alerts With Different Shadows")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS3)("tsCode",t.tsCodeData.alertData5),a(),y(t.solidShadowsAlerts),a(3),m("title","Default Alerts With Different Shadows")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS4),a(),y(t.differentShadowsAlerts),a(3),m("title"," Rounded Outline Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS8)("tsCode",t.tsCodeData.alertData4),a(),y(t.roundedoutlineAlerts),a(3),m("title","Rounded Default Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS9)("tsCode",t.tsCodeData.alertData6),a(),y(t.roundeDefaultAlerts),a(3),m("title"," Rounded Alerts With Custom Close Button")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS10)("tsCode",t.tsCodeData.alertData7),a(),y(t.CustomeButtonAlerts),a(3),m("title","  Customized Alerts With SVGs")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS11)("tsCode",t.tsCodeData.alertData8)("classbody",""),a(),y(t.CustomizedButtonAlerts),a(3),m("title","  Alerts with icons")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS12),a(),y(t.CustomizedIconAlerts),a(3),m("title","  Alerts With Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS13)("classbody","my-2"),a(),y(t.imageAlerts),a(3),m("title","   Alerts With Different size Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS14),a(),y(t.imageSizeAlerts),a(4),y(t.confirmAlerts),a(3),m("title","Additional content")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS17),a(2),y(t.additionalInfoAlert),a(4),k("ngbCollapse",t.isClosed5),a(10),A("aria-expanded",!t.isClosed5),a(10),k("ngbCollapse",t.isClosed6),a(10),A("aria-expanded",!t.isClosed6),a(10),k("ngbCollapse",t.isClosed7),a(16),A("aria-expanded",!t.isClosed7),a(10),k("ngbCollapse",t.isClosed8),a(16),A("aria-expanded",!t.isClosed8),a(12),k("ngbCollapse",t.isClosed9),a(10),A("aria-expanded",!t.isClosed9),a(10),k("ngbCollapse",t.isClosed10),a(10),A("aria-expanded",!t.isClosed10),a(8),k("ngbCollapse",t.isClosed11),a(16),A("aria-expanded",!t.isClosed11),a(10),k("ngbCollapse",t.isClosed12),a(16),A("aria-expanded",!t.isClosed12))},dependencies:[se,ie,te,I,Z,ae,re,J,Y]})}return l})();export{jt as AlertsComponent};
