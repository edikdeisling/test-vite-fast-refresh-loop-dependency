import React from 'react'
import ReactDOM from 'react-dom'
import { router } from './router';

ReactDOM.render(
  <React.StrictMode>
      <router.STATES.component />
  </React.StrictMode>,
  document.getElementById('root')
)
