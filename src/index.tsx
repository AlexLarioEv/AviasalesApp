import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './Components/App/App'
import { store } from './Store'

const container = document.getElementById('root')
const root = createRoot(container as Element | DocumentFragment)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
