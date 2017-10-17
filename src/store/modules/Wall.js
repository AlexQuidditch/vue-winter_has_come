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
  likeWallPost( { commit } , { wallID , postID , value } ) {
    API.post( `wall/${ wallID }/edit-post/${ postID }` , { like : value } )
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
  addNewPost( { commit , state } , { authorID , wallID } ) {
    const Store = this;
    console.log(Store);
    const newPost = {
      // authorID: Store.state.User._id,
      authorID: 1,
      time: new Date(),
      content: state.postDraft.content,
      attacments: state.postDraft.attacments,
      likes: [],
      reposts: 0,
      comments: []
    };
    API.post( `wall/${ wallID }/create-post/` , newPost )
      .then( ({ body }) => {
        console.log(body);
        commit( 'SET_POSTS' , body.posts )
      })
  },
  getPostByWallID( { commit } , payload ) {
    return API.get(`wall/get/${ payload }`)
      .then( ({ body }) => {
        return commit( 'SET_POSTS' , body )
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
  },
  SET_POSTS( { posts } , payload ) {
    console.log( posts );
    posts.splice( 0 , posts.length );
    posts.push(...payload);
  }
};

const getters = {};

export default { state , getters , actions , mutations };
