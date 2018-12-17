import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { ReactiveForms2Component } from './pages/reactive-forms2/reactive-forms.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';
import { VirtualScrollComponent } from './pages/virtual-scroll/virtual-scroll.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'templateForms',
    component: TemplateDrivenFormsComponent
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormsComponent
  },
  {
    path: 'reactive2Forms',
    component: ReactiveForms2Component
  },
  {
    path: 'protegida',
    component:   ProtegidaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'virtualScroll',
    component:   VirtualScrollComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
