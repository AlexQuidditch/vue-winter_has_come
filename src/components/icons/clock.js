export default {
  name: 'icon-clock',
  props: {
    'Fill': {
      type: String,
      default() {
        return 'none'
      }
    },
    'Stroke': {
      type: String,
      default() {
        return '#4a4a4a'
      }
    },
    'Width': {
      type: Number,
      default() {
        return 2
      }
    }
  },
  template:
`<svg :fill="Fill" :stroke="Stroke" :stroke-width="Width" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 15 15"></polyline>
</svg>`
};
