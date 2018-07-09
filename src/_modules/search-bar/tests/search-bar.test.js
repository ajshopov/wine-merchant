'use strict';

import SearchBar from '../search-bar';

describe('SearchBar View', function() {

  beforeEach(() => {
    this.searchBar = new SearchBar();
  });

  it('Should run a few assertions', () => {
    expect(this.searchBar);
  });

});
