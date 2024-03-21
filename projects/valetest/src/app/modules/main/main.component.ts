import { Component } from '@angular/core';

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
  sidebarOpen: boolean = false;

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

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
