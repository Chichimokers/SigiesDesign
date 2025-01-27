import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit{
  // Datos del menú lateral con iconos
  constructor(private sidebarService: SidebarService) {}

  items: any = [

  ];

  isSidebarVisible : boolean = true  ;

  ngOnInit(): void {

        // Cargar ítems iniciales (organizacion por defecto)
        this.items = this.sidebarService.getItems();

        // Suscribirse a cambios de módulo
        this.sidebarService.activeModule$.subscribe((module) => {
          this.items = this.sidebarService.getItems();
        });

  }

 toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Alterna el estado
  }
}
