export default function objectSample() {
  const a: object = {
    name: "名前",
    age: 30
  }
  // NG
  // a.name

  let country: {
    language: string,
    name: string
  } = {
    language: "japanese",
    name: "japan"
  }
  console.log("Object object sample1:", country)

  country = {
    language: "English",
    name: "United State of America"
  }
  console.log("Object object sample2:", country)

  const status: {
    age: number,
    lastName: string,
    readonly firstName: string,
    gender?: string
  } = {
    age: 10,
    lastName: "山田",
    firstName: "太郎"
  }

  status.gender = "male"
  status.lastName = "佐藤"
  // NG
  // status.firstName = "花子"
  console.log("Object object sample3:", status)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    Korea: "Seoul"
  }
  capitals.China = "Beijing"
  capitals.Canada = "Ottawa"
  console.log("Object object sample4:", capitals)
}