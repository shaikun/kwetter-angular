import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KweetListComponent } from './core/kweet/components/kweet-list/kweet-list.component';
import { UserDetailComponent } from './core/user/components/user-detail/user-detail.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { UtcDatePipe } from './core/pipes/utc-date';
import { KweetService } from './core/kweet/kweet.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './core/user/user.service';
import { PusherService } from './core/services/pusher/pusher.service';
import { AuthService } from './core/auth/auth.service';
import { Interceptor } from './interceptor';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        KweetListComponent,
        UserDetailComponent,
        UtcDatePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [KweetService, UserService, PusherService, AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
