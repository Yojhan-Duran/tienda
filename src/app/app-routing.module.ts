// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { CompradorComponent } from './components/comprador/comprador.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'comprador', component: CompradorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
