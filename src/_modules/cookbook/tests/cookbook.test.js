'use strict';

import Cookbook from '../cookbook';

describe('Cookbook View', function() {

  beforeEach(() => {
    this.cookbook = new Cookbook();
  });

  it('Should run a few assertions', () => {
    expect(this.cookbook);
  });

});
