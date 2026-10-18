import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-header',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader {

}
