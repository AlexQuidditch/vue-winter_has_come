import { getRandomInt } from '@helpers/randomGenerators';

import API from '../api';

const state = {
  posts: [],
  postDraft: {
    content: '',
    attacments: []
  }
};

const actions = {
  likeWallPost( { commit } , payload ) {
		commit( 'LIKE_WALL_POST' , payload )
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
  addNewPost( { commit , state } , { authorID , wallID } ) {
    console.log(authorID , wallID);
    const newPost = {
      authorID: 1,
      time: new Date(),
      content: state.postDraft.content,
      attacments: state.postDraft.attacments,
      likes: 0,
      reposts: 0,
      comments: []
    };
    API.post( `wall/${ wallID }/create-post/` , newPost )
      .then( ({ body }) => {
        console.log(body);
        commit( 'SET_POSTS' , body.posts )
      })
    // commit( 'ADD_NEW_POST' , payload )
  },
  getPostByWallID( { commit } , payload ) {
    return API.get(`wall/get/${ payload }`)
      .then( ({ body }) => {
        return commit( 'SET_POSTS' , body )
      })
  }
};

const mutations = {
  LIKE_WALL_POST( { posts } , payload ) {
    posts.find( item => {
			if ( item._id === payload[0] ) item.likes += payload[1];
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
  },
  SET_POSTS( { posts } , payload ) {
    posts.splice( 0 , posts.length );
    posts.unshift(...payload);
  }
};

const getters = {};

export default { state , getters , actions , mutations };
