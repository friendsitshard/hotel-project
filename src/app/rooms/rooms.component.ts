import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../services/axios.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  data: any;

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService
      .getData(
        'https://ketiketelauri123-001-site1.jtempurl.com/api/roomtypes/getallroomtypewithimages'
      )
      .subscribe(
        (data) => {
          this.data = data;
          console.log(this.data);
        },
        (error) => {
          console.error('Error fetching rooms data:', error);
        }
      );
  }

  
}
