import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { FakeApiDataComponent } from "./fake-api-data/fake-api-data.component";
import { FakeapiimagesComponent } from "./fakeapiimages/fakeapiimages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, FakeApiDataComponent, FakeapiimagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
