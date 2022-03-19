function greet(name) {
  let response = 'Hello there!';
  
  if (typeof name === 'string') {
    response = `Hello, ${name}.`;
  }

  if (typeof name === 'string' && name.toUpperCase() === name) {
    response = `HELLO, ${name}!`;
  }
  
  if (typeof name === 'object') {
    response = 'Hello';
    name.forEach(element => {
      response += `, ${element}`;
    });
  }

  return response;
}
