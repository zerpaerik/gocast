import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  dirchange?: boolean;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
   
    //PAGES
    { headTitle: '' },
    {
      title: 'Gestión',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
      
        {
          title: 'Funcionalidades',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/gestion/funcionalidades',
        },
        {
          title: 'Perfiles/Roles',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/gestion/roles',
        },

      ],
    },

    //PAGES
    { headTitle: '' },
    {
      title: 'Vehículos',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
      
        {
          title: 'Listado',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/vehiculos/vehiculos',
        },
      

      ],
    },

     //PAGES
     { headTitle: '' },
     {
       title: 'Seguros',
       icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
     </svg>`,
       dirchange: false,
       type: 'sub',
       active: false,
       children: [
       
         {
           title: 'Listado',
           dirchange: false,
           type: 'link',
           active: false,
           selected: false,
           path: '/apps/seguros/seguros',
         },
       
 
       ],
     },

     //PAGES
     { headTitle: '' },
     {
       title: 'Asegurados',
       icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
     </svg>`,
       dirchange: false,
       type: 'sub',
       active: false,
       children: [
       
         {
           title: 'Creación',
           dirchange: false,
           type: 'link',
           active: false,
           selected: false,
           path: '/apps/asegurados/new-asegurado',
         },
         {
          title: 'Carga masiva',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/asegurados/upload-asegurados',
        },
        {
          title: 'Consulta',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/asegurados/search-asegurados',
        },
       
 
       ],
     },
     {
      title: 'Solicitudes',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Consulta',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/solicitudes/search-solicitudes',
        },
        {
          title: 'Nueva Solicitud',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/solicitudes/new-solicitud',
        },
      ],
    },
    {
      title: 'Planes',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Planes',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/planes'
        },
       
      ],
    },
    {
      title: 'Tarifarios',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Asistencia Vial',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/tarifarios'
        },
        {
          title: 'Servicios Viales',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/tarifas'
        }
       
      ],
    },
    {
      title: 'Reportes',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Servicios',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/reporte-servicios'
        },
        {
          title: 'Financiero',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/reporte-financiero'
        },
        {
          title: 'Satisfacción',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/reporte-satisfaccion'
      }
       
      ],
    },
    {
      title: 'Proveedores',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Mapa',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/apps/map-proveedores'
        },
       
      ],
    },
    
   
   


    // APPS
   /* { headTitle: 'GENERAL' },
    {
      title: ' Forms',
      icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Form Advanced',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/form-advanced',
        },
        {
          title: 'Form Elements',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Inputs',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/inputs',
            },
            {
              title: 'Checks & Radios',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/checks-radios',
            },
            {
              title: 'Input Groups',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/input-groups',
            },
            {
              title: 'Form Select',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/form-select',
            },
            {
              title: 'Range Sliders',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/range-sliders',
            },
            {
              title: 'Input Masks',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/input-masks',
            },
            {
              title: 'File Uploads',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/file-uploads',
            },
            {
              title: 'Date,Time Picker',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/date-time-picker',
            },
            {
              title: 'Color Pickers',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-elements/color-pickers',
            },
          
           
          
          
        
          ],
        },
        {
          title: 'Floating Labels',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/floating-labels',
        },
        {
          title: 'Form Layouts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/form-layouts',
        },
        {
          title: 'Form Editors',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Angular Editor',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/forms/form-editors/quill-editor',
            },
          ],
        },
        {
          title: 'Validations',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/validations',
        },
        {
          title: 'Ng select',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/forms/ng-select',
        },
      ],
    },
   {
      title: ' UI Elements',
      icon: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Alerts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/alerts',
        },
        {
          title: 'Badge',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/badge',
        },
        {
          title: 'Breadcrumb',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/breadcrumb',
        },
        {
          title: 'Buttons',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/buttons',
        },
        {
          title: 'Button Group',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/buttongroup',
        },
        {
          title: 'Cards',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/cards',
        },
        {
          title: 'Dropdowns',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/dropdowns',
        },
        {
          title: 'Images & Figures',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/images-figures',
        },
        {
          title: 'Links & Interactions',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/links-interactions',
        },
        {
          title: 'List Group',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/listgroup',
        },
        {
          title: 'Navs Tabs',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/navtabs',
        },
        {
          title: 'Object Fit',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/objectfit',
        },
        {
          title: 'Pagination',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/pagination',
        },
        {
          title: 'Popovers',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/popovers',
        },
        {
          title: 'Progress',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/progress',
        },
        {
          title: 'Spinners',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/spinners',
        },
        {
          title: 'Toasts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/toasts',
        },
        {
          title: 'Tooltips',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/tooltips',
        },
        {
          title: 'Typography',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/uielements/typography',
        },
      ],
    },
    {
      title: 'Advanced Ui',
      icon: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Accordions & Collapse',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/accordions',
        },
       
        {
          title: 'Carousel',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/carousel',
        },
        {
          title: 'Draggable Cards',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/draggable-cards',
        },
        {
          title: 'Media Player',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/media-player',
        },
        {
          title: 'Modals & Closes',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/modals-closes',
        },
        {
          title: 'Navbar',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/navbar',
        },
        {
          title: 'Offcanvas',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/offcanvas',
        },
        {
          title: 'Placeholders',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/placeholders',
        },
        {
          title: 'Ratings',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/rating',
        },
        {
          title: 'Ribbons',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/ribbons',
        },
        {
          title: 'Scrollspy',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/scrollspy',
        },
        {
          path: '/advancedui/sortable-js',
          title: 'Sortable JS',
          type: 'link',
          dirchange: false,
          active: false,
          selected: false,
        },
        {
          title: 'Swiper JS',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/swiperjs',
        },
        {
          title: 'Tour',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/advancedui/tour',
        },
      ],
    },
    {
      title: ' Utilities',
      icon: `   <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Avatars',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/avatars',
        },
        {
          title: 'Borders',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/borders',
        },
        {
          title: 'Breakpoints',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/breakpoints',
        },
        {
          title: 'Colors',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/colors',
        },
        {
          title: 'Columns',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/columns',
        },
        {
          title: 'Css Grid',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/css-grid',
        },
        {
          title: 'Flex',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/flex',
        },
        {
          title: 'Gutters',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/gutters',
        },
        {
          title: 'Helpers',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/helpers',
        },
        {
          title: 'Positions',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/positions',
        },
        {
          title: 'Additional Content',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/utilities/additional-content',
        },
      ],
    },
    {
      title: 'Widgets',
      icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>`,
      active: false,
      selected: false,
      path: '/widgets',
      dirchange: false,
      type: 'link',
    },
  


    //TABLES
    { headTitle: 'MAPS & ICONS' },
    {
      title: 'Maps',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        // {
        //   title: 'Google Maps',
        //   dirchange: false,
        //   type: 'link',
        //   active: false,
        //   selected: false,
        //   path: '/maps/google-map',
        // },
        {
          title: 'Leaflet Maps',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/maps/leaflet-map',
        },
        
      ],
    },
    {
      title: 'Icons',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>`,
      active: false,
      selected: false,
      path: '/icons',
      dirchange: false,
      type: 'link',
    },
 
    //CHARTS
    { headTitle: 'TABLES & CHARTS' },

    {
      title: 'Charts',
      icon: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Apex Charts',
          dirchange: false,
          type: 'sub',
          active: false,
          selected: false,
          children: [         
                {
                  title: 'Area Charts',
                  dirchange: false,
                  type: 'link',
                  active: false,
                  selected: false,
                  path: '/charts/apex-charts/area-charts',
                },
            {
              title: 'Line Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/line-charts',
            },
            {
              title: 'Column Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/column-charts',
            },
            {
              title: 'Bar Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/bar-charts',
            },
            {
              title: 'Mixed Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/mixed-charts',
            },
            {
              title: 'Range-Area Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/range-area-charts',
            },
            {
              title: 'Timeline Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/timeline-charts',
            },
            {
              title: 'Funnel Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/funnel-charts',
            },
            {
              title: 'Candlestick Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/candlestick-charts',
            },
            {
              title: 'Boxplot Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/boxplot-charts',
            },
            {
              title: 'Bubble Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/bubble-charts',
            },
            {
              title: 'Scatter Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/scatter-charts',
            },
            {
              title: 'Heatmap Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/heatmap-charts',
            },
            {
              title: 'Treemap Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/treemap-charts',
            },
            {
              title: 'Pie Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/pie-charts',
            },
            {
              title: 'Radialbar Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/radialbar-charts',
            },
            {
              title: 'Radar Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/radar-charts',
            },
            {
              title: 'Polararea Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/polararea-charts',
            },
            {
              title: 'Slope Charts',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/charts/apex-charts/slope-charts',
            },
          ],
        },
        {
          title: 'Chartjs Charts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/charts/chartjs-charts',
        },
        {
          title: 'Echart Charts',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/charts/echart-charts',
        },
      ],
    },
    {
      title: 'Tables',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
    </svg>`,
      dirchange: false,
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          title: 'Tables',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/tables',
        },
        {
          title: 'ngx-easy-table',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/ngx-easy-table',
        },
        {
          title: 'Angular Material Tables',
          dirchange: false,
          type: 'link',
          active: false,
          selected: false,
          path: '/tables/angular-material-table',
        },
      ],
    },*/


  ];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
