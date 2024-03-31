import {
  redirectToLogin
} from './cookieUtils';

describe('redirectToLogin function', () => {
  test('deve redirecionar para a página de login', () => {
    // Mock window.location.href
    const {
      location
    } = window;
    delete window.location;
    window.location = {
      href: ''
    };

    redirectToLogin();

    expect(window.location.href).toBe('../login/index.html');

    // Restaurar window.location
    window.location = location;
  });
});