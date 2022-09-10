export default ({ store, redirect }) => {
  if (!store.$storage.getUniversal('auth._token.local')) {
    return redirect('/login')
  }
}
