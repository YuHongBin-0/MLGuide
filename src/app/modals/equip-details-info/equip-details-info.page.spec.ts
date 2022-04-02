import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipDetailsInfoPage } from './equip-details-info.page';

describe('EquipDetailsInfoPage', () => {
  let component: EquipDetailsInfoPage;
  let fixture: ComponentFixture<EquipDetailsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipDetailsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipDetailsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
