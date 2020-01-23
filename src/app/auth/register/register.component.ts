import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from 'src/app/core/widget/snackbar/snackbar.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  errorMessage = ''

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
    
    ) {

      this.registerForm = fb.group({
        username:['',[Validators.required]],
        password: ['',[Validators.required]],
        fullName: ['', [Validators.required]],
      })


      
     
      

     }



  ngOnInit() {

  }

  onSubmit(){
    if(this.registerForm.valid)
    {
      this.authService.registerUser(this.registerForm.value)
      .subscribe(res => {
        this.router.navigate(['/auth/'])
        this.toastService.showToast("registered successfully "+this.registerForm.get('fullName').value)
      },

      error => {
        this.toastService.showToast(Object.keys(error.error).map(item => error.error[item]));
      }
      
      )
    }
  }


 
  public get usernameCtrl()  {
    return this.registerForm.get('username')
  }
  public get passwordCtrl()  {
    return this.registerForm.get('password')
  } 
  public get fullNameCtrl()  {
    return this.registerForm.get('fullName')
  }

}
