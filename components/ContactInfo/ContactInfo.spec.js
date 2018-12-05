/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import ContactInfo from 'components/ContactInfo'

const props = {
  name: 'name',
  email: 'email@example.org',
  author: {
    name: 'author.name'
  },
  repository: {
    url: 'https://example.org/repo'
  }
}

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> ContactInfo - snapshot...', () => {
  it('expect to render correct properties', () => {
    shallowExpect(<ContactInfo {...props} />).toMatchSnapshot()
  })
})
