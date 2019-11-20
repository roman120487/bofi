import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrendsComponent } from './brends/brends.component';
import { AdminComponent } from './admin/admin.component';
import { CotelsComponent } from './products/cotels/cotels.component';
import { VentilationComponent } from './products/ventilation/ventilation.component';
import { FrozenComponent } from './products/frozen/frozen.component';

import { AdminBrendsComponent } from './admin/admin-brends/admin-brends.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminСharacteristicsComponent } from './admin/admin-characteristics/admin-characteristics.component';
import { AdminCallbackComponent } from './admin/admin-callback/admin-callback.component';
import { ReferenceComponent } from './reference/reference.component';
import { HotPumpsComponent } from './products/hot-pumps/hot-pumps.component';
import { BegreenComponent } from './reference/begreen/begreen.component';
import { JevenComponent } from './reference/jeven/jeven.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cotels', component: CotelsComponent },
  { path: 'ventilation', component: VentilationComponent },
  { path: 'frozen', component: FrozenComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'brends', component: BrendsComponent },
  { path: 'reference', component: ReferenceComponent},
  { path: 'ref-begreen', component: BegreenComponent },
  { path: 'ref-jeven', component: JevenComponent },

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
