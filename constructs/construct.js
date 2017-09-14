function Pessoa(name, age) {
    this.name = name;
    this.age = age || 1;

    this.speak =  function(words){
        console.log(this.name + ' says: ' + words)
    };
    this.olden =  function(years){
        this.age += years || 1;
        console.log(this.age)
    }
}

const luciano = new Pessoa("Luciano", 25)
const bia = new Pessoa("Bia")

console.log(luciano);
console.log(bia);

luciano.speak('Hello Word!');
luciano.olden(5);