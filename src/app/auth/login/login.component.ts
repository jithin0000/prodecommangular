import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from 'src/app/core/widget/snackbar/snackbar.component';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  errorMessage = ''

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
    
    ) {

      this.loginForm = fb.group({
        username:['',[Validators.required]],
        password: ['',[Validators.required]]
      })

     }



  ngOnInit() {

  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      this.authService.loginUser(this.loginForm.value)
      .subscribe(res => {
        
        if (res.success) {
          this.toastService.showToast("login successfull")
          this.router.navigate(['/'])
          localStorage.setItem('_token', res.token)
        }

      },

      error => {
        const errorMessage = Object.keys(error.error).map(item => error.error[item]);
        this.toastService.showToast(errorMessage);
      }
      
      )
    }
  }


  

  public get usernameCtrl()  {
    return this.loginForm.get('username')
  }
  public get passwordCtrl()  {
    return this.loginForm.get('password')
  } 

}
