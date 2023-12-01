export default function notExistSample() {
  let name = null
  console.log("notExist sample 1:", typeof name, name)

  name = "ねこ"
  if (!name) {
    console.log("notExist sample 2:", "名前はない")
  } else {
    console.log("notExist sample 3:", "名前は"+name)
  }

  let age = undefined
  console.log("notExist sample 4:", typeof age, age)

  age = 28
  if (!age) {
    console.log("notExist sample 5:", "年齢は〇〇")
  } else {
    console.log("notExist sample 6:", "年齢は"+age)
  }

}