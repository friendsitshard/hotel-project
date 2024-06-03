
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formbuilder: FormBuilder, private router: Router) { }

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
      alert("You are logged in.");
      this.router.navigate(['/welcome']);
    }
  }
}
