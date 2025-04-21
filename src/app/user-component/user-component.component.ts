import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [FormsModule], 
  standalone: true,
  templateUrl: './user-component.component.html',
})
export class UserComponentComponent {

  @Output() dataChange = new EventEmitter<any>();

  name = '';
  email = '';
  age = 0;
  address = '';
  phone = '';
  constructor(private router: Router) { }

  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      age: this.age,
      address: this.address,
      phone: this.phone
    };

    this.dataChange.emit(data);
    this.router.navigate(['/info'], { state: { dataUser: data } });
    alert('Data emitted: ' + JSON.stringify(data));
  }
  
}
