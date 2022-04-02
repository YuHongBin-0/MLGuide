import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipInfoPage } from './equip-info.page';

describe('EquipInfoPage', () => {
  let component: EquipInfoPage;
  let fixture: ComponentFixture<EquipInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
