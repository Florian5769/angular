import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';
import { FromNowPipe } from './from-now.pipe';
import { MenuComponent } from './menu/menu.component';
import { LoginFormDemo } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RaceComponent,
    FromNowPipe,
    LoginFormDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [RaceService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }