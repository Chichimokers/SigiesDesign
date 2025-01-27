import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main-content',
  standalone: false,

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
 
modules = [
  { number: 1, title: 'MÓDULO ORGANIZACIÓN',name:'organizacion' },
  { number: 2, title: 'MÓDULO EXÁMEN',name:'examen' },
  { number: 3, title: 'MÓDULO ASIGNACIÓN' ,name:'asignacion'},
  { number: 4, title: 'MÓDULO GENERAL',name:'general' }
];

trackByModule(index: number, module: any): number {
  return module.number; 
}

  constructor(public servicio : SidebarService){}
  setmodule(modulename: string)
  {
    this.servicio.setActiveModule(modulename)
  }

}
