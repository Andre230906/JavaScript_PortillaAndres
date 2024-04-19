class Shape {
    calcularArea() {
        return "¡Error! Método de cálculo de área no implementado para esta forma.";
    }
}

class Circle extends Shape {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

class Triangle extends Shape {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

const circulo = new Circle(5);
const areaCirculo = circulo.calcularArea();
console.log("¡kiubo ñero! ¡Vamos a calcular el área de un círculo mi perro!");
console.log("Área del círculo:", areaCirculo);

const triangulo = new Triangle(4, 3);
const areaTriangulo = triangulo.calcularArea();
console.log("¡Ey bobo! ¡Calcula el área de un triángulo!");
console.log("Área del triángulo:", areaTriangulo);

console.log("¡Qué sapa! ¡Hasta luego!");