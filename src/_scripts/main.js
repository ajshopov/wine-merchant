// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Fans from '../_modules/fans/fans';

$(() => {
  new Fans(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
