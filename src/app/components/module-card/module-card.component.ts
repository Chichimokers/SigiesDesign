import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-card',
  standalone:false,
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent {
  @Input() number!: number;  // El número del módulo
  @Input() title!: string;   // El título del módulo
}
