import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedBuildPage } from './saved-build.page';

describe('SavedBuildPage', () => {
  let component: SavedBuildPage;
  let fixture: ComponentFixture<SavedBuildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedBuildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedBuildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
