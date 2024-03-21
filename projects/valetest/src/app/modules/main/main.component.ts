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
          path: '#'
        },
        {
          name: 'Formulario registro de usuarios',
          path: '#'
        }
      ]
    },
    {
      name: 'Gestión de usuarios',
      subItems: [
        {
          name: 'Crear y gestionar usuarios',
          path: '#'
        },
        {
          name: 'Crear usuarios (Individual)',
          path: '#'
        },
        {
          name: 'Crear usuarios (masivo)',
          path: '#'
        }
      ]
    },
    {
      name: 'Gestión de programas',
      subItems: [
        {
          name: 'Información general',
          path: '#'
        },
        {
          name: 'Secciones',
          path: '#'
        }
      ]
    },
    {
      name: 'Gestión de misiones',
      subItems: [
        {
          name: 'Misiones activas',
          path: '#'
        },
        {
          name: 'Crear misión',
          path: '#'
        },
        {
          name: 'Misiones cerradas',
          path: '#'
        }
      ]
    },
    {
      name: 'Gestión de estilos y presentación',
      subItems: [
        {
          name: 'Diseño del sistema',
          path: '#'
        },
        {
          name: 'Configurar pie de página',
          path: '#'
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
