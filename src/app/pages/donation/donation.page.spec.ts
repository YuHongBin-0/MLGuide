import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonationPage } from './donation.page';

describe('DonationPage', () => {
  let component: DonationPage;
  let fixture: ComponentFixture<DonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
