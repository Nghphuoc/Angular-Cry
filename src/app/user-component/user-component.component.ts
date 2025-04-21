import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { FormsModule } from '@angular/forms'; // <- PHẢI có dòng này
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [FormsModule], // <- PHẢI có dòng này
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
  constructor(private router: Router) {}

  onSubmit() {
    const user = new User(this.name, this.email, this.age, this.address, this.phone);

    const data = {
      name: user.getName(),
      email: user.getEmail(),
      age: user.getAge(),
      address: user.getAddress(),
      phone: user.getPhone()
    };

    this.dataChange.emit(data);
    this.router.navigate(['/info'], { state: { dataUser: data } });
    alert('Data emitted: ' + JSON.stringify(data));
  }
  
}
