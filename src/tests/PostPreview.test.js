import PostPreview from '../components/PostPreview'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Appbar />', () => {
  it('renders without crashing', () => {
    const classes = {}
    shallow(<PostPreview classes={classes} />)
  })
})
