import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button-toolbar.component.html',
  styleUrls: ['./button-toolbar.component.css'],
})
export class ButtonToolbarComponent {
  @Input()
  public active: boolean = false;

  @Output()
  public click: EventEmitter<void> = new EventEmitter<void>();

  public clicked(): void {
    this.click.emit();
  }
}
