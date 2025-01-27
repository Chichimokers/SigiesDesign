import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SidebarItem {
  title?: string;
  icon?: string;
  label: string;
  children?: SidebarItem[];
  expanded?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private moduleItems: { [key: string]: any[] } = {
    organizacion: [
      { title: "ORGANIZACIÓN" },

      {
        icon: 'fas fa-code',
        label: 'Codificadores',
        children: [
          { label: 'Nuevo codificador', icon: 'fas fa-plus' },
          { label: 'Administrar', icon: 'fas fa-cog' }
        ]
      },

      {
        icon: 'fas fa-list-alt',
        label: 'Plan de plazas',
        children: [
          { label: 'General', icon: 'fas fa-file-alt' },
          { label: 'Procesamiento', icon: 'fas fa-cogs' },
          { label: 'Historial', icon: 'fas fa-history' }
        ]
      },
      {
        icon: 'fas fa-graduation-cap',
        label: 'Educación',
        children: [
          { label: 'Preuniversitario', icon: 'fas fa-school' },
          { label: 'Estudiantes', icon: 'fas fa-user-graduate' },
          { label: 'Eximidos', icon: 'fas fa-user-check' }
        ]
      }
    ],
    examen: [
      { title: "EXAMEN" },
      {
        icon: 'fas fa-check-circle',
        label: 'Requisitos',
        children: [
          { label: 'Adicionales', icon: 'fas fa-plus-circle' },
          { label: 'Verificación', icon: 'fas fa-clipboard-check' }
        ]
      },
      {
        icon: 'fas fa-file-alt',
        label: 'Solicitudes',
        children: [
          { label: 'Nueva solicitud', icon: 'fas fa-plus' },
          { label: 'Historial', icon: 'fas fa-history' }
        ]
      }
    ],
    asignacion: [
      { title: "ASIGNACIÓN" },
      {
        icon: 'fas fa-users',
        label: 'Plazas',
        children: [
          { label: 'Asignación general', icon: 'fas fa-list' },
          { label: 'Procesamiento', icon: 'fas fa-tasks' },
          { label: 'Reportes', icon: 'fas fa-chart-bar' }
        ]
      }
    ],
    general: [
      { title: "GENERAL" },
      {
        icon: 'fas fa-cogs',
        label: 'Configuración',
        children: [
          { label: 'Parámetros', icon: 'fas fa-wrench' },
          { label: 'Permisos', icon: 'fas fa-shield-alt' },
          { label: 'Auditoría', icon: 'fas fa-clipboard-list' }
        ]
      }
    ]
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

  getItems(): SidebarItem[] {
    return this.moduleItems[this.activeModule.getValue()];
  }

  addModule(module: string, items: SidebarItem[]): void {
    this.moduleItems[module] = items;
  }

  toggleItemExpansion(item: SidebarItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
