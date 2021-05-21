interface myFunc_withMemoizationType {
  (a: number): number
  cache: {
    [key:string]: number
  }
}

/**
 * Given an "input", this function will do some expensive calculation
 * with an internal function called "expansiveComputation(input)".
 * The result of the calculation is cached. The next time if the
 * function is called with the same input the cached result will be used.
 *
 * @param {number} param - input of expansiveComputation.
 */
const myFunc_withMemoization = function(
  param:number,
) {
  const key = param.toString()

  if (!myFunc_withMemoization.cache[param]) {
    const expansiveComputation = (param:number) =>{
      console.log(`caculating myFuncWithCache(${param})`)
      return param
    }
    const result = expansiveComputation(param)
    myFunc_withMemoization.cache[param] = result
    return result
  }

  console.log(`use cached value of myFuncWithCache(${param})`)
  return myFunc_withMemoization.cache[param]
} as myFunc_withMemoizationType
myFunc_withMemoization.cache = {} // cache store

console.log(myFunc_withMemoization(1))
console.log(myFunc_withMemoization(1))
