import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToolbarComponent } from '../button-toolbar/button-toolbar.component';
import { ButtonToolbarToggleComponent } from '../button-toolbar-toggle/button-toolbar-toggle.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ButtonToolbarComponent, ButtonToolbarToggleComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  public buttons = [
    { name: 'inicio', active: true, route: 'dashboard' },
    {
      name: 'inventario',
      active: false,
      route: 'inventory',
      children: [
        { name: 'Articulos', active: false, route: 'inventory/articles' },
        { name: 'Servicios', active: false, route: 'inventory/services' },
        { name: 'Categorias', active: false, route: 'inventory/categories' },
        { name: 'Compras', active: false, route: 'inventory/purchases' },
        { name: 'Bajas', active: false, route: 'inventory/discharged' },
      ],
    },
    {
      name: 'reservaciones',
      active: false,
      route: 'reservations',
      children: [
        { name: 'Habitaciones', active: false, route: 'reservations/rooms' },
        { name: 'Checks', active: false, route: 'reservations/checks' },
      ],
    },
    { name: 'punto de venta', active: false, route: 'sales' },
  ];
}
