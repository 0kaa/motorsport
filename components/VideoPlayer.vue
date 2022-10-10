<template>
  <div class="max-w-full">
    <!-- <video ref="videoPlayer" class="video-js"></video> -->
    <video id="video-js" class="video-js">
      <source
        src="https://linerdisk.b-cdn.net/mcLaren_subteacher.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
// import videojs from 'video.js'
// import 'video.js/dist/video-js.css'
// import 'videojs-vast-vpaid'

export default {
  name: 'VideoPlayer',
  // head() {
  //   return {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://vjs.zencdn.net/5.9.2/video-js.css',
  //       },
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs.vast.vpaid.min.css',
  //       },
  //     ],
  //     script: [
  //       {
  //         src: 'https://vjs.zencdn.net/5.9.2/video.js',
  //         type: 'text/javascript',
  //       },
  //       {
  //         src: 'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs_5.vast.vpaid.min.js',
  //         type: 'text/javascript',
  //       },
  //       {
  //         src: 'https://cdn.viblast.com/vb/6.62/viblast.js',
  //         type: 'text/javascript',
  //       },
  //     ],
  //   }
  // },
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
  methods: {
    videoJs() {
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
      //     adsEnabled: true,
      //   })
      //   vastAd.enable()
      // })
      const player = videojs(`video-js`, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        loop: false,
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        poster: '/mclaren_subteacher.jpeg',
        width: '100%',
        height: '100%',
        fluid: true,
      })
      var vastPlugin = player.vastClient({
        adTagUrl:
          'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
        playAdAlways: true,
        //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
        adCancelTimeout: 3000,
        adsEnabled: true,
      })
      player.on('reset', function () {
        if (!vastPlugin.isEnabled()) {
          vastPlugin.enable()
        } else {
          vastAd.disable()
        }
      })
      videojs.options.autoplay = true
    },
  },
  mounted() {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = 'https://vjs.zencdn.net/7.18.1/video-js.css'
    document.getElementsByTagName('head')[0].appendChild(link)
    var vastLink = document.createElement('vastLink')
    vastLink.rel = 'stylesheet'
    vastLink.type = 'text/css'
    vastLink.href =
      'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs.vast.vpaid.min.css'
    document.getElementsByTagName('head')[0].appendChild(vastLink)
    var video = document.createElement('script')
    video.src = 'https://vjs.zencdn.net/7.18.1/video.min.js'
    var vast = document.createElement('script')
    vast.src =
      'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs_5.vast.vpaid.min.js'
    document.body.appendChild(video)
    document.body.appendChild(vast)
    setTimeout(() => {
      this.videoJs()
    }, 3000)
  },
  // mounted() {
  //   // videojs.registerPlugin('ads-setup', function (opts) {
  //   //   var player = this
  //   //   var adsCancelTimeout = 3000

  //   //   var vastAd = player.vastClient({
  //   //     //Media tag URL
  //   //     adTag:
  //   //       'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
  //   //     playAdAlways: true,
  //   //     //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
  //   //     adCancelTimeout: adsCancelTimeout,
  //   //     adsEnabled: !!options.adsEnabled,
  //   //   })
  //   // })
  //   this.player = videojs(this.$refs.videoPlayer, this.options, () => {
  //     this.player.log('onPlayerReady', this)
  //   })
  // },

  // beforeDestroy() {
  //   if (this.player) {
  //     this.player.dispose()
  //   }
  // },
}
</script>
