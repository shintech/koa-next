/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import ContactInfo from 'components/ContactInfo'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> ContactInfo - snapshot...', () => {
  it('expect to render correct properties', () => {
    shallowExpect(<ContactInfo email='email@example.org' />).toMatchSnapshot()
  })
})
