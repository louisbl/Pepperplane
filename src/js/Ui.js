const dbg = debug('app:Ui')

const HIDE_LOADING_DELAY = 2

export default class Ui {
  constructor () {
    dbg('Initialize Ui')
    this.scrollDisplayed = true
    this.initElements()
    this.initEvents()
    TweenMax.set('path', {drawSVG: '0%', autoAlpha: 0})
  }

  initElements () {
    this.$els = {
      sectionWrapper: document.getElementsByClassName('section__wrapper')[0],
      paths: document.getElementsByTagName('path'),
      main: document.getElementsByTagName('main')[0],
      loaderDots: document.getElementsByClassName('loader-dots'),
      mouseScroll: document.getElementsByClassName('mouse-scroll'),
      navTriggerBars: document.getElementsByClassName('nav-trigger-bar')
    }
  }

  initEvents () {
    this.$els.sectionWrapper.addEventListener('scroll', this.onScroll.bind(this))
  }

  fixScrollBarSection () {
    setTimeout(() => {
      const scrollBarWidth = this.$els.sectionWrapper.offsetWidth - this.$els.sectionWrapper.clientWidth
      this.$els.sectionWrapper.style.width = `${this.$els.sectionWrapper.offsetWidth + scrollBarWidth}px`
    }, 1500)
  }

  hideLoading () {
    new TimelineMax()
      .to(this.$els.loaderDots, 0.5, {autoAlpha: 0, delay: HIDE_LOADING_DELAY, ease: Power3.easeIn})
      .to(this.$els.main, 0.5, { scale: 1 })
      .call(this.showNavTrigger, null, this, '+=0.5')
      .call(this.showTitle, null, this)
      .call(this.showScroll, null, this, '+=0.5')
  }

  showTitle () {
    const tl = new TimelineLite()

    for (let i = 0; i < this.$els.paths.length; i++) {
      tl.add(TweenMax.to(this.$els.paths[i], 0.5, {drawSVG: '100%', autoAlpha: 1}), `start+=${i / 10}`)
    }
  }

  showNavTrigger () {
    TweenMax.staggerFromTo(this.$els.navTriggerBars, 0.3, {autoAlpha: 0, xPercent: -100}, {autoAlpha: 1, xPercent: 0, ease: Power2.easeIn}, 0.2)
  }

  onScroll () {
    if (this.scrollDisplayed) {
      this.hideScroll()
    }
  }

  showScroll () {
    TweenMax.to(this.$els.mouseScroll, 1, {y: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut})
  }

  hideScroll () {
    dbg('hide scroll')
    TweenMax.to(this.$els.mouseScroll, 0.5, {ease: Power1.easeInOut, autoAlpha: 0})
    this.scrollDisplayed = false
  }
}
