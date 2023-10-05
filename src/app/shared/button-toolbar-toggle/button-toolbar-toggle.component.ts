import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-toolbar-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button-toolbar-toggle.component.html',
  styleUrls: ['./button-toolbar-toggle.component.css'],
})
export class ButtonToolbarToggleComponent {
  @Input()
  public active: boolean = false;
  @Output()
  public click: EventEmitter<void> = new EventEmitter<void>();

  isDropdownVisible = false;

  public clicked(): void {
    this.click.emit();
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
