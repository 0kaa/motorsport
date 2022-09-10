const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        landingButton: '#243B53',
        actionflow: {
          utility: '#E0FCFF',
        },
        module: {
          background: '#F0F4F8',
          inoutput: {
            bg: '#BCCCDC',
            bgh: '#9FB3C8',
            bghd: '#829AB1',
            text: {
              unconnected: '#334E68',
            },
          },
        },
        light: {
          gray: '#F9FAFC',
        },
      },
      spacing: {
        4.5: '1.125rem',
        26: '6.5rem',
        34: '8.5rem',
        38: '9.5rem',
        66: '17rem',
        88: '22rem',
        afcard: '30.125rem',
        180: '45rem',
        120: '30rem',
        54: '13.5rem',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily['sans']],
      },
      zIndex: {
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        110: '100',
        1000000: '1000000',
      },
      fontSize: {
        n: '.6rem',
      },
      width: {
        '1.5/12': '14.2857143%',
      },
      minHeight: {
        '1/2': '50%',
      },
      cursor: {
        default: 'url(/arrow.png), auto',
        pointer: 'url(/hand.png), auto',
        drag: 'url(/drag.png), auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
