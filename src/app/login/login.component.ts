
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AxiosService } from '../services/axios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private formbuilder: FormBuilder, private router: Router, private service: AuthService, private axiosService: AxiosService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f():{[key:string]:AbstractControl}{
    return this.loginForm.controls
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.service.isLogged = true
      this.axiosService.login('https://ketiketelauri123-001-site1.jtempurl.com/api/account/login', this.loginForm.value).subscribe({
        next: (data) => {
          console.log('Login successful', data);
          this.router.navigate(['/welcome']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login failed');
        }
      });
    }
  }

}
