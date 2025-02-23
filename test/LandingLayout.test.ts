import { shallowMount } from '@vue/test-utils';

import router from '@/router';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';

describe('LandingLayout', () => {
  test('should be render correct', () => {
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
      },
    });

    const header = wrapper.find('header');
    const footer = wrapper.find('footer');
    const main = wrapper.find('main');

    expect(header.exists()).toBe(true);
    expect(main.exists()).toBe(true);
    expect(footer.html()).toContain('Acme Corporation');
  });
});
