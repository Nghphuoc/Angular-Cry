import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from "./user-component/user-component.component";
import { HeaderAppComponent } from "./header-app/header-app.component";

@Component({
  selector: 'app-root',
  imports: [UserComponentComponent, HeaderAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app-angular';
  userData: any;  // Đây là nơi chứa dữ liệu người dùng

  // Hàm nhận dữ liệu từ UserComponentComponent
  onDataChange(data: any) {
    this.userData = data;
    console.log('Received user data in AppComponent:', this.userData);
  }
}
