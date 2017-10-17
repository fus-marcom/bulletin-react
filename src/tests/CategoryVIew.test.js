import React from 'react'
import { shallow } from 'enzyme'
import CView from '../components/CategoryView'

it('renders without crashing', () => {
  shallow(<CView />)
})
