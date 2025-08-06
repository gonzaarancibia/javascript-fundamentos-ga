const {
  getUserById,
  mostrarUsuariosSecuencialmente,
  mostrarUsuariosEnParalelo,
} = require('../7-bucles-asincronos');

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

describe('Ejercicios for await...of', () => {
  test('getUserById devuelve datos del usuario', async () => {
    const mockUser = { id: 1, name: 'Juan' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const user = await getUserById(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(user).toEqual(mockUser);
  });

  test('mostrarUsuariosSecuencialmente llama a getUserById y muestra nombres', async () => {
    const users = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Ana' },
      { id: 3, name: 'Luis' },
    ];

    // Mock fetch para cada llamada secuencial
    users.forEach(user => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => user,
      });
    });

    // Spy console.log para capturar salidas
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await mostrarUsuariosSecuencialmente();

    // Esperamos que console.log se haya llamado con los nombres
    users.forEach(user => {
      expect(logSpy).toHaveBeenCalledWith(user.name);
    });

    logSpy.mockRestore();
  });

  test('mostrarUsuariosEnParalelo llama a getUserById en paralelo y muestra nombres', async () => {
    const users = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Ana' },
      { id: 3, name: 'Luis' },
    ];

    // Mock fetch para cada llamada paralela
    users.forEach(user => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => user,
      });
    });

    // Spy console.log para capturar salidas
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await mostrarUsuariosEnParalelo();

    users.forEach(user => {
      expect(logSpy).toHaveBeenCalledWith(user.name);
    });

    logSpy.mockRestore();
  });
});
