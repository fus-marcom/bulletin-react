import Loader from '../components/Loader'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Appbar />', () => {
  it('renders without crashing', () => {
    const classes = {}
    shallow(<Loader classes={classes} />)
  })
})
