export default {
  name: 'Icon-User',
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
        return 1
      }
    }
  },
  template:
`<svg version="1.1" :fill="Fill" :stroke="Stroke" :stroke-width="Width" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path class="st0" d="M20,21v-2c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4v2"/>
  <circle class="st0" cx="12" cy="7" r="4"/>
</svg>`
};
