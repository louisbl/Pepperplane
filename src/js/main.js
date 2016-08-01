import '../styles/core.scss'
import domready from 'domready'
import Ui from './Ui'

if (module.hot) {
  module.hot.accept()
}

domready(() => {
  let ui = new Ui()
})

