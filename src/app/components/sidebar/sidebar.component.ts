import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone:false,

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Datos del menú lateral
  menuItems = [
    { number: 1, label: 'Codificadores' },
    { number: 2, label: 'Plan de plazas general' },
    { number: 3, label: 'Plan de plazas procesamiento' },
    { number: 4, label: 'Historial Plan de plazas' },
    { number: 5, label: 'Preuniversitario' },
    { number: 6, label: 'Estudiante' },
    { number: 7, label: 'Requisitos Adicionales' },
    { number: 8, label: 'Solicitud' },
    { number: 9, label: 'Estudiante eximido' }
  ];
}
