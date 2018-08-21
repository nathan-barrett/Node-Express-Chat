// Global dependencies
const expect = require('expect');
// Local dependencies
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Nathan';
    const text = 'test message';
    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toHaveProperty('from', from, 'text', text);
  });
});
