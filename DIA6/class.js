class A {
    constructor(arg) {
        this.arg = arg;
    }
}

class B extends A {
    constructor(arg, argB) {
        super(arg);
        this.argB = argB;
    }
}

class C extends B {
    constructor(arg, argB, argC) {
        super(arg, argB);
        this.argC = argC;
    }
}

const objC = new C('argA', 'argB', 'argC');
console.log(objC.arg);
console.log(objC.argB);
console.log(objC.argC);