import { ApplicationConfig, provideZoneChangeDetection, Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FakeApiDataComponent } from './fake-api-data/fake-api-data.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([
    { path : '',redirectTo :'register',pathMatch:'full'},
    { path : 'register',component:RegisterComponent},
    { path : 'fakeApiData',component:FakeApiDataComponent},
  ]), provideClientHydration()]
};
