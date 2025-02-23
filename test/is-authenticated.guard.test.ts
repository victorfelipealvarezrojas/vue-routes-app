import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import { toASCII } from 'punycode';
import type { RouteLocationNormalized } from 'vue-router';

describe('authGuard', async () => {
  const to: RouteLocationNormalized = {
    name: '',
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '/home',
    meta: {},
  };

  const from: any = {};

  const next = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  test('should block if not authenticate ', async () => {
    await isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({
      name: 'login',
    });
  });
});
