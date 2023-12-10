export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string) => {
    let result = initialValue
    for(let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample1:", stringReduce(["100", "200", "300"], "400"))

  const numberReduce = (array: number[], initialValue: number) => {
    let result = initialValue
    for(let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample2:", numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericsReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericsStringReduce: GenericsReduce<string> = (array, initialValue) => {
    let result = initialValue
    for(let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample3:", genericsStringReduce(["100", "200", "300"], "400"))

  const genericsNumberReduce: GenericsReduce<number> = (array, initialValue) => {
    let result = initialValue
    for(let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample4:", genericsNumberReduce([100, 200, 300], 1000))

  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericRreduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}