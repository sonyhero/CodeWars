// This kata is about static method that should return different values.
//
//   On the first call it must be 1, on the second and others - it must be a double from previous value.
//
//   Look tests for more examples, good luck :)

class Class {
  static getNumber() {
    if (!Class.count) {
      Class.count = 1
    } else {
      Class.count *= 2
    }
    return Class.count
  }
}