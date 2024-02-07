export const homePost = (request, response) => {
  const obj = {
      title: "HOME POST"
  }
  response.write(JSON.stringify(obj))
}
export const homeGet = (request, response) => {
  const obj = {
      title: "HOME GET"
  }
  response.write(JSON.stringify(obj))
}

export const contact = (request, response) => {
  const obj = {
      title: "CONTACT"
  }
  response.write(JSON.stringify(obj))
}
