export default (context, inject) => {
  const notification = {
    open: (options) => {
      window.$nuxt.$emit('notification', {
        open: true,
        ...options,
      })
    },
    close: () => {
      window.$nuxt.$emit('notification', {
        open: false,
      })
    },
  }

  const mediaPreview = {
    open: (options) => {
      window.$nuxt.$emit('media-preview', { ...options, open: true })
    },
    close: () => {
      window.$nuxt.$emit('media-preview', { open: false })
    },
  }
  const modal = {
    open: (options) => {
      window.$nuxt.$emit('modal', { ...options, open: true })
    },
    close: (options) => {
      window.$nuxt.$emit('modal', { ...options, open: false })
    },
  }
  const staticTutorialModal = {
    open: (options) => {
      window.$nuxt.$emit('staticTutorialModal', { ...options, open: true })
    },
    close: (options) => {
      window.$nuxt.$emit('staticTutorialModal', { ...options, open: false })
    },
  }
  const actionflowTutorialModal = {
    open: (options) => {
      window.$nuxt.$emit('actionflowTutorialModal', { ...options, open: true })
    },
    close: (options) => {
      window.$nuxt.$emit('actionflowTutorialModal', { ...options, open: false })
    },
  }
  const getFileModal = {
    open: (options) => {
      window.$nuxt.$emit('getFileModal', { ...options, open: true })
    },
    close: (options) => {
      window.$nuxt.$emit('getFileModal', { ...options, open: false })
    },
  }

  const alert = {
    success: (text, timeout = 3000) => {
      window.$nuxt.$emit('alert', {
        open: true,
        type: 'badge',
        color: 'success',
        title: 'Success',
        text,
        timeout,
      })
    },
    successPrimary: (text, timeout = 3000) => {
      window.$nuxt.$emit('alert', {
        open: true,
        type: 'badge',
        color: 'primary',
        title: 'Success',
        text,
        timeout,
        fullwidth: false,
        position: 'top',
      })
    },
    errorPrimary: (text, timeout = 3000) => {
      window.$nuxt.$emit('alert', {
        open: true,
        type: 'badge',
        color: 'error',
        title: 'Error',
        text,
        timeout,
        fullwidth: false,
        position: 'top',
      })
    },
    successText: (text, timeout = 3000) => {
      window.$nuxt.$emit('alert', {
        open: true,
        type: 'text',
        icon: 'CheckCircle',
        color: 'success',
        title: 'Success',
        text,
        timeout,
      })
    },
    dismiss: () => {
      window.$nuxt.$emit('alert', {
        open: false,
        timeout: 0,
      })
    },
  }

  const factories = {
    notification,
    mediaPreview,
    modal,
    getFileModal,
    alert,
    staticTutorialModal,
    actionflowTutorialModal,
  }
  inject('vf', factories)
}
