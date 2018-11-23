/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import Nav from 'components/Nav'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Nav - snapshot...', () => {
  it('expect to render correct properties', () => {
    shallowExpect(<Nav />).toMatchSnapshot()
  })
})
