const dbg = debug('app:Menu')

export default class Menu {
  constructor () {
    dbg('Initialize Menu')
    this.initElements()
    this.initEvents()
    this.isOpen = false

    TweenMax.set(this.$els.navLinks, {autoAlpha: 0})

    this.openTimeline = new TimelineMax({paused: true})
      .to('section', 0.2, {autoAlpha: 0}, 'start')
      .to('main', 0.4, {left: '50vw', width: '45vw', ease: Power1.easeIn}, 'start')
      .to('nav', 0.4, {left: '5vw', ease: Power1.easeIn}, 'start')
      .to(this.$els.navTrigger, 0.4, {left: '+=5%'}, 'start')
      .to('.nav-trigger-bar:nth-child(2)', 0.2, {autoAlpha: 0}, 'start+0.2')
      .to('.nav-trigger-bar:first-child', 0.2, {top: '50%'}, 'start+0.2')
      .to('.nav-trigger-bar:last-child', 0.2, {top: '50%'}, 'start+0.2')
      .to('.nav-trigger-bar:first-child', 0.2, {rotation: 45}, 'start+0.4')
      .to('.nav-trigger-bar:last-child', 0.2, {rotation: -45}, 'start+0.4')
      .staggerFromTo(this.$els.navLinks, 0.5, {x: -50, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power3.easeOut}, 0.3, 'start+1')
      .call(this.triggerNavLinksBefore, null, this, 1.5)
  }

  initElements () {
    this.$els = {
      navTrigger: document.getElementsByClassName('nav-trigger')[0],
      nav: document.getElementsByTagName('nav')[0],
      navLinks: document.querySelectorAll('.nav__content li')
    }
  }

  initEvents () {
    this.$els.navTrigger.addEventListener('click', this.onMenuTriggerClick.bind(this))
  }

  onMenuTriggerClick () {
    if (!this.isOpen) {
      this.open()
    } else {
      this.close()
    }
  }

  triggerNavLinksBefore () {
    dbg('call toggle')
    for (let i = 0; i < this.$els.navLinks.length; i++) {
      this.$els.navLinks[i].classList.toggle('active')
    }
  }

  open () {
    if (!this.isOpen) {
      dbg('open menu')
      this.openTimeline.timeScale(1).play()
      this.isOpen = true
    }
  }

  close () {
    if (this.isOpen) {
      dbg('close menu')
      this.openTimeline.timeScale(1.3).reverse()
      this.isOpen = false
    }
  }
}
