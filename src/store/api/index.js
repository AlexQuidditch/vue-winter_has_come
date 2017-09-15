/**
 * The file enables `@/store/api/index.js` to import all API modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/)
const API = {};

files.keys().forEach( key => {
	if (key === './index.js') return
	API[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
});

export default API
