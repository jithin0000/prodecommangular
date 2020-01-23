import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [AuthHomeComponent, RegisterComponent, LoginComponent],
  imports: [
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
