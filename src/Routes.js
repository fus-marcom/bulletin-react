import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import Views
import Category, { allPosts } from './views/Category'
import Home from './views/Home'
import PostDetail from './views/PostDetail'
import Login from './views/Login'
import NotFound from './views/NotFound'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/category/" component={allPosts} />
        <Route exact path="/category/:slug" component={Category} />
        <Route exact path="/post/:slug" component={PostDetail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
