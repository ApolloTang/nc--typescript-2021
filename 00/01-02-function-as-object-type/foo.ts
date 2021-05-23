// Function as Object type
// https://kentcdodds.com/blog/typescript-function-syntaxes?ck_subscriber_id=363851464
// https://stackoverflow.com/a/53504841
// =======================

;(()=>{


// This type syntax looks like an object:

type fooType = {
  (x: number): string
}


// but it is callable:


const foo:fooType = x => x.toString()
console.log( foo(123) ) // '123'


})();(()=>{


// Note that the above is different from the method property in
// an object:

type fooType = {
  bar(x: number): string
}

const foo:fooType = {
  bar: (x) => x.toString()
}
console.log( foo.bar(123) ) // '123'


})()
