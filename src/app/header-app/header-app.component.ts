import { Component, EventEmitter, HostListener, Output, Directive, ElementRef, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user-component/user.model'; // Đường dẫn đến file user.model.ts
@Component({
  selector: 'app-header-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-app.component.html',
})

export class HeaderAppComponent {
  @Output() dataChange = new EventEmitter<any>();
  @Input({required: true}) user : any; // Đường dẫn đến file user.model.ts
  
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
  console.log('User is scrolling');
  }
}
