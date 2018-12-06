import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallerComponent } from './recaller.component';

describe('RecallerComponent', () => {
  let component: RecallerComponent;
  let fixture: ComponentFixture<RecallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
