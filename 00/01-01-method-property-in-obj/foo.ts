// =======================================
// Typescript syntax for method in object:
// =======================================

;(()=>{


  // Method in an object type syntax 1:
  // --------------------------------
  type fooType = {
    bar(x: number): string
  }


})();(()=>{

  //
  // Method in an object type syntax 2:
  // in arrow function type literals syntax
  // This is same as above
  // --------------------------------
  type fooType = {
    bar: (x: number) => string
  }


})();(()=>{

  // The above type can be use on
  // ----------------------------

  const foo:fooType = {
    bar: (x) => x.toString()  // arrow function expression
  }


  const foo1:fooType = {
    bar: function(x) {     // with function keyword
      return x.toString()
    }
  }


  const foo2:fooType = {
    bar(x) {               // ES6 syntax, without function keyword
      return x.toString()
    }
  }


})()



type fooType = {
  bar: (x: number) => string
}



