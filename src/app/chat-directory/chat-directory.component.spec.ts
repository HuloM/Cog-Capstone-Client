import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDirectoryComponent } from './chat-directory.component';

describe('ChatDirectoryComponent', () => {
  let component: ChatDirectoryComponent;
  let fixture: ComponentFixture<ChatDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
