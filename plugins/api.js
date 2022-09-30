// plugins/api.js

import Auth from '~/api/auth'
import Errors from '~/api/errors'
import Articles from '~/api/articles'
import Standings from '~/api/standings'
import Series from '~/api/series'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    auth: Auth(context.$axios),
    errors: Errors(context.$axios),
    articles: Articles(context.$axios),
    standings: Standings(context.$axios),
    series: Series(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
