const remoteURL = "http://localhost:5002"

export default {

  get(id) {
    return fetch(`${remoteURL}/prints/${id}`).then(result => result.json())
  },
  getAll(component) {
    return fetch(`${remoteURL}/${component}`).then(result => result.json())
  },
  post(newPoster) {
    return fetch(`${remoteURL}/posters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoster)
    }).then(data => data.json())
  },
  checkUser(email, password) {
    return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
      .then(response => response.json())
  }
}