/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      /*fontFamily: {
        'body': ['Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }*/
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '512px': '512px',
        '1024px': '1024px',
      }
    },
  },
  variants: {},
  plugins: []
}
