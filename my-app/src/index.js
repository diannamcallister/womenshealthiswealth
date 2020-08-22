
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Safe from './Safe'
import Login from './Login'
import Default from './Default'
import * as serviceWorker from './serviceWorker'
import * as R from 'ramda'

const Router = () => {
  //const [user, setUser] = useState(null)
  const [pageKey, setPageKey] = useState('login')
  const isPageKey = R.equals(pageKey)
  return  isPageKey('login')
  ? <Login setPageKey={setPageKey}/> 
  : isPageKey('safe')
  ? <Safe setPageKey={setPageKey}/> 
  : isPageKey('default')
  ? <Default setPageKey={setPageKey}/> 
  : null
}

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
