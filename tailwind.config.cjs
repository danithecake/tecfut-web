module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: process.env.PRODUCTION
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
