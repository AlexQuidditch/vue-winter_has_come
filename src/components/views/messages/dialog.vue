<template lang="html">
  <div class="dialog">
		{{ Contacts[$route.params.id] }}
  </div>
</template>

<script>

  export default {
    name: "dialog",
		data: () => ({
			Contacts: [
				{
					id: 1,
					isAgent: false,
					isOnline: true,
					avatar: 'christopher-campbell-40410.jpg',
					name: 'Ольга',
					sename: 'Смирнова',
					isUnreaded: false,
					lastMessage: '2017-09-03T18:23:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 3
				},
				{
					id: 2,
					isAgent: true,
					isOnline: true,
					avatar: 'agent.jpg',
					name: 'Евгений',
					sename: 'Воронин',
					isUnreaded: true,
					lastMessage: '2017-09-01T12:59:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 19
				},
				{
					id: 3,
					isAgent: true,
					isOnline: false,
					avatar: 'agent2.jpg',
					name: 'Александр',
					sename: 'Вернер',
					isUnreaded: true,
					lastMessage: '2017-07-13T18:00:23.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 0
				},
				{
					id: 4,
					isAgent: true,
					isOnline: false,
					avatar: 'agent2.jpg',
					name: 'Александр',
					sename: 'Вернер',
					isUnreaded: true,
					lastMessage: '2017-07-13T18:00:23.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 0
				},
				{
					id: 5,
					isAgent: true,
					isOnline: false,
					avatar: 'agent2.jpg',
					name: 'Александр',
					sename: 'Вернер',
					isUnreaded: true,
					lastMessage: '2017-07-13T18:00:23.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 0
				},
				{
					id: 6,
					isAgent: false,
					isOnline: true,
					avatar: 'christopher-campbell-40410.jpg',
					name: 'Ольга',
					sename: 'Смирнова',
					isUnreaded: false,
					lastMessage: '2017-09-03T18:23:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 3
				},
				{
					id: 7,
					isAgent: true,
					isOnline: true,
					avatar: 'agent.jpg',
					name: 'Евгений',
					sename: 'Воронин',
					isUnreaded: true,
					lastMessage: '2017-09-01T12:59:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 19
				},
				{
					id: 8,
					isAgent: false,
					isOnline: true,
					avatar: 'christopher-campbell-40410.jpg',
					name: 'Ольга',
					sename: 'Смирнова',
					isUnreaded: false,
					lastMessage: '2017-09-03T18:23:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 3
				},
				{
					id: 9,
					isAgent: true,
					isOnline: true,
					avatar: 'agent.jpg',
					name: 'Евгений',
					sename: 'Воронин',
					isUnreaded: true,
					lastMessage: '2017-09-01T12:59:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 19
				},
				{
					id: 10,
					isAgent: false,
					isOnline: true,
					avatar: 'christopher-campbell-40410.jpg',
					name: 'Ольга',
					sename: 'Смирнова',
					isUnreaded: false,
					lastMessage: '2017-09-03T18:23:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 3
				},
				{
					id: 11,
					isAgent: true,
					isOnline: true,
					avatar: 'agent.jpg',
					name: 'Евгений',
					sename: 'Воронин',
					isUnreaded: true,
					lastMessage: '2017-09-01T12:59:29.078Z',
					previewMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, mollitia quisquam officiis voluptatum iure magnam nesciunt, doloremque rem eius placeat, libero vero culpa inventore! Quae neque doloremque, voluptates porro molestiae.',
					unreaded: 19
				}
			]
		}),
		methods: {
		}
  };

</script>

<style lang="scss">

  .dialog {}

</style>
