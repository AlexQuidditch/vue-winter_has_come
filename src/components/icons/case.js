export default {
  name: 'icon-case',
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
`<svg version="1.1" :fill="Fill" :stroke="Stroke" :stroke-width="Width"
  xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"
	viewBox="0 0 24 24">
	<path d="M4,7h16c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V9C2,7.9,2.9,7,4,7z" />
	<path d="M16,21V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v16" />
</svg>`
};
