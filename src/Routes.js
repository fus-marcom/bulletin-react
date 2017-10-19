import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import Views
import Category, { allCategories } from './views/Category'
import Home from './views/Home'
import PostDetail from './views/PostDetail'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/all" component={allCategories} />
        <Route exact path="/category/:slug" component={Category} />
        <Route path="/post/:post_id" component={PostDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
