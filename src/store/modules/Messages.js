const state = {
	dialogs: [
		{
			id: 0,
			authorID: 2,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			threadID: 1,
			draft: ''
		},
		{
			id: 1,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			threadID: 1,
			draft: ''
		},
		{
			id: 2,
			authorID: 1,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 3,
			authorID: 2,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 4,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 5,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 6,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 7,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 8,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 9,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 10,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 11,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 9,
			draft: ''
		},
		{
			id: 12,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 13,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 6,
			draft: ''
		},
		{
			id: 14,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 15,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 16,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0,
			draft: ''
		},
		{
			id: 17,
			authorID: 3,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3,
			draft: ''
		},
		{
			id: 18,
			authorID: 3,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 4,
			draft: ''
		},
		{
			id: 19,
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
			id: 0,
			dialogInstance: []
		},
		{
			id: 1,
			dialogInstance: []
		},
		{
			id: 2,
			dialogInstance: []
		},
		{
			id: 3,
			dialogInstance: []
		},
		{
			id: 4,
			dialogInstance: []
		},
		{
			id: 5,
			dialogInstance: []
		},
		{
			id: 6,
			dialogInstance: []
		},
		{
			id: 7,
			dialogInstance: []
		},
		{
			id: 8,
			dialogInstance: []
		},
		{
			id: 9,
			dialogInstance: []
		},
		{
			id: 10,
			dialogInstance: []
		},
		{
			id: 11,
			dialogInstance: []
		},
		{
			id: 12,
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
		const dialog = dialogs.find( dialog => dialog.id == payload );
		const thread = threads.find( thread => thread.id == payload );
		thread.dialogInstance.push({ time: new Date() , content: dialog.draft });
	}
};

const getters = {};

export default { state , getters , actions , mutations };
