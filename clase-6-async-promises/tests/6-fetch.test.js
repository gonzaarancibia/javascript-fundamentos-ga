// 📦 Requiere jest para correr este test
// Ejecutar con: npx jest 6-fetch.test.js

const { getUsers, createUser, respuestaFetch1 } = require('../6-fetch');

global.fetch = jest.fn(); // Mock global de fetch

describe('Ejercicio: Peticiones HTTP con fetch()', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('getUsers hace una petición GET y devuelve los datos', async () => {
    const mockData = [{ id: 1, name: 'Juan' }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await getUsers('https://jsonplaceholder.typicode.com/users');

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(result).toEqual(mockData);
  });

  test('createUser hace una petición POST con datos correctos', async () => {
    const userData = { name: 'Gonza', username: 'gonza123', email: 'g@dev.com' };
    const mockResponse = { id: 101, ...userData };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await createUser('https://jsonplaceholder.typicode.com/users', userData);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(userData),
      })
    );
    expect(result).toEqual(mockResponse);
  });

  test('respuestaA es la opción correcta del multiple choice', () => {
    expect(respuestaFetch1).toBe('B');
  });
});
