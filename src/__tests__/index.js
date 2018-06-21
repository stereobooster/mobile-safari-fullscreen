import React from 'react'
import renderer from 'react-test-renderer'
import FullScreen, {isIOSSafari, addClass, removeClass} from '../'

describe('isIOSSafari', () => {
  it('detects iPhone', () => {
    expect(isIOSSafari({navigator: {userAgent: 'WebKit iPhone'}})).toBe(true)
  })
  it('detects iPad', () => {
    expect(isIOSSafari({navigator: {userAgent: 'WebKit iPad'}})).toBe(true)
  })
  it('detects Chrome', () => {
    expect(isIOSSafari({navigator: {userAgent: 'WebKit iPhone CriOS'}})).toBe(
      false,
    )
  })
})

describe('addClass', () => {
  it('works', () => {
    const div = document.createElement('div')
    addClass(div, 'test')
    expect(div.className).toBe(' test')
  })
})

describe('removeClass', () => {
  it('works', () => {
    const div = document.createElement('div')
    div.className = ' test'
    removeClass(div, 'test')
    expect(div.className).toBe('')
  })
})

describe('FullScreen', () => {
  it('Renders without crashing in Android', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'WebKit Android',
    })

    const component = renderer.create(
      <FullScreen classNames={{iosFix: 'iosFix'}} isOpen={true}>
        {'test'}
      </FullScreen>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    component.unmount()
  })

  it('Renders without crashing in Android closed', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'WebKit Android',
    })
    const component = renderer.create(
      <FullScreen classNames={{iosFix: 'iosFix'}} isOpen={false}>
        {'test'}
      </FullScreen>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    component.unmount()
  })

  it('Renders without crashing in iPhone', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'WebKit iPhone',
    })
    const component = renderer.create(
      <FullScreen classNames={{iosFix: 'iosFix'}} isOpen={true}>
        {'test'}
      </FullScreen>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    component.unmount()
  })

  it('Renders without crashing in iPhone closed', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: 'WebKit iPhone',
    })
    const component = renderer.create(
      <FullScreen classNames={{iosFix: 'iosFix'}} isOpen={false}>
        {'test'}
      </FullScreen>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    component.unmount()
  })
})
