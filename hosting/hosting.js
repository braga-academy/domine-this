const luciano = { name: "Luciano" };
const pessoa = JSON.parse(JSON.stringify(luciano));
const bia = "Bia";

console.log(luciano);
console.log(bia);

luciano.name = "Josué";
pessoa.sobrename = "Jonatas";

var sayMyName = function (person)
{
    console.log(person.name)
}

sayMyName(luciano);
sayMyName(pessoa);



console.log(luciano);
console.log(pessoa);