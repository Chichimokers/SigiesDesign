import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { OrganizationSadies218PortraitComponent } from './components/reports/organization-sadies218-portrait/organization-sadies218-portrait.component';

// app-routing.module.ts
const routes: Routes = [

      {
        path: 'home',component:MainContentComponent
      },
      {path:"OrginazionSadies2180Portrait",component: OrganizationSadies218PortraitComponent}
,
      { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
