import { Component } from '@angular/core';
import { ApiImagesService } from '../api-images.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fakeapiimages',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './fakeapiimages.component.html',
  styleUrl: './fakeapiimages.component.css',
  providers :[ApiImagesService]
})
export class FakeapiimagesComponent {

  public userProduct : any ;

  constructor(public imageService : ApiImagesService){

  }
  ngOnInit(){
    this.imageService.getdata().subscribe(imageData =>{
      this.userProduct = imageData ;
    })
    
  }
}
