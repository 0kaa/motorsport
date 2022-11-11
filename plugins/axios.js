import https from 'https';

export default (context, redirect) => {
  context.$axios.setHeader('Content-Type', 'application/json')

  // Overrides `Authorization` header with new value
  context.$axios.setHeader('Cache-Control', 'no-cache')

  // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
  context.$axios.setHeader('Connection', 'keep-alive')

  // Removes default Content-Type header from `post` scope
  context.$axios.setHeader('X-Accel-Buffering', 'no')

  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  context.$axios.onRequest(config => {
    config.httpsAgent = agent;
  });
  context.$axios.defaults.baseURL = 'https://api.motorsport.hu/api'
  // context.$axios.defaults.baseURL = 'https://liner.test/api'
  context.$axios.onError((error) => {
    if (error.response === undefined) {
      // Display a flash notification
      throw error
    }
    if (error.response == '401' || error.response.status == '401') {
      // Display a flash notification
      // console.log('401 :>> ');
      // context.app.router.push('/')
    }

    // Handle other types of errors (e.g., redirect to login on 401 errors)

    throw error
  })
}
