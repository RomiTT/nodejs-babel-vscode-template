
export function testES2015() {
  // test es2015 code
  let result = [1, 2, 3, 5, 6, 7, 8, 9, 10].map((n) => n + 1)
  console.log(result)

  let array = []
  // Statement bodies
  result = result.forEach(v => {
    if (v % 2 === 0)
      array.push(v)
  });
  console.log(array)

  // Lexical this
  var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f))
    }
  }
  bob._friends = ["roy", "romi", "micheal", "mike"]
  bob.printFriends()

  // Lexical arguments
  function square() {
    let example = () => {
      let numbers = [];
      for (let number of arguments) {
        numbers.push(number * number);
      }

      return numbers;
    };

    return example();
  }

  console.log(square(2, 4, 7.5, 8, 11.5, 21))
}

