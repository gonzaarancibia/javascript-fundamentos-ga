const {
  respuestaP1,
  respuestaP2,
  respuestaP3,
  respuestaMC1,
  respuestaMC2,
  respuestaMC3,
  miPromesa,
  rechazarPromesa,
} = require("../3-promesas");

describe("🧪 Ejercicio 3 - Promesas", () => {
  // -------- Preguntas de Verdadero o Falso --------
  test("✔️ Pregunta 1", () => {
    expect(typeof respuestaP1).toBe("boolean");
    expect(respuestaP1).toBe(false);
  });

  test("✔️ Pregunta 2", () => {
    expect(typeof respuestaP2).toBe("boolean");
    expect(respuestaP2).toBe(true);
  });

  test("✔️ Pregunta 3", () => {
    expect(typeof respuestaP3).toBe("boolean");
    expect(respuestaP3).toBe(true);
  });

  // -------- Ejercicio 1: Promesa que resuelve --------
  test("✔️ miPromesa debe resolverse con '¡Promesa resuelta!'", async () => {
    await expect(miPromesa).resolves.toBe("¡Promesa resuelta!");
  });

  // -------- Ejercicio 2: Promesa que rechaza --------
  test("✔️ rechazarPromesa debe rechazar con un Error('Algo salió mal')", async () => {
    await expect(rechazarPromesa).rejects.toThrow("Algo salió mal");
  });

  // -------- Multiple Choice (si se activan) --------
  test("✔️ Multiple Choice - Pregunta 1", () => {
    expect(respuestaMC1 === 'C').toBeTruthy();
  });

  test("✔️ Multiple Choice - Pregunta 2", () => {
    expect(respuestaMC2 === 'B').toBeTruthy();
  });

  test("✔️ Multiple Choice - Pregunta 3", () => {
    expect(respuestaMC3 === 'B').toBeTruthy();
  });
});
