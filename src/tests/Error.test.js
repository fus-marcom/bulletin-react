import Error from '../components/Error'
import React from 'react'
import { shallow, render } from 'enzyme'

describe('<Error />', () => {
  it('renders without crashing', () => {
    shallow(<Error />)
  })
  it('should render error whem passed', () => {
    const err = 'Network Error'
    const ren = render(<Error error={err} />)
    expect(ren.text()).toContain(err)
  })
})
