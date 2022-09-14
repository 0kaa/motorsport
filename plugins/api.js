// plugins/api.js

import Auth from '~/api/auth'
import Errors from '~/api/errors'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    auth: Auth(context.$axios),
    errors: Errors(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
