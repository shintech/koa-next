/* eslint-env jest */

import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import Clicker from 'components/Clicker'
import theme from './theme'

const fn = jest.fn()

describe('COMPONENT -> Clicker...', () => {
  it('expect increment button click simulation success...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<Clicker trees={{ value: 0 }} increment={onButtonClick} decrement={fn} />)

    wrapper.find('.increment').simulate('click')

    expect(onButtonClick).toHaveProperty('callCount')
    expect(onButtonClick.callCount).toEqual(1)
  })

  it('expect decrement button click simulation success...', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<Clicker trees={{ value: 0 }} increment={fn} decrement={onButtonClick} />)

    wrapper.find('.decrement').simulate('click')

    expect(onButtonClick).toHaveProperty('callCount')
    expect(onButtonClick.callCount).toEqual(1)
  })

  it(`expect span text to equal property "trees.value"...`, () => {
    const clicker = shallow(<Clicker trees={{ value: 0 }} increment={fn} decrement={fn} />)

    expect(clicker.find('span').text()).toEqual('0')
  })
})

describe('COMPONENT -> Clicker -> theme test', () => {
  it('expect theme.number to equal "lightcoral" when number < 0', () => {
    expect(theme({ value: -1 }).number).toBe('lightcoral')
  })

  it('expect theme.number to equal "deepskyblue" when number = 0', () => {
    expect(theme({ value: 0 }).number).toBe('deepskyblue')
  })

  it('expect theme.number to equal "palegreen" when number > 0', () => {
    expect(theme({ value: 1 }).number).toBe('palegreen')
  })
})
