import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { FormsModule } from '@angular/forms'; // <- PHẢI có dòng này
import { Router } from '@angular/router';
import { HeaderAppComponent } from "../header-app/header-app.component";

@Component({
  selector: 'app-user-component',
  imports: [FormsModule, HeaderAppComponent], // <- PHẢI có dòng này
  standalone: true, // <- PHẢI có dòng này
  templateUrl: './user-component.component.html',
})
export class UserComponentComponent {

  @Output() dataChange = new EventEmitter<any>();

  name = '';
  email = '';
  age = 0;
  address = '';
  phone = '';
  constructor(private router: Router, private dataUser : User) { }

  dataTest() {
    this.dataUser.setName(this.name);
    this.dataUser.setEmail(this.email);
    this.dataUser.setAge(this.age);
    this.dataUser.setAddress(this.address);
    this.dataUser.setPhone(this.phone);
  }

  onSubmit() {
    const user = new User(this.name, this.email, this.age, this.address, this.phone);
    this.dataChange.emit(this.dataTest);
    this.router.navigate(['/info'], { state: { dataUser: this.dataTest } });
    alert('Data emitted: ' + JSON.stringify(this.dataTest));
  }
  
}
