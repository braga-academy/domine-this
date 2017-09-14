function Person(name, age, password){
    this.checkPassword = function(value){
        return value == password;
    };

    this.getAge = function(){
        return age;
    };

    this.getName = function(){
        return name;
    };

}

const luciano = new Person('Luciano', 25, '123456')

console.log(luciano.checkPassword(123456));
console.log(luciano);
console.log(luciano.getName());
console.log(luciano.getAge());