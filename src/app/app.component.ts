import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CourierModule } from '../courier/courier.module';
import { ClientModule } from '../client/client.module';
@Component({
  standalone: true,
  encapsulation:ViewEncapsulation.None,
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CourierModule,ClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wassaly';
}
