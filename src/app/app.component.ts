import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoleComponent } from "./mole/mole.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'Whack a mole';
}
