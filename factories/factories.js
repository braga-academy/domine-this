class Person {
    constructor(name, age){
        this.name   = name;
        this.age    = age;
    }

    speak(words){
        console.log(`${this.name} sais: ${words}`)
    }
}

Person.factory = function(name, age = 1){
    (age < 1 ? age = 1 : age)
    return new Person(name, age);
}

const luciano = Person.factory('Luciano');
console.log(luciano);

luciano.speak('Hello Word!');