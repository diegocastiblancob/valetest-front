import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  menuItems: any = [
    {
      name: 'Gestión del sistema',
      subItems: [
        {
          name: 'Roles y funciones',
          path: '/main'
        },
        {
          name: 'Formulario registro de usuarios',
          path: '/main'
        }
      ]
    },
    {
      name: 'Gestión de usuarios',
      subItems: [
        {
          name: 'Crear y gestionar usuarios',
          path: '/main'
        },
        {
          name: 'Crear usuarios (Individual)',
          path: '/main'
        },
        {
          name: 'Crear usuarios (masivo)',
          path: '/main'
        }
      ]
    },
    {
      name: 'Gestión de programas',
      subItems: [
        {
          name: 'Información general',
          path: '/main'
        },
        {
          name: 'Secciones',
          path: '/main'
        }
      ]
    },
    {
      name: 'Gestión de misiones',
      subItems: [
        {
          name: 'Misiones activas',
          path: '/main'
        },
        {
          name: 'Crear misión',
          path: '/main'
        },
        {
          name: 'Misiones cerradas',
          path: '/main'
        }
      ]
    },
    {
      name: 'Gestión de estilos y presentación',
      subItems: [
        {
          name: 'Diseño del sistema',
          path: '/main/look-and-feel/system-design'
        },
        {
          name: 'Configurar pie de página',
          path: '/main/look-and-feel/system-design'
        }
      ]
    }
  ];
  activeSubMenuIndex: number = -1;
  activeItemMenuIndex: number = -1;

  isHandheld: boolean = false;
  drawerMode: MatDrawerMode = 'side';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .subscribe(result => {
      this.isHandheld = result.matches;
      this.drawerMode =  window.innerWidth < 1023 ? 'over' as MatDrawerMode : 'side' as MatDrawerMode;
    });
  }

  toggleSubMenu(index: number): void {
    if (this.activeSubMenuIndex === index) {
      this.activeSubMenuIndex = -1;
    } else {
      this.activeSubMenuIndex = index;
    }
  }

  toggleItemSubMenu(index: number): void {
    if (this.activeItemMenuIndex === index) {
      this.activeItemMenuIndex = -1;
    } else {
      this.activeItemMenuIndex = index;
    }
  }


}
