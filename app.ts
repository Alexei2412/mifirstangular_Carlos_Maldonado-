import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './components/main-header/main-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainHeader], 
  templateUrl: './app.html', 
  styleUrl: './app.css'      
})
export class App { 
  title = 'app-recetas';
}

