import {
  checkCookie
} from '../../session/cookies.js';

describe('checkCookie function', () => {
  beforeEach(() => {
    // Define um cookie de exemplo antes de cada teste
    document.cookie = 'testCookie=123';
  });

  afterEach(() => {
    // Remove o cookie de exemplo após cada teste
    document.cookie = 'testCookie=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;';
  });

  test('deve retornar true se o cookie existir', () => {
    expect(checkCookie('testCookie')).toBe(true);
  });

  test('deve retornar false se o cookie não existir', () => {
    expect(checkCookie('nonExistentCookie')).toBe(false);
  });
});