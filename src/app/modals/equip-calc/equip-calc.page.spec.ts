import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipCalcPage } from './equip-calc.page';

describe('EquipCalcPage', () => {
  let component: EquipCalcPage;
  let fixture: ComponentFixture<EquipCalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipCalcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipCalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
