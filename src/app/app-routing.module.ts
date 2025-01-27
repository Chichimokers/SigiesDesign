import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';

// app-routing.module.ts
const routes: Routes = [

      { path: 'organizacion', },

      { path: 'examen', },

      { path: 'asignacion' },

      { path: '', redirectTo: 'organizacion', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
