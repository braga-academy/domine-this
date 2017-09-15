function olden(years = 1){
    this.age += years;
}


function makePerson(name, age){

    let country = 'Brazil';
    const state = { name, age, speak, olden: localOlden, getCountry, setCountry };
    
    function speak(words){
        console.log(`${state.name} says: ${words}`);       
    }

    function localOlden(years){
        olden.call(state, years);
    }

    function getCountry(){
        return country;
    }

    function setCountry(value){
        country = value;
    }
    
    return state;
}

const luciano = makePerson('Luciano', 25);
const bia = makePerson('Bia', 2);

luciano.olden(5);
console.log(bia.setCountry('United States of America'));
console.log(bia.getCountry());

console.log(luciano);
console.log(bia);