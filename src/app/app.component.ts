import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from "./layouts/auth/auth-layout/auth-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pro-lavel';
}
