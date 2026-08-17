import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrocomponet } from './registrocomponet';

describe('Registrocomponet', () => {
  let component: Registrocomponet;
  let fixture: ComponentFixture<Registrocomponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrocomponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrocomponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
