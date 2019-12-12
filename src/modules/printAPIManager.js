const remoteURL = "http://localhost:5002"

export default {

  get(component, id) {
    return fetch(`${remoteURL}/${component}/${id}`).then(result => result.json())
  },
  getAll(component) {
    return fetch(`${remoteURL}/${component}`).then(result => result.json())
  },
  post(component, newObject) {
    return fetch(`${remoteURL}/${component}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  checkUser(email, password) {
    return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
      .then(response => response.json())
  },
  delete(component, id) {
    return fetch(`${remoteURL}/${component}/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  // patch(tableName, objectToPatch) {
  //   return fetch(`${remoteURL}/${tableName}/${objectToPatch}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(objectToPatch)
  //   }).then(data => data.json())
  // }
  patch(id, obj) {
    return fetch(`${remoteURL}/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(data => data.json())
}
}