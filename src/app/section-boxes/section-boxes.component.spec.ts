import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoxesComponent } from './section-boxes.component';

describe('SectionBoxesComponent', () => {
  let component: SectionBoxesComponent;
  let fixture: ComponentFixture<SectionBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
