import Vue from 'vue';

const get = url => Vue.http.get( url );

export default get;
