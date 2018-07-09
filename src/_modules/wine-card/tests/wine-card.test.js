'use strict';

import WineCard from '../wine-card';

describe('WineCard View', function() {

  beforeEach(() => {
    this.wineCard = new WineCard();
  });

  it('Should run a few assertions', () => {
    expect(this.wineCard);
  });

});
