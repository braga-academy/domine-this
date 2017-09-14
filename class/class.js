class Person {
    constructor(name, age = 1){
        this.name = name;
        this.age = age;
    }
    speak(words){
        console.log(this.name + ' says: ' + words);
    }
    olden(years = 1){
         this.age += years;
         console.log(this.age)
    }
}

class Man extends Person{

    constructor(name, age = 1){
        super(name, age)
        this.sexo = 'Masculino';
    }

}

const luciano = new Man('Luciano', 25);

console.log(luciano, Man.prototype);