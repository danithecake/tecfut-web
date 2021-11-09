/* global jest */
global.console = {
  ...console,
  error: jest.fn()
}
