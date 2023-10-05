import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button-toolbar.component.html',
  styleUrls: ['./button-toolbar.component.css'],
})
export class ButtonToolbarComponent {}
