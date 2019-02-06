import { TestBed, inject } from '@angular/core/testing';

import { PostGetService } from './post-get.service';

describe('PostGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostGetService]
    });
  });

  it('should be created', inject([PostGetService], (service: PostGetService) => {
    expect(service).toBeTruthy();
  }));
});
