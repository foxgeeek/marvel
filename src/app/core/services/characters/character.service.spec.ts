import { CharacterService } from './character.service';
import { TestBed } from '@angular/core/testing';

describe('CharacterService', () => {
  let service: CharacterService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
