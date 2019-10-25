import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    // NgbdCarouselBasic
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  // exports: [NgbdCarouselBasic],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
