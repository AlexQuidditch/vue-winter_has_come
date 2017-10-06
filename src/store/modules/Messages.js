const state = {
	dialogs: [
		{
			_id: 0,
			authorID: 2,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			threadID: 1,
			draft: ''
		},
		{
			_id: 1,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			threadID: 1,
			draft: ''
		},
		{
			_id: 2,
			authorID: 1,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 3,
			authorID: 2,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 4,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 5,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 6,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 7,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 8,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 9,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 10,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 11,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 9,
			draft: ''
		},
		{
			_id: 12,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 13,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 6,
			draft: ''
		},
		{
			_id: 14,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 15,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 16,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			_id: 17,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3,
			draft: ''
		},
		{
			_id: 18,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 4,
			draft: ''
		},
		{
			_id: 19,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3,
			draft: ''
		}
	],
	threads: [
		{
			_id: 0,
			dialogInstance: []
		},
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
		},
		{
			_id: 4,
			dialogInstance: []
		},
		{
			_id: 5,
			dialogInstance: []
		},
		{
			_id: 6,
			dialogInstance: []
		},
		{
			_id: 7,
			dialogInstance: []
		},
		{
			_id: 8,
			dialogInstance: []
		},
		{
			_id: 9,
			dialogInstance: []
		},
		{
			_id: 10,
			dialogInstance: []
		},
		{
			_id: 11,
			dialogInstance: []
		},
		{
			_id: 12,
			dialogInstance: []
		}
	]
};

const actions = {
	updateMessage( { commit } , payload ) {
		commit( 'UPDATE_MESSAGE' , payload )
	},
	sendMessage( { commit } , payload ) {
		commit( 'SEND_MESSAGE' , payload )
	}
};

const mutations = {
	UPDATE_MESSAGE( { dialogs } , payload ) {
		dialogs[ payload[0] ].draft = payload[1]
	},
	SEND_MESSAGE( { dialogs , threads } , payload ) {
		// TODO: Отправка сообщений
		const dialog = dialogs.find( dialog => dialog._id == payload );
		const thread = threads.find( thread => thread._id == payload );
		thread.dialogInstance.push({ time: new Date() , content: dialog.draft });
	}
};

const getters = {};

export default { state , getters , actions , mutations };
