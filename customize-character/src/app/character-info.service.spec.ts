import { TestBed } from '@angular/core/testing';

import { CharacterInfoService } from './character-info.service';

describe('CharacterInfoService', () => {
  let service: CharacterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
