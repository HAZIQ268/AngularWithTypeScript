import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesService {
  private api = 'https://fakestoreapi.com/products';
  constructor(private http : HttpClient) { 
    
  }
  getdata(){
    return this.http.get(this.api);
  }
}
