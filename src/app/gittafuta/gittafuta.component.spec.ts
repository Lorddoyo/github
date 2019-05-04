import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittafutaComponent } from './gittafuta.component';

describe('GittafutaComponent', () => {
  let component: GittafutaComponent;
  let fixture: ComponentFixture<GittafutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GittafutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittafutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
