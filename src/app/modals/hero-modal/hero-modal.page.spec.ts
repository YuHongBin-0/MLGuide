import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroModalPage } from './hero-modal.page';

describe('HeroModalPage', () => {
  let component: HeroModalPage;
  let fixture: ComponentFixture<HeroModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
