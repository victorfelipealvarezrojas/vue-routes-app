import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized, //donde voy
  from: RouteLocationNormalized, //de onde venho
  next: NavigationGuardNext, //para onde voy
) => {
  const userId = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path);

  if (!userId) {
    return next({
      name: 'login',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
