const dog = {
    name: 'Scoob',
    age: 5,
    canineAge() {
        return this.age * 7;
    },
    speak(times = 2, words = 'Au Au!!'){
        for(let i = 0; i < times; i++){
            console.log(`${this.name} says ${words}`);
        }
    }
}

const person = {
    name: 'Luciano',
    age: 5,
    speak(words){
        console.log(`${this.name} says ${words}`);
    }
}

person.bark = dog.speak.bind(person, 10, 'hip hip');

console.log(dog.canineAge());
person.speak('Hello Word!');
dog.speak('Hello Word!');
person.bark();