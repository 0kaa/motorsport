export default (context, redirect) => {
  context.$axios.setHeader('Content-Type', 'application/json')

  // Overrides `Authorization` header with new value
  context.$axios.setHeader('Cache-Control', 'no-cache')

  // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
  context.$axios.setHeader('Connection', 'keep-alive')

  // Removes default Content-Type header from `post` scope
  context.$axios.setHeader('X-Accel-Buffering', 'no')

  /*   console.log('store.$storage.getUniversal:>> ', context.store.$storage.getUniversal('auth._token.local'));

  console.log('context :>> ', context.route.fullPath); */

  /*   if(context.store.$storage.getUniversal('auth._token.local') && context.route.fullPath == '/login' ) {
    context.app.router.push("/");
  }
 */
  context.$axios.onError((error) => {
    if (error.response === undefined) {
      // Display a flash notification
      throw error
    }
    if (error.response == '401' || error.response.status == '401') {
      // Display a flash notification
      // console.log('401 :>> ');
      context.app.router.push('/')
    }

    // Handle other types of errors (e.g., redirect to login on 401 errors)

    throw error
  })
}
