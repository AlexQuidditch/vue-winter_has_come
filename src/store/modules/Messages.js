const state = {
	dialogs: [
		{
			_id: 1,
			authorID: '5a09b83b0851a927abf1a909',
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Паровозик',
			unreaded: 3,
			threadID: 1,
			draft: ''
		},
		{
			_id: 2,
			authorID: '5a0937207a7f79218f32d71b',
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			threadID: 2,
			draft: ''
		},
		{
			_id: 3,
			authorID: '5a0939404ca2b12433e18b06',
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Рыба рыба',
			unreaded: 3,
			threadID: 3,
			draft: ''
		}
	],
	threads: [
		{
			_id: 1,
			dialogInstance: []
		},
		{
			_id: 2,
			dialogInstance: []
		},
		{
			_id: 3,
			dialogInstance: []
		}
	]
};

const actions = {
	updateMessage( { commit } , payload ) {
		commit( 'UPDATE_MESSAGE' , payload )
	},
	sendMessage( { commit } , payload ) {
		return commit( 'SEND_MESSAGE' , payload )
	}
};

const mutations = {
	UPDATE_MESSAGE( { dialogs } , payload ) {
    const target = dialogs
      .find( dialog => dialog._id == payload[0] );
		target.draft = payload[1];
	},
	SEND_MESSAGE( { dialogs , threads } , payload ) {
		// TODO: Отправка сообщений
		const dialog = dialogs.find( dialog => dialog._id == payload );
		const thread = threads.find( thread => thread._id == payload );
		return thread.dialogInstance.push({ time: new Date() , content: dialog.draft });
	}
};

const getters = {};

export default { state , getters , actions , mutations };
