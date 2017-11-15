export default {
  name: 'Icon-Message',
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
  <path class="st0" d="M21,15c0,1.1-0.9,2-2,2H7l-4,4V5c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2V15z"></path>
</svg>`
};
