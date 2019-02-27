const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it ('requires a user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync(); // validate() for using a callback
    //const message = validationResult.errors.name.message;  //Before ES6
    const { message } = validationResult.errors.name; //ES6
    assert( message === 'Name is required.');
  });
});