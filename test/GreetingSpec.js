/**
 * java-script-test
 *
 * Copyright © 2016 Ramon Aseniero. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

  it('Can say hello', () => {
    const greeting = new Greeting();
    const message = greeting.hello();
    expect(message).to.be.equal('Welcome, Guest!');
  });

});
