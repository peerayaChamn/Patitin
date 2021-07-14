const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const errorContainer = document.getElementById('errMsg')

// A simple async GET request function
const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET'
  })
  return response.json()
}

// A simple async POST request function
const postData = async (url = '', data = {}, csrfToken) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add the csrfToken
      'CSRF-Token': csrfToken
    },
    body: JSON.stringify(data)
  })
  console.log(`received a response!`)
  return response.json()
}

const searchEvent = async () => {
  const csrfToken = document.querySelector('[name="_csrf"]').value;
  const query = "test"
  const events = await postData('/events/find', {
      query: query
    }, csrfToken)
    .then(response => response.events);
  console.log(events)


}