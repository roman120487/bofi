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



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cotels', component: CotelsComponent },
  { path: 'ventilation', component: VentilationComponent },
  { path: 'frozen', component: FrozenComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'brends', component: BrendsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', component: AdminComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
