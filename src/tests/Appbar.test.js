import TopNav from '../components/Layout/appbar'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Appbar />', () => {
  it('renders without crashing', () => {
    const classes = {}
    shallow(<TopNav classes={classes} />)
  })
})
