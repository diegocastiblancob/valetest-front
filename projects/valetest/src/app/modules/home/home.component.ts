import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuItems: any = [
    {
      name: 'Gestión del sistema',
    },
    {
      name: 'Gestión de usuarios',
    },
    {
      name: 'Gestión de programas',
    },
    {
      name: 'Gestión de misiones',
    },
    {
      name: 'Gestión de estilos y presentación',
    }
  ];
  activeSubMenuIndex: number = -1;
}
