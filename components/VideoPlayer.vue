<template>
  <div class="video-player max-w-full">
    <!-- <video ref="videoPlayer" class="video-js"></video> -->
    <video id="content_video" class="video-js vjs-default-skin">
      <source
        src="https://linerdisk.b-cdn.net/mcLaren_subteacher.mp4"
        type="video/mp4"
      />
    </video>
    <div id="strossle_placeholder"></div>
  </div>
</template>

<script>
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
  methods: {
    videoJs() {
      this.player = videojs(`content_video`, {
        controls: true,
        autoplay: true,
        playsinline: true,
        preload: 'auto',
        loop: false,
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        poster: '/mclaren_subteacher.jpeg',
        width: '100%',
        height: '100%',
        fluid: true,
      })

      // setTimeout(() => {

      var options = {
        id: 'content_video',
        adTagUrl:
          'https://pubads.g.doubleclick.net/gampad/ads?iu=/22652647,22830954724/motorsporthu_instream&description_url=https%3A%2F%2Fmotorsport.hu&tfcd=0&npa=0&sz=640x360&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear',
      }

      this.player.ima(options)

      // var vastPlugin = this.player.vastClient({
      //   adTagUrl:
      //     'https://pubads.g.doubleclick.net/gampad/ads?iu=/22652647,22830954724/motorsporthu_instream&description_url=https%3A%2F%2Fmotorsport.hu&tfcd=0&npa=0&sz=640x360&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear',
      //   playAdAlways: true,
      //   //Note: As requested we set the preroll timeout at the same place than the adsCancelTimeout
      //   adCancelTimeout: 3000,
      //   adsEnabled: true,
      // })
      // this.player.on('reset', function () {
      //   if (!vastPlugin.isEnabled()) {
      //     vastPlugin.enable()
      //   } else {
      //     vastAd.disable()
      //   }
      // })
      // this.player.play()
      // }, 1000)
    },
  },
  mounted() {
    // var link = document.createElement('link')
    // link.rel = 'stylesheet'
    // link.type = 'text/css'
    // link.href = 'https://vjs.zencdn.net/7.18.1/video-js.css'
    // document.getElementsByTagName('head')[0].appendChild(link)
    // var vastLink = document.createElement('vastLink')
    // vastLink.rel = 'stylesheet'
    // vastLink.type = 'text/css'
    // vastLink.href =
    //   'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs.vast.vpaid.min.css'
    // document.getElementsByTagName('head')[0].appendChild(vastLink)
    // var video = document.createElement('script')
    // video.src = 'https://vjs.zencdn.net/7.18.1/video.min.js'
    // var vast = document.createElement('script')
    // vast.src =
    //   'https://cdn.jsdelivr.net/gh/MailOnline/videojs-vast-vpaid@master/bin/videojs_5.vast.vpaid.min.js'
    // document.body.appendChild(video)
    // document.body.appendChild(vast)
    setTimeout(() => {
      this.videoJs()
    }, 500)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
