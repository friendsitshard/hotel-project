import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ReactiveFormsModule, NgIf, NgClass, HeaderComponent]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Handle the form submission, e.g., send it to an API
      this.successMessage = "Your message has been sent.";
      this.contactForm.reset();
      this.submitted = true;
    } else {
      if (this.f['name'].errors?.['required']) {
        this.errorMessage = 'You forgot to fill in your name.';
      } else if (this.f['email'].errors?.['required']) {
        this.errorMessage = 'You forgot to fill in an email.';
      } else if (this.f['email'].errors?.['email']) {
        this.errorMessage = 'The email address is not valid.';
      } else if (this.f['phone'].errors?.['required']) {
        this.errorMessage = 'You forgot to fill in your phone number.';
      } else if (this.f['phone'].errors?.['pattern']) {
        this.errorMessage = 'Тhe number must consist of numbers.';
      }
    }
  }

  

}