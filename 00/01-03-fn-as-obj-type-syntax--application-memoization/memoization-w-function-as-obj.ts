
// =========================================================
// Function as object type syntax, application: Memoization
// =========================================================

interface myFunc_withMemoizationType {
  (input: number): number
  cache: {
    [key:string]: number
  }
}

/**
 *
 * Given an "input", this function will do some expensive calculation
 * with an internal function called "expansiveComputation(input)".
 * The result of the calculation is cached. The next time if the
 * function is called with the same input the cached result will be used.
 *
 * @param {number} input - input of expansiveComputation.
 * @return {number} result of expansiveCalcualtion
 *
 * Original idea from:
 *   Stoyan Stefanov, JavaScript Patterns p76, O'Reilly 2020
 *
 */
const myFunc_withMemoization:myFunc_withMemoizationType = function(
  input:number
) {
  const key = input.toString()
  const cache = myFunc_withMemoization.cache

  if (!cache.hasOwnProperty(key)) {
    const expansiveComputation = (input:number) =>{
      console.log(`caculating myFuncWithCache(${input})`)
      return input
    }

    const result = expansiveComputation(input)
    cache[key] = result
    return result
  }

  console.log(`use cached value of myFuncWithCache(${input})`)
  return myFunc_withMemoization.cache[key]
}
myFunc_withMemoization.cache = {} // cache store

console.log(myFunc_withMemoization(1))
console.log(myFunc_withMemoization(1))


