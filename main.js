class Calculadora {
    constructor(elementoPantalla) {
        this.pantalla = elementoPantalla;
        this.limpiarPantalla();
    }

    agregarAPantalla(valor) {
        
        if (this.pantalla.value === "0") {
            this.pantalla.value = valor;
        } else {
            this.pantalla.value += valor;
        }
    }

    limpiarPantalla() {
        this.pantalla.value = "0"; 
    }

    calcular() {
        try {
            
            this.pantalla.value = eval(this.pantalla.value);
        } catch (error) {
            this.pantalla.value = "Error";
        }
    }
}


window.onload = function() {
    const pantalla = document.getElementById('pantalla');
    const calculadora = new Calculadora(pantalla);


    document.querySelectorAll('.btn').forEach(boton => {
        boton.addEventListener('click', () => {
            const valor = boton.innerText;
            if (valor === 'C') {
                calculadora.limpiarPantalla();
            } else if (valor === '=') {
                calculadora.calcular();
            } else {
                calculadora.agregarAPantalla(valor);
            }
        });
    });
};
