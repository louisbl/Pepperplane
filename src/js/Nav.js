import TweenMax from '../../node_modules/gsap/src/minified/TweenMax.min'

export default class Menu {
  constructor () {
    this.initElements()
    this.initEvents()
    this.setBorderSize()
    TweenMax.set(this.$els.navLinks, {autoAlpha: 0})
  }

  initElements () {
    this.$els = {
      navTrigger: document.getElementsByClassName('nav__trigger')[0],
      nav: document.getElementsByTagName('nav')[0],
      navLinks: document.querySelectorAll('.nav__content li')
    }
  }

  initEvents () {
    window.addEventListener('resize', this.setBorderSize.bind(this))
    this.$els.navTrigger.addEventListener('click', this.onMenuTriggerClick.bind(this))
  }

  setBorderSize () {
    this.$els.nav.style.borderWidth = `${((window.innerHeight - 120) / 2) + 1}px`
  }

  onMenuTriggerClick () {
    this.$els.nav.classList.toggle('active')
    this.$els.navTrigger.classList.toggle('active')

    if (this.$els.nav.classList.contains('active')) {
      TweenMax.staggerFromTo(this.$els.navLinks, 0.5, {x: -50, autoAlpha: 0}, {x: 0, autoAlpha: 1, force3D: false, ease: Power3.easeOut, delay: 0.5}, 0.3)
    } else {
      TweenMax.to(this.$els.navLinks, 0.2, {autoAlpha: 0})
    }
  }
}
