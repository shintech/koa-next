import fetch from 'isomorphic-fetch'

export default {
  fetch: function () {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`${process.env['BASE_URL']}/api/about`, options).then(response => response.json())
  }
}
