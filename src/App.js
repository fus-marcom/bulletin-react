import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css'

// Import Views
// import Category from './views/Category'
// import CreatePost from './views/CreatePost'
// import Home from './views/Home'
// import PostDetail from './views/PostDetail'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
)

class App extends Component {
  render () {
    return (
      <Provider>
        <BrowserRouter>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1 className='App-title'>Welcome to React</h1>
            </header>
            <p className='App-intro'>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </BrowserRouter>

      </Provider>

    )
  }
}

export default App
