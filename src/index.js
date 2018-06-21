import React from 'react'
import PropTypes from 'prop-types'
// import classNames from "./index.module.css";

export const addClass = (element /* : HTMLElement*/, klass /*: string*/) =>
  (element.className += ` ${klass}`)

export const removeClass = (element /*: HTMLElement*/, klass /*: string*/) =>
  (element.className = element.className.replace(` ${klass}`, ''))

export const isIOSSafari = window => {
  const userAgent = window.navigator.userAgent
  const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i)
  const webkit = !!userAgent.match(/WebKit/i)
  return iOS && webkit && !userAgent.match(/CriOS/i)
}

export default class FullScreen extends React.Component {
  top = 0
  iOSSafari = typeof window !== 'undefined' && isIOSSafari(window)

  static propTypes = {
    classNames: PropTypes.shape({
      iosFix: PropTypes.string,
    }).isRequired,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    if (this.iOSSafari) {
      const body = document.body
      this.top = body.scrollTop
    }
  }

  hide() {
    const body = document.body
    const html = document.getElementsByTagName('html')[0]
    removeClass(html, this.props.classNames.iosFix)
    removeClass(body, this.props.classNames.iosFix)
    body.scrollTop = this.top
  }

  show() {
    const body = document.body
    const html = document.getElementsByTagName('html')[0]
    this.top = body.scrollTop
    addClass(body, this.props.classNames.iosFix)
    addClass(html, this.props.classNames.iosFix)
  }

  componentWillUnmount() {
    if (this.iOSSafari && this.props.isOpen) {
      this.hide()
    }
  }

  render() {
    if (this.iOSSafari) {
      this.props.isOpen ? this.show() : this.hide()
    }
    return this.props.children
  }
}
