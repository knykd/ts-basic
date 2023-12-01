export default function primitiveSample() {
  let name: string = "名前"
  console.log(typeof name, name)

  let age: number = 18
  console.log(typeof age, age)

  let isSingle: boolean = true
  console.log(typeof isSingle, isSingle)

  const isOver: boolean = age > 20
  console.log(typeof isOver, isOver)
}