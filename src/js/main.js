import '../styles/core.scss'
import domready from 'domready'
import Nav from './Nav'
import 'gsap'

CSSPlugin.defaultForce3D = false

if (module.hot) {
  module.hot.accept()
}

domready(() => {
  scrollBarFix()
  // remove loader & animate mouse
  new TimelineMax()
    .to('.loader', 0.5, {top: -50, delay: 2, ease: Power3.easeIn})
    .to('.load', 0.2, {autoAlpha: 0})
    .to('.mouse__scroll', 0.8, {y: 20, repeat: 8, yoyo: true, ease: Power1.easeInOut}, '+=2')
  new Nav()
})

const scrollBarFix = () => {
  setTimeout(() => {
    const sectionWrapper = document.getElementsByClassName('section__wrapper')[0]
    const scrollBarWidth = sectionWrapper.offsetWidth - sectionWrapper.clientWidth
    sectionWrapper.style.width = `${sectionWrapper.offsetWidth + scrollBarWidth}px`
  }, 1500)
}

