import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import { spy } from 'sinon'
import Vuetify from 'vuetify'
import Component from '../../src/components/component'

describe('The component', () => {
  let wrapper
  let vm

  beforeEach(() => {
    const vuetify = new Vuetify()
    const localVue = createLocalVue()
    wrapper = mount(Component, {
      localVue,
      attachToDocument: true,
      vuetify,
      sync: false
    })
    vm = wrapper.vm
  })

  describe('when showing the save dialogue', () => {
    it('will reset the number field when creating', () => {
      const field = wrapper.find({ ref: 'numberField' })
      const reset = spy(field, 'reset')
      vm.create()
      expect(reset.called).to.equal(true)
      reset.restore()
    })
  })
})
