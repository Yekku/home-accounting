import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpService } from './shared/services/http.service';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [HttpService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
