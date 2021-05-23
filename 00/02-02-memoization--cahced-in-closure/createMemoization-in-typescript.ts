

function createMemoization(
  cb: (input:number)=>number
) {
  type cacheType = {
    [key:string]: number
  }
  const cache = {} as cacheType // closure is holding the cache

  return (input:number) => {
    const key = input.toString()

    if (!cache.hasOwnProperty(key)) {
      const result = cb(input)
      cache[key] = result
      return result
    }
    console.log(`use cached for input ${key}`)
    return cache[key]
  }
}

const expansiveComputation = (input:number) => {
  console.log(`caculating myFuncWithCache(${input})`)
  return input
}

const expansiveComputationMemoized = createMemoization(expansiveComputation)
console.log(expansiveComputationMemoized(1))
console.log(expansiveComputationMemoized(1))

