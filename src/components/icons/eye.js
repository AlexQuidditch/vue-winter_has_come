export default {
  name: 'Icon-Eye',
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
  <path d="M1,12c0,0,4-8,11-8s11,8,11,8s-4,8-11,8S1,12,1,12z"></path>
  <circle cx="12" cy="12" r="3"></circle>
</svg>`
};
