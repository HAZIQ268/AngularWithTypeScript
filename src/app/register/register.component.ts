import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
email :string = "";
password :string = "";
check :boolean = false;

myfunc() :void {
  if(this.email == "" || this.password == "" || this.check == false){
    alert("please fill out all the fields !");

  }
  else{
    alert("Your Form Has Been Submited 😎");
    
  }
}

}
