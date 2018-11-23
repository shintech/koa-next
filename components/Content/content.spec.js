/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Content from 'components/Content'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Content...', () => {
  let clicker = shallow(<Content content='Hello World!' />)

  it(`expect Content p text to equal "Hello World!"...`, () => {
    expect(clicker.find('p').text()).toBe('Hello World!')
  })
})

describe('COMPONENT -> Content - snapshot...', () => {
  it('expect to render correct properties', () => {
    shallowExpect(<Content content='Hello World!!' />).toMatchSnapshot()
  })
})
