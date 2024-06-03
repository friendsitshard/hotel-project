import { Component } from '@angular/core';
import { CarouselComponent } from "../welcome/carousel/carousel.component";
import { HeaderComponent } from "../header/header.component";
import { HotelInfoComponent } from "./hotel-info/hotel-info.component";

@Component({
    selector: 'app-hotel',
    standalone: true,
    templateUrl: './hotel.component.html',
    styleUrl: './hotel.component.css',
    imports: [CarouselComponent,  HeaderComponent, HotelInfoComponent]
})
export class HotelComponent {

}
