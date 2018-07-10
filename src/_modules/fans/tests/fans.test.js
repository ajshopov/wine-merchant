'use strict';

import Fans from '../fans';

describe('Fans View', function() {

  beforeEach(() => {
    this.fans = new Fans();
  });

  it('Should run a few assertions', () => {
    expect(this.fans);
  });

});
