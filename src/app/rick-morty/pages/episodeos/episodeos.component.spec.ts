import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeosComponent } from './episodeos.component';

describe('EpisodeosComponent', () => {
  let component: EpisodeosComponent;
  let fixture: ComponentFixture<EpisodeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
