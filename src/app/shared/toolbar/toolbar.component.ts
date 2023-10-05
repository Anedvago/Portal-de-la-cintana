import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTreeModule, MatIconModule],
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

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      active: node.active,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.buttons;
  }

  hasChild = (_: number, node: any) => node.expandable;
}
