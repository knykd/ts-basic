// NG
export default function callbackSample() {
  const url = "https://api.github.com/users/knykd"

  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        res.json()
          .then((json) => {
            console.log("Asynchronous Callbck Sample 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous Callbck Sample 2:", profile)
}