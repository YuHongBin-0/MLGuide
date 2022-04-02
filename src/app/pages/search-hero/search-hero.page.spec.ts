import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHeroPage } from './search-hero.page';

describe('SearchHeroPage', () => {
  let component: SearchHeroPage;
  let fixture: ComponentFixture<SearchHeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
