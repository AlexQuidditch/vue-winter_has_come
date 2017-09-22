const state = [
  {
    id: 0,
    authorID: 3,
    time: "2017-09-20T20:32:25.884Z",
    content: 'wdqwd\nqwdqwd\nqwdqwd\n\nwqd',
    attacments: '',
    likes: 12,
    reposts: 1,
    comments: [
      {
        id: 1,
        authorID: 1,
        time: "2017-09-20T20:32:25.884Z",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        attacments: '',
        likes: 12
      }
    ]
  },
  {
    id: 1,
    authorID: 1,
    time: "2017-09-20T20:32:25.884Z",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga minima sapiente, odio distinctio maiores, illum laboriosam ipsa nisi voluptatibus a porro beatae praesentium ipsam. Quae rem explicabo unde ex!',
    attacments: '',
    likes: 12,
    reposts: 1,
    comments: [
      {
        id: 2,
        authorID: 1,
        time: "2017-09-20T20:33:25.884Z",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        attacments: '',
        likes: 87
      },
      {
        id: 3,
        authorID: 2,
        time: "2017-09-20T20:39:25.884Z",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        attacments: '',
        likes: 45
      }
    ]
  },
  {
    id: 2,
    authorID: 3,
    time: "2017-09-20T20:32:25.884Z",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attacments: '',
    likes: 12,
    reposts: 1,
    comments: [
      {
        id: 4,
        authorID: 1,
        time: "2017-09-20T20:32:25.884Z",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        attacments: '',
        likes: 12
      }
    ]
  },
  {
    id: 3,
    authorID: 2,
    time: "2017-09-20T20:32:25.884Z",
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attacments: '',
    likes: 12,
    reposts: 1,
    comments: [
      {
        id: 5,
        authorID: 1,
        time: "2017-09-20T20:32:25.884Z",
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        attacments: '',
        likes: 1
      }
    ]
  }
];

const actions = {
  likeWallPost( { commit } , payload ) {
		commit( 'LIKE_WALL_POST' , payload )
  },
  addComment( { commit } , payload ) {
		commit( 'ADD_COMMENT' , payload )
  },
  likeComment( { commit } , payload ) {
    commit( 'LIKE_COMMENT' , payload )
  }
};

const mutations = {
  LIKE_WALL_POST( state , payload ) {
    state.find( item => {
			if ( item.id === payload[0] ) item.likes += payload[1];
		})
  },
  ADD_COMMENT( state , payload ) {
    state.find( item => {
			if ( item.id === payload[0] ) item.comments.push(payload[1]);
		})
  },
  LIKE_COMMENT( state , payload ) {
    state.forEach( wallPost => {
      wallPost.comments.find( commentItem => {
        if ( commentItem.id === payload[0] ) commentItem.likes += payload[1];
      })
    })
  }
};

const getters = {};

export default { state , getters , actions , mutations };
