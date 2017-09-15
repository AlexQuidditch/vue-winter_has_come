import Vue from 'vue';

const post = ( url , payload ) => Vue.http.post( url , payload );

export default post;
