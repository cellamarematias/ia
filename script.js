window.onload = iniciar;

function iniciar() {
    console.log("Se inició.")
    // Crear Red Neuronal
    const redNeuronal = new brain.NeuralNetwork();

    const datos = [
        {
            "input": { "R": 0.78, "G": 0.9, "B": 1 }, // Celeste claro
            "output": { "claro": 1}
        },
        {
            "input": { "R": 0.76, "G": 0.8, "B": 0.78 }, // Gris claro
            "output": { "claro": 1}
        },
        {
            "input": { "R": 0, "G": 0, "B": 0 }, // Negro
            "output": { "oscuro": 1}
        },
        {
            "input": { "R": 0.02, "G": 0.047, "B": 0.1 }, // Azul oscuro
            "output": { "oscuro": 1}
        }
    ];

    redNeuronal.train(datos); // se entrena la red

    // 1º parámetro: dato a analizar -- 2º parámetro la red neuronal
    let resultado = brain.likely({  "R": 0.003, "G": 0.08, "B": 0.25 }, redNeuronal);
    alert(resultado);
}