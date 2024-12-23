function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    const valorActual = pantalla.value;

    // Validar si el último carácter es un signo y el nuevo valor también es un signo
    const signos = ['+', '-', '*', '/'];
    const ultimoCaracter = valorActual.slice(-1);

    if (signos.includes(ultimoCaracter) && signos.includes(valor)) {
        alert('No se pueden ingresar dos signos consecutivos.');
        return;
    }

    pantalla.value += valor;
}

function borrar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    const valorPantalla = pantalla.value;

    // Validar que la expresión no termine con un signo
    const signos = ['+', '-', '*', '/'];
    const ultimoCaracter = valorPantalla.slice(-1);

    if (valorPantalla === '' || signos.includes(ultimoCaracter)) {
        alert('Expresión inválida. Completa la operación.');
        return;
    }

    try {
        // Evaluar la expresión
        const resultado = eval(valorPantalla);
        pantalla.value = resultado;
    } catch (error) {
        alert('Error en la expresión matemática.');
        pantalla.value = '';
    }
}
