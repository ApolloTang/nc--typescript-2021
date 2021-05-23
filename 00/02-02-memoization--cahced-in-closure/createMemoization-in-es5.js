


function createMemoization(cb) {
  const cache = {} // closure is holding the cache

  return (input) => {
    const key = input.toString()

    if (!cache.hasOwnProperty(key)) {
      const result = cb(input)
      cache[input] = result
      return result
    }
    console.log(`use cached for input ${input}`)
    return cache[input]
  }
}

const expansiveComputation = input => {
  console.log(`caculating myFuncWithCache(${input})`)
  return input
}

const expansiveComputationMemoized = createMemoization(expansiveComputation)
console.log(expansiveComputationMemoized(1))
console.log(expansiveComputationMemoized(1))

