// VVhat ?!?
//
//   None of zese codevarriors seemz to remember hiz ovvn name !
//
//   Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")
//
// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

class Warrior {
  constructor(n) {
    this.value = n
  }

  name(n) {
    if(n) {
      this.value = n
    }
    return this.value
  }


  toString() {
    return `Hi! my name's ${this.name()}`
  }
}
