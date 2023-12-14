export default function promiseSample() {
  const url = "https://api.github.com/users/knykd"

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res.json()
            .then((json) => {
              console.log("Asynchronous Callbck Sample 3:", json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log("Asynchronous Callbck Sample 4:", profile)
      }
    })
    .catch(() => {

    })
}