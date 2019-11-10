import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { SecurityComponent } from './security/security/security.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './security/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './security/guards/auth.guard';
import { NewPollComponent } from './poll/new-poll/new-poll.component';
import { PollModule } from './poll/poll.module';
import { MypollComponent } from './poll/mypoll/mypoll.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path:'login', component: SecurityComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'newpoll', component: NewPollComponent, canActivate: [AuthGuard]},
  {path:'mypolls', component: MypollComponent, canActivate: [AuthGuard]},
  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    HomeModule,
    DashboardModule,
    PollModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
