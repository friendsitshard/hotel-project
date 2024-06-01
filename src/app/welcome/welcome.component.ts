import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { HeaderComponent } from "../header/header.component";
import { WelcomeInfoComponent } from "./welcome-info/welcome-info.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css',
    imports: [CarouselComponent, HeaderComponent, WelcomeInfoComponent]
})
export class WelcomeComponent {

}
