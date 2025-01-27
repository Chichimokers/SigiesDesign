import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main-content',
  standalone: false,

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  constructor(public servicio : SidebarService){}
  setmodule(modulename: string)
  {
    this.servicio.setActiveModule(modulename)
  }

}
