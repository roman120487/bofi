import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrendsComponent } from './brends/brends.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CotelsComponent } from './products/cotels/cotels.component';
import { VentilationComponent } from './products/ventilation/ventilation.component';
import { FrozenComponent } from './products/frozen/frozen.component';
import { AdminBrendsComponent } from './admin/admin-brends/admin-brends.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminPowerComponent } from './admin/admin-power/admin-power.component';
import { AdminCallbackComponent } from './admin/admin-callback/admin-callback.component';
import { AdminCountryComponent } from './admin/admin-country/admin-country.component';
import { ReferenceComponent } from './reference/reference.component';
import { HotPumpsComponent } from './products/hot-pumps/hot-pumps.component';
import { CotelPipe } from './shared/pipes/cotel.pipe';
import { FrozenPipe } from './shared/pipes/frozen.pipe';
import { HotpumpsPipe } from './shared/pipes/hotpumps.pipe';
import { AirPipe } from './shared/pipes/air.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowerPipe } from './shared/pipes/power.pipe';

// import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    ContactsComponent,
    BrendsComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    CotelsComponent,
    VentilationComponent,
    FrozenComponent,
    AdminBrendsComponent,
    AdminProductsComponent,
    AdminPowerComponent,
    AdminCallbackComponent,
    AdminCountryComponent,
    ReferenceComponent,
    HotPumpsComponent,
    CotelPipe,
    FrozenPipe,
    HotpumpsPipe,
    AirPipe,
    PowerPipe,
    // NgbdCarouselBasic

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'bofi'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, BrowserAnimationsModule, // imports firebase/storage only needed for storage features
  ],
  // exports: [NgbdCarouselBasic],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
