import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'; 

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) { return new TranslateHttpLoader(http,"./assets/i18n/",".json"); }

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader, 
        useFactory: HttpLoaderFactory, 
        deps: [HttpClient] 
      } })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
