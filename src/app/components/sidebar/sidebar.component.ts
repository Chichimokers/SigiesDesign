import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Datos del menú lateral con iconos
  menuItems = [
    { icon: 'fas fa-code', label: 'Codificadores' },
    { icon: 'fas fa-list-alt', label: 'Plan de plazas general' },
    { icon: 'fas fa-cogs', label: 'Plan de plazas procesamiento' },
    { icon: 'fas fa-history', label: 'Historial Plan de plazas' },
    { icon: 'fas fa-graduation-cap', label: 'Preuniversitario' },
    { icon: 'fas fa-user-graduate', label: 'Estudiante' },
    { icon: 'fas fa-check-circle', label: 'Requisitos Adicionales' },
    { icon: 'fas fa-file-alt', label: 'Solicitud' },
    { icon: 'fas fa-user-check', label: 'Estudiante eximido' }
  ];
  isSidebarVisible : boolean = true  ;
 toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Alterna el estado
  }
}
