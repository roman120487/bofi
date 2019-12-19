import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BrendsComponent } from './pages/brends/brends.component';
import { AdminComponent } from './admin/admin.component';
import { CotelsComponent } from './pages/products/cotels/cotels.component';
import { VentilationComponent } from './pages/products/ventilation/ventilation.component';
import { FrozenComponent } from './pages/products/frozen/frozen.component';

import { AdminBrendsComponent } from './admin/admin-brends/admin-brends.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminСharacteristicsComponent } from './admin/admin-characteristics/admin-characteristics.component';
import { AdminCallbackComponent } from './admin/admin-callback/admin-callback.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { HotPumpsComponent } from './pages/products/hot-pumps/hot-pumps.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: '**', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cotels', component: CotelsComponent },
  // { path: 'cotels/:name', component: CotelsComponent },
  { path: 'ventilation', component: VentilationComponent },
  { path: 'frozen', component: FrozenComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'brends', component: BrendsComponent },
  { path: 'reference', component: ReferenceComponent},

  { path: 'hotPumps', component: HotPumpsComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'admin-brends', component: AdminBrendsComponent },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-characteristics', component: AdminСharacteristicsComponent },
      { path: 'admin-callback', component: AdminCallbackComponent },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
