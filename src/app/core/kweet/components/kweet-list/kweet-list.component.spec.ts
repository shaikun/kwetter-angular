import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KweetListComponent } from './kweet-list.component';

describe('KweetListComponent', () => {
  let component: KweetListComponent;
  let fixture: ComponentFixture<KweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KweetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
