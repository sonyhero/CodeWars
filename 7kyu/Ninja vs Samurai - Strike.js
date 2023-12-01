// I wrote a class Class, with a private static property foo and a getter to retrieve it:
//
//     class Class {
//         static #foo = 42;
//
//         static get foo() {
//             return this.#foo;
//         }
//     }
// Class.foo; // 42
// However, when I create a class Subclass that inherits from Class, the code breaks:
//
// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
//
//     var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');
//
// samurai.strike(ninja, 3);
// // ninja.health should == 70
// Can you figure out what is wrong?

var Warrior = function(name){
    this.name = name;
    this.health = 100;
}

Warrior.prototype.strike = function(enemy, swings){
    enemy.health = Math.max(0, enemy.health - (swings * 10));
}