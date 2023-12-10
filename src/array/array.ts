export default function arraySample() {
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // NG
  // colors.push(1)
  console.log("Array array sample1:", colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // NG
  // even.push("8")
  console.log("Array array sample2:", even)

  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // NG
  // ids.push(true)
  console.log("Array array sample3:", ids)

  // 型推論
  // const generateSomeArray = (): (string | number)[] => {
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push("ABC")
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // NG
  // someArray.push(true)
  console.log("Array array sample4:", someArray)

  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // NG
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log("Array array sample5:", commands)
}