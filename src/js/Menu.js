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
      .fromTo('nav', 0.4, {autoAlpha: 0}, {height: '90vh', width: '89vw', autoAlpha: 1, ease: Power1.easeIn}, 'start')
      .to('main', 0.4, {scale: 1.15, ease: Power1.easeIn}, 'start')
      .addCallback(this.toggleTriggerClass.bind(this), 'start+=0.5')
      .staggerFromTo(this.$els.navLinks, 0.5, {x: -50, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power3.easeOut}, 0.3, 'start+=1')
  }

  initElements () {
    this.$els = {
      navTrigger: document.getElementsByClassName('nav__trigger')[0],
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

  toggleTriggerClass () {
    this.$els.navTrigger.classList.toggle('active')
  }
}
