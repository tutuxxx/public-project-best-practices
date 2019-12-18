import { say } from '../src/index'

describe('@iworld/hello-cli', () => {
  it('console.log the text "World"', () => {
    console.log = jest.fn();
    say('World');
    expect(console.log.mock.calls[0][0]).toBe('Worldtest');
  });
});
