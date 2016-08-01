import TweenMax from '../../node_modules/gsap/src/minified/TweenMax.min'
import './../../node_modules/zepto/dist/zepto.min'

const dbg = debug('app:Ui')

export default class ui {
  constructor () {
    dbg('Initialize Ui')

    this.initializeElements()
    this.initializeEvents()
  }

  initializeElements () {
    this.$els = {
      navTrigger: document.getElementsByClassName('nav__trigger')[0],
      menu: document.getElementById('app')
    }
  }

  initializeEvents () {
    this.$els.navTrigger.addEventListener('click', this.onMenuTriggerClick.bind(this))
  }

  onMenuTriggerClick () {
    this.$els.menu.className = 'active'
  }
}
