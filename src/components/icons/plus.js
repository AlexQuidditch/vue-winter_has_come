export default {
  name: 'icon-plus',
  props: {
    'Fill': {
      type: String,
      default() {
        return 'none';
      }
    },
    'Stroke': {
      type: String,
      default() {
        return '#000000';
      }
    },
    'Width': {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  template:
`<svg version="1.1" :fill="Fill" :stroke="Stroke" :stroke-width="Width" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
  <circle class="st0" cx="12" cy="12" r="10"/>
  <line class="st0" x1="12" y1="8" x2="12" y2="16"/>
  <line class="st0" x1="8" y1="12" x2="16" y2="12"/>
</svg>`
};
