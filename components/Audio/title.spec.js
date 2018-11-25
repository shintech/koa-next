/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Title from 'components/Title'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Title...', () => {
  let clicker = shallow(<Title title='Hello World!' />)

  it(`expect Title h1 text to equal "title"...`, () => {
    expect(clicker.find('h1').text()).toBe('Hello World!')
  })
})

describe('COMPONENT -> Title - snapshot...', () => {
  it('expect to render correct properties', () => {
    shallowExpect(<Title title='Hello World!!' />).toMatchSnapshot()
  })
})
