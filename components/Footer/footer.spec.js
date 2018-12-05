/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Footer from 'components/Footer'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Footer...', () => {
  let domain = 'domain'
  let footer = shallow(<Footer domain={domain} />)

  it(`expect Footer domain to equal "domain"...`, () => {
    expect(footer.find('a span').text()).toBe(domain)
  })
})

describe('COMPONENT -> Footer - snapshot...', () => {
  it('expect to render correct properties', () => {
    let domain = 'domain'

    shallowExpect(<Footer domain={domain} />).toMatchSnapshot()
  })
})
