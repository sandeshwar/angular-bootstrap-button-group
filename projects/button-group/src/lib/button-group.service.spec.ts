import { TestBed, inject } from '@angular/core/testing';

import { ButtonGroupService } from './button-group.service';

describe('ButtonGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonGroupService]
    });
  });

  it('should be created', inject([ButtonGroupService], (service: ButtonGroupService) => {
    expect(service).toBeTruthy();
  }));
});
