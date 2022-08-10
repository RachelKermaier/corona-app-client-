import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportYourPathComponent } from './report-your-path.component';

describe('ReportYourPathComponent', () => {
  let component: ReportYourPathComponent;
  let fixture: ComponentFixture<ReportYourPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportYourPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportYourPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
