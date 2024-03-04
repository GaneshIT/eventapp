import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
//how to create own component  @Component-decorator
@Component({
  selector: 'app-root', //<app-root>   obj.AddEvent();
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventapp';
  isLoggedIn = false;
  username?: string;
  constructor(private storageService: StorageService, private authService: AuthService) { }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
