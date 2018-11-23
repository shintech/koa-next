/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Footer from 'components/Footer'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Footer...', () => {
  let message = 'message'
  let footer = shallow(<Footer message={message} />)

  it(`expect Footer messsage text to equal "message"...`, () => {
    expect(footer.find('a span').text()).toBe(message)
  })
})

describe('COMPONENT -> Footer - snapshot...', () => {
  it('expect to render correct properties', () => {
    let message = 'message'

    shallowExpect(<Footer message={message} />).toMatchSnapshot()
  })
})
