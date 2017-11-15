export default {
  name: 'Icon-Bell',
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
  <path d="M22,17H2c1.7,0,3-1.3,3-3V9c0-3.9,3.1-7,7-7s7,3.1,7,7v5C19,15.7,20.3,17,22,17z M13.7,21 c-0.6,1-1.8,1.3-2.7,0.7c-0.3-0.2-0.6-0.4-0.7-0.7" />
</svg>`
};
