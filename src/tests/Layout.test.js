import Layout from '../components/Layout/index'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Appbar />', () => {
  it('renders without crashing', () => {
    shallow(<Layout />)
  })
})
