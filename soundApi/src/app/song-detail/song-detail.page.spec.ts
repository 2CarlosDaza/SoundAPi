import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongDetailPage } from './song-detail.page';

describe('SongDetailPage', () => {
  let component: SongDetailPage;
  let fixture: ComponentFixture<SongDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
