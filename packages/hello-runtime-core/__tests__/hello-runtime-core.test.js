import Hello from '../src/index'

describe('@iworld/hello-runtime-core', () => {
  it('测试Hello入口', () => {
    const hello = new Hello('world')
    expect(hello.say()).toBe('Hello, World')
  })
});
