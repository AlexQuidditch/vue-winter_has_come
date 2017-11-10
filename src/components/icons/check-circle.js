export default {
  name: 'Icon-Check-Circle',
  props: {
    'Fill': {
      type: String,
      default() {
        return 'none'
      }
    },
    Stroke: {
      type: String,
      default() {
        return '#4a4a4a'
      }
    },
    Width: {
      type: Number,
      default() {
        return 2
      }
    }
  },
  template:
`<svg :fill="Fill" :stroke="Stroke" :stroke-width="Width" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="23 3 12 14 9 11"></polyline>
</svg>`
};
