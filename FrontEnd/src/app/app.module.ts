import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import{ RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeBODYComponent } from './Component/Home/home-body/home-body.component';
import { CatergoryComponent } from './Component/Catergory/catergory/catergory.component';
import { JSCatergoryComponent } from './Component/Catergory/jscatergory/jscatergory.component';
import { WebCatergoryComponent } from './Component/Catergory/web-catergory/web-catergory.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import {AuthenticationService} from './services/authentication.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {HttpClientModule} from '@angular/common/http'
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';



export function tokenGetter() {
  return localStorage.getItem('id_token');
}

const appRoutes:Routes= [
  {path:'', component:HomeBODYComponent},
  {path:'Catergory', component:CatergoryComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    HomeBODYComponent,
    CatergoryComponent,
    JSCatergoryComponent,
    WebCatergoryComponent,
    NavbarComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
       
      }
    }),
    RouterModule.forRoot(
      appRoutes
    ),
    
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
