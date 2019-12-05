import { capitalize, isArray } from '../src/index'

describe('@iworld/hello-shared-utils', () => {
  it('测试capitalize方法', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('测试isArray方法', () => {
    expect(isArray([])).toBe(true)
    expect(isArray('')).toBe(false)
  })
});
