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
// En tu componente
toggleExpansion(item: any) {
  if (item.children) {
    this.sidebarService.toggleItemExpansion(item);
  }
}
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

  handleItemClick(item: any) {
    // Si el sidebar está cerrado, abrirlo primero
    if (!this.isSidebarVisible) {
      this.toggleSidebar();
      // Si el item tiene hijos, expandirlo después de abrir el sidebar
      setTimeout(() => {
        if (item.children) {
          this.toggleExpansion(item);
        }
      }, 300); // Esperar a que termine la animación del sidebar
    } else {
      // Si ya está abierto, manejar la expansión normalmente
      if (item.children) {
        this.toggleExpansion(item);
      }
    }
  }

}
