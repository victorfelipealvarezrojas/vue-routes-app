import { mount, RouterLinkStub } from '@vue/test-utils';
import router from '@/router';
import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';

describe('PaokemonPage', () => {
  test('should be render correct', () => {
    const wrapper = mount(PokemonPage, {
      props: {
        id: 25,
      },
      global: {
        stubs: {
          // RouterLink: true, //genere el componente de relleno
          RouterLink: RouterLinkStub, //genere un espia del componente
        },
      },
    });

    expect(wrapper.find('h1')).toBeTruthy();
  });

  test('should be render correct', () => {
    const wrapper = mount(PokemonPage, {
      props: {
        id: 25,
      },
      global: {
        stubs: {
          // RouterLink: true, //genere el componente de relleno
          RouterLink: RouterLinkStub, //genere un espia del componente
        },
      },
    });

    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props().to).toEqual({
      name: 'pokemon',
      params: {
        id: 26,
      },
    });
  });
});
