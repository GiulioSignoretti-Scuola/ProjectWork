import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
