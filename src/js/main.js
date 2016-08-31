import '../styles/core.scss'
import domready from 'domready'
import Menu from './Menu'
import Ui from './Ui'
import 'gsap'
import './lib/drawsvgplugin'

CSSPlugin.defaultForce3D = false

if (module.hot) {
  module.hot.accept()
}

const ui = new Ui()
new Menu()

domready(() => {
  ui.hideLoading()
  ui.fixScrollBarSection()
})

