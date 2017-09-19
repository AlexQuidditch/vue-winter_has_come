const state = {
	dialogs: [
		{
			id: 1,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3,
			threadID: 1
		},
		{
			id: 2,
			authorID: 1,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 3,
			authorID: 2,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 4,
			authorID: 3,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 5,
			authorID: 3,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 6,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		},
		{
			id: 7,
			authorID: 3,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 8,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		},
		{
			id: 9,
			authorID: 3,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 10,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		},
		{
			id: 11,
			authorID: 3,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 12,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		},
		{
			id: 13,
			authorID: 3,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 14,
			authorID: 3,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 15,
			authorID: 3,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 16,
			authorID: 3,
			isOnline: false,
			isUnreaded: true,
			lastMessage: '2017-07-13T18:00:23.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 0
		},
		{
			id: 17,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		},
		{
			id: 18,
			authorID: 3,
			isOnline: true,
			isUnreaded: true,
			lastMessage: '2017-09-01T12:59:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 19
		},
		{
			id: 19,
			authorID: 3,
			isOnline: true,
			isUnreaded: false,
			lastMessage: '2017-09-03T18:23:29.078Z',
			previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
			unreaded: 3
		}
	],
	threads: [
		{
			id: 1
		}
	]
};

const actions = {};

const mutations = {};

const getters = {};

export default { state , getters , actions , mutations };
