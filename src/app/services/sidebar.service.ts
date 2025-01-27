import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SidebarService {

  private moduleItems: {
    [key: string]: object;
  } = {
    organizacion: [
      {title:"ORGANIZACION"},
      { icon: 'fas fa-code', label: 'Codificadores' },
      { icon: 'fas fa-list-alt', label: 'Plan de plazas general' },
      { icon: 'fas fa-cogs', label: 'Plan de plazas procesamiento' },
      { icon: 'fas fa-history', label: 'Historial Plan de plazas' },
      { icon: 'fas fa-graduation-cap', label: 'Preuniversitario' },
      { icon: 'fas fa-user-graduate', label: 'Estudiante' },
      { icon: 'fas fa-check-circle', label: 'Requisitos Adicionales' },
      { icon: 'fas fa-file-alt', label: 'Solicitud' },
      { icon: 'fas fa-user-check', label: 'Estudiante eximido' }
    ],
    examen:[
      {title:"EXAMEN"},
      { icon: 'fas fa-check-circle', label: 'Requisitos Adicionales' },
      { icon: 'fas fa-file-alt', label: 'Solicitud' },
      { icon: 'fas fa-user-check', label: 'Estudiante eximido' }
    ],
    asignacion:[
      {title:"ASIGNACION"},
      { icon: 'fas fa-list-alt', label: 'Plan de plazas general' },
      { icon: 'fas fa-cogs', label: 'Plan de plazas procesamiento' },
      { icon: 'fas fa-history', label: 'Historial Plan de plazas' },
    ],

    general:[
      {title:"GENERAL"},
      { icon: 'fas fa-list-alt', label: 'Plan de plazas general' },
      { icon: 'fas fa-cogs', label: 'Plan de plazas procesamiento' },
      { icon: 'fas fa-history', label: 'Historial Plan de plazas' },
    ],


  };


  private activeModule = new BehaviorSubject<string>('organizacion');
  activeModule$ = this.activeModule.asObservable();



  setActiveModule(module: string): void {
    if (this.moduleItems[module]) {
      this.activeModule.next(module);
    } else {
      console.warn(`Módulo "${module}" no existe`);
    }
  }


  getItems(): any | undefined {
    return this.moduleItems[this.activeModule.getValue()];
  }

  addModule(module: string, items: any[]): void {
    this.moduleItems[module] = items;
  }
}
