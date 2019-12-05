import Hello from '../dist/hello.esm'

describe('@iworld/hello-runtime-core', () => {
  it('测试Hello入口', () => {
    const hello = new Hello('world')
    expect(hello.say()).toBe('Hello, World')
  })
});
