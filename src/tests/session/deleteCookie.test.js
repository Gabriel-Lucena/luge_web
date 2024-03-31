import {
  deleteCookie
} from './cookieUtils';

describe('deleteCookie function', () => {
  beforeEach(() => {
    // Define um cookie de exemplo antes de cada teste
    document.cookie = 'cookieToDelete=123';
  });

  test('deve deletar o cookie especificado', () => {
    deleteCookie('cookieToDelete');

    // Verificar se o cookie foi removido
    const cookieArr = document.cookie.split(';');
    let cookieExists = false;

    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');
      if ('cookieToDelete' === cookiePair[0].trim()) {
        cookieExists = true;
        break;
      }
    }

    expect(cookieExists).toBe(false);
  });
});