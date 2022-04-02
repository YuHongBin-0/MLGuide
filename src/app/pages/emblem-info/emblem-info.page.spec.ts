import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmblemInfoPage } from './emblem-info.page';

describe('EmblemInfoPage', () => {
  let component: EmblemInfoPage;
  let fixture: ComponentFixture<EmblemInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmblemInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmblemInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
