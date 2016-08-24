import '../styles/core.scss'
import domready from 'domready'
import Nav from './Nav'

if (module.hot) {
  module.hot.accept()
}

domready(() => {
  new Nav()
})

