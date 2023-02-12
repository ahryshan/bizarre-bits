import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoInfoComponent } from './repo-info.component';

describe('RepoInfoComponent', () => {
  let component: RepoInfoComponent;
  let fixture: ComponentFixture<RepoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RepoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
