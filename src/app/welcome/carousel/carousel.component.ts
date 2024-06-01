import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../services/axios.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  images: string[] = [];
  currentImageIndex = 0;

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.getData('https://ketiketelauri123-001-site1.jtempurl.com/api/roomtypes/getallroomtypewithimages')
      .subscribe({
        next: (data) => {
          this.images = data.map((item: { image: any; }) => item.image); // Assuming 'data' is an array of objects with 'image' properties
        },
        error: (error) => {
          console.error('Error fetching images:', error);
        }
      });
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  showPreviousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1; // Wrap around to the last image
    }
  }

  setCurrentImageIndex(index: number): void {
    this.currentImageIndex = index;
  }
  
}
