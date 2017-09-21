export default {
  name: 'icon-comments',
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
        return 2;
      }
    }
  },
  template:
`<svg version="1.1" :fill="Fill" :stroke="Stroke" :stroke-width="Width" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
  <path class="st0" d="M21,11.5c0,1.3-0.3,2.6-0.9,3.8c-1.4,2.9-4.4,4.7-7.6,4.7c-1.3,0-2.6-0.3-3.8-0.9L3,21l1.9-5.7 C4.3,14.1,4,12.8,4,11.5c0-3.2,1.8-6.2,4.7-7.6C9.9,3.3,11.2,3,12.5,3H13c4.3,0.2,7.8,3.7,8,8V11.5z"></path>
</svg>`
};
