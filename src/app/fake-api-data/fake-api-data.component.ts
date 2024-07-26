import { Component } from '@angular/core';
import { UserdataService, users } from '../userdata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fake-api-data',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './fake-api-data.component.html',
  styleUrl: './fake-api-data.component.css',
  providers:[UserdataService]
})
export class FakeApiDataComponent {

  public users :any;
  constructor(private servecpage :UserdataService){
    
  }
  ngOnInit(){
   this.servecpage.getdata().subscribe(data =>{
      this.users = data;
    })   
  }
}
