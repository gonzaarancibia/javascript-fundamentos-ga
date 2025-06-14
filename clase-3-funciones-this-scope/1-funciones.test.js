const {
    respuestaTeoria1,
    saludar,
    sumar,
    respuestaTeoria2,
    multiplicar,
    restar,
} = require('./1-funciones');

describe('Ejercicios de funciones', () => {
    test('Paso 1: respuestaTeoria1 debe ser la opción correcta', () => {
        expect(respuestaTeoria1 === 'B').toBeTruthy();
    });

    test('Paso 2 y 3: saludar debe estar definida y mostrar el mensaje correcto', () => {
        console.log = jest.fn();
        saludar();
        expect(console.log).toHaveBeenCalledWith(expect.any(String));
        expect(console.log.mock.calls[0][0]).toBe('¡Hola, mundo!');
    });

    test('Paso 4: sumar debe retornar la suma de dos números', () => {
        const result = sumar(3, 7);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(5);
        expect(result).toBeLessThan(20);
        expect(result === 10).toBeTruthy();
    });

    test('Paso 6: respuestaTeoria2 debe ser la opción correcta', () => {
        expect(respuestaTeoria2 === 'A').toBeTruthy();
    });

    test('Paso 7: multiplicar debe retornar el producto de dos números', () => {
        const result = multiplicar(4, 5);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(10);
        expect(result).toBeLessThan(30);
        expect(result === 20).toBeTruthy();
    });

    test('Paso 9: restar debe retornar la resta de dos números', () => {
        const result = restar(10, 6);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(10);
        expect(result === 4).toBeTruthy();
    });
});
