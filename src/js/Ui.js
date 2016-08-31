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
      paths: document.getElementsByTagName('path')
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
      .to('.loader', 0.5, {top: -50, delay: HIDE_LOADING_DELAY, ease: Power3.easeIn})
      .to('.load', 0.2, {autoAlpha: 0})
      .call(this.showTitle, null, this)
      .call(this.showScroll, null, this, '+=1')
  }

  showTitle () {
    const tl = new TimelineLite()

    for (let i = 0; i < this.$els.paths.length; i++) {
      tl.add(TweenMax.to(this.$els.paths[i], 0.5, {drawSVG: '100%', autoAlpha: 1}), `start+=${i / 10}`)

      this.$els.paths[i].addEventListener('mouseover', this.hideChar.bind(this))

      this.$els.paths[i].addEventListener('mouseleave', this.showChar.bind(this))
    }
  }

  hideChar ({target: element}) {
    TweenMax.to(element, 0.2, {drawSVG: '0%', autoAlpha: 0.5})
  }

  showChar ({target: element}) {
    TweenMax.to(element, 0.1, {drawSVG: '100%', delay: 0.5, autoAlpha: 1})
  }

  onScroll () {
    if (this.scrollDisplayed) {
      this.hideScroll()
    }
  }

  showScroll () {
    TweenMax.to('.mouse__scroll', 1, {y: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut})
  }

  hideScroll () {
    dbg('hide scroll')
    TweenMax.to('.mouse__scroll', 0.5, {ease: Power1.easeInOut, autoAlpha: 0})
    this.scrollDisplayed = false
  }
}
