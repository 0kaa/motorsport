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

      },
      fontFamily: {
        bai: ['Bai Jamjuree', ...defaultTheme.fontFamily['sans']],
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
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
