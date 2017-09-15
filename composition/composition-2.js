const hiker = {
    walk(steps = 2){
        console.log(`${this.name} walked ${steps} steps.`);
    },
    run(steps = 20){
        console.log(`${this.name} ran ${steps} steps.`)
    }
}

const speaker = {
    speak(words){
        console.log(`${this.name} says: ${words}`);
    },
    shout(words){
        console.log(`${this.name} shouted: ${words}`);
    }
}

const luciano = Object.assign({name: 'Luciano'}, hiker, speaker);
const skoob = Object.assign({name: 'Skoob Doo'}, hiker);

console.log(luciano);
console.log(skoob);

skoob.run(88);
luciano.walk(55);