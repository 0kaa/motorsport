<template>
  <div class="max-w-full">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// import 'videojs-vast-vpaid'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    // videojs.registerPlugin('ads-setup', function (opts) {
    //   var player = this
    //   var adsCancelTimeout = 3000

    //   var vastAd = player.vastClient({
    //     //Media tag URL
    //     adTag:
    //       'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
    //     playAdAlways: true,
    //     //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
    //     adCancelTimeout: adsCancelTimeout,
    //     adsEnabled: !!options.adsEnabled,
    //   })
    // })
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this)
    })
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
