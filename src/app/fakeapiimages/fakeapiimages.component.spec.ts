import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeapiimagesComponent } from './fakeapiimages.component';

describe('FakeapiimagesComponent', () => {
  let component: FakeapiimagesComponent;
  let fixture: ComponentFixture<FakeapiimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeapiimagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeapiimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
