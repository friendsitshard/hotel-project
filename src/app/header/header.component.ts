import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  today = new Date()
  tomorrow: string;

  constructor() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const year = currentDate.getFullYear();
    const month = (`0${currentDate.getMonth() + 1}`).slice(-2); 
    const day = (`0${currentDate.getDate()}`).slice(-2); 
    this.tomorrow = `${year}-${month}-${day}`;
  }
}
