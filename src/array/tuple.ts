export default function rupleSample() {
  let response: [number, string] = [200, "OK"]
  // NG
  // response = [400, "Bad Request", "Email parameter is missing"]
  // response = ["400", "Bad Request"]
  console.log("Array tuple sample1:", response)

  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Eri")
  console.log("Array tuple sample2:", girlfriends)
}