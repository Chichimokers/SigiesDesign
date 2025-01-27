import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: false,

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
 
modules = [
  { number: 1, title: 'MÓDULO ORGANIZACIÓN' },
  { number: 2, title: 'MÓDULO EXÁMEN' },
  { number: 3, title: 'MÓDULO ASIGNACIÓN' },
  { number: 4, title: 'MÓDULO GENERAL' }
];

trackByModule(index: number, module: any): number {
  return module.number; 
}

}
