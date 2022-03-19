const utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('greet()', () => {
  // Test for no input
  it('Should respond generic with no input', () => {
    expect(greet()).toBe('Hello there!');
  });

  // Test single name input
  it('Should return single name greeting', () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth.');
  });

  // Test shouting name input
  it('Should return shouted', () => {
    expect(greet('JOSE')).toBe('HELLO, JOSE!')
  });

  // Test input of array of names
  it('Should list all names if input is array', () => {
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
  });

  // Test input of many names in array
  it('Should list all name in large array', () => {
    expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
  });
});
