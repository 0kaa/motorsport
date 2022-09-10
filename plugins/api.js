// plugins/api.js

import Auth from '~/api/auth'
import Errors from '~/api/errors'
import FileRepo from '~/api/fileRepo'
import Flows from '~/api/flows'
import Modules from '~/api/modules'
import Users from '~/api/users'
import Subscription from '~/api/subscription'

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    auth: Auth(context.$axios),
    errors: Errors(context.$axios),
    fileRepo: FileRepo(context.$axios),
    flows: Flows(context.$axios),
    modules: Modules(context.$axios),
    users: Users(context.$axios),
    subscription: Subscription(context.$axios),
  }

  // Inject $api
  inject('api', factories)
}
