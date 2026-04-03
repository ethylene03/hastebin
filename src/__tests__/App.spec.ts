import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Save')
    expect(wrapper.text()).toContain('New Bin')
    expect(wrapper.text()).toContain('Language')
    expect(wrapper.text()).toContain('Author')
  })
})
