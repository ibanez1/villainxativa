import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExplanationComponent } from './section-explanation.component';

describe('SectionExplanationComponent', () => {
  let component: SectionExplanationComponent;
  let fixture: ComponentFixture<SectionExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
