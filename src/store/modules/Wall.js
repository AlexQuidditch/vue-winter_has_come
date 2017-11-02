import { getRandomInt } from '@helpers/randomGenerators';

import API from '../api';

const state = {
  postDraft: {
    content: '',
    attacments: []
  },
  posts: []
};

const actions = {
  likeWallPost( { commit } , { wallID , postID , value } ) {
    API.post( `wall/edit/${ postID }` , { like : value } )
      .then( ({ body }) => {
        let data = { postID , likes : body };
    		commit( 'LIKE_WALL_POST' , data )
      })
  },
  addComment( { commit } , payload ) {
		commit( 'ADD_COMMENT' , payload )
  },
  likeComment( { commit } , payload ) {
    commit( 'LIKE_COMMENT' , payload )
  },
  updateDraft( { commit } , payload ) {
    commit( 'UPDATE_DRAFT' , payload )
  },
  addNewPost( { commit , state } , authorID ) {
    const newPost = {
      authorID,
      time: new Date(),
      content: state.postDraft.content,
      attacments: state.postDraft.attacments,
      likes: [],
      reposts: 0,
      comments: []
    };
    return API.post( `wall/create` , newPost )
      .then( ({ body }) => {
        commit( 'SET_POSTS' , body );
        return body;
      })
  }
};

const mutations = {
  LIKE_WALL_POST( { posts } , { postID , likes } ) {
    posts.find( post => {
			if ( post._id == postID ) post.likes = likes;
		})
  },
  ADD_COMMENT( { posts } , payload ) {
    posts.find( item => {
			if ( item._id === payload[0] ) item.comments.push(payload[1]);
		})
  },
  LIKE_COMMENT( { posts } , payload ) {
    posts.forEach( wallPost => {
      wallPost.comments.find( commentItem => {
        if ( commentItem._id === payload[0] ) commentItem.likes += payload[1];
      })
    })
  },
  UPDATE_DRAFT( { postDraft } , payload ) {
    postDraft.content = payload;
  },
  ADD_NEW_POST( { postDraft , posts } , payload ) {
    posts.unshift(newPost);
    postDraft.content = '';
    postDraft.attacments = [];
  }
};

const getters = {};

export default { state , getters , actions , mutations };
