module.exports = {
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', '1.125rem'],
        sm: ['0.875rem', '1.25rem'],
        md: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.875rem'],
        // Display --> Those are used for larger size headings from H1 to H6.
        'display-xs': [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        'display-sm': ['1.875rem', '2.375rem'],
        'display-md': [
          '2.25rem',
          { lineHeight: '2.75rem', letterSpacing: '-2%' },
        ],
        'display-lg': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-2%' }],
        'display-xl': [
          '3.75rem',
          { lineHeight: '4.625rem', letterSpacing: '-2%' },
        ],
        'display-2xl': [
          '4.5rem',
          { lineHeight: '5.625rem', letterSpacing: '-2%' },
        ],
      },
    },
  },
}
