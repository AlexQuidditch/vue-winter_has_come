export default {
  name: 'Icon-Card',
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
  <path d="M3,4h18c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V6C1,4.9,1.9,4,3,4z" />
  <line x1="1" y1="10" x2="23" y2="10" />
</svg>`
};
