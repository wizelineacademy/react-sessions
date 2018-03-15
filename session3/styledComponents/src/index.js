import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/hello' component={() => <p>Hello!</p>} />
      <Route path='/dog' component={() => <p>Woof!</p>} />
      <Route component={() => <p>404</p>} status={404} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'))

registerServiceWorker()
