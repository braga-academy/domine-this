const person = {
    andar(passos = 2){
        console.log(`${this.name} andou ${passos} passos`);
    }
}

function createPerson(name, age){
    return Object.create(person, {
        name: {
            value: name,
            writable: true
        },
        sobrename: {
            value: 'Braga',
            writable: true
        },
        completeName: {
            get(){
                return `${this.name} ${this.sobrename}`;
            },
            set(valor){
                this.name = valor;
            }
        },
        age: {
            value: age
        }
    });
}

const luciano = createPerson('Luciano', 25)

luciano.name = "Não Altera";
luciano.completeName = "Não Altera";
luciano.sobrename = "Braga";

console.log(luciano);

luciano.andar(20);