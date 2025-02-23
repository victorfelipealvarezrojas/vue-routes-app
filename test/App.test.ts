import { shallowMount } from '@vue/test-utils';

import router from '@/router';
import App from '@/App.vue';

describe('App', () => {
  test('should be render correct', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent({ name: 'RouterView' });

    expect(routerView.exists()).toBe(true);
  });
});
