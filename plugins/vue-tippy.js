import Vue from 'vue'
import VueTippy, { TippyComponent } from 'vue-tippy'

Vue.use(VueTippy, {
  directive: 'tippy', // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      hide: {
        enabled: false,
      },
    },
  },
})

Vue.component('tippy', TippyComponent)

import 'tippy.js/dist/themes/light.css'
import '~/assets/css/tippy-general.css'
import '~/assets/css/tippy-inout.css'
import '~/assets/css/tippy-dark.css'
import '~/assets/css/tippy-dark-error.css'
import '~/assets/css/tippy-light.css'
