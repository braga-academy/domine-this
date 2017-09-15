class Person {
    constructor(name, age){
        this.name   = name;
        this.age    = age;
    }

    speak(words){
        console.log(`${this.name} sais: ${words}`)
    }
}

const luciano = new Person('Luciano', 25);

luciano.speak('Hello Word!');