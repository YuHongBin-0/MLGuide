import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmblemInfoPopComponent } from './emblem-info-pop.component';

describe('EmblemInfoPopComponent', () => {
  let component: EmblemInfoPopComponent;
  let fixture: ComponentFixture<EmblemInfoPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmblemInfoPopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmblemInfoPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
