import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetriDmgChartPage } from './retri-dmg-chart.page';

describe('RetriDmgChartPage', () => {
  let component: RetriDmgChartPage;
  let fixture: ComponentFixture<RetriDmgChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetriDmgChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetriDmgChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
