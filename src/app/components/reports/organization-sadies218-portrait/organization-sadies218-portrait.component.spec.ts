import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSadies218PortraitComponent } from './organization-sadies218-portrait.component';

describe('OrganizationSadies218PortraitComponent', () => {
  let component: OrganizationSadies218PortraitComponent;
  let fixture: ComponentFixture<OrganizationSadies218PortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationSadies218PortraitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationSadies218PortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
