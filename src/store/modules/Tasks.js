import API from '../api';

const state = [
  // Initial state of your store
  // {
	// 	id: 1, // ID задачи, ссылка для перехода, и для базы данных
	// 	// всё нижестоящее должно подтягиваться из базы
	// 	authorID: 3, // ID автора задачи
	// 	engagedID: false, // ID исполнителя
	// 	title: 'Разработать технологичный Landing с анимацией и инфографикой', // название задачи
	// 	picture: 'project.jpg',
	// 	town: 'Москва',
	// 	skills: 'Необходимые навыки: ответственность, исполнительность и соблюдение сроков.',
	// 	specialization: [ 'Графический дизайн' , 'Веб-разработка' , 'Разработка интерфейсов' ],
	// 	attached: [ 'photo.jpg' , 'project4.jpg' , 'project8.jpg' , 'project4.jpg' , 'project8.jpg' ],
	// 	published: '1 час 16 минут назад', // сколько времени прошло с публикации
	// 	description: `Уважаемые исполнители, если Вам интересно Выполнение данного проекта просьба изучить ТЗ и обязательно скидывайте примеры Ваших работ с анимацией и инфографикой.\nТребуется создать "под ключ" с точными размерами, с эскизами и з d визуализацией проект офиса на площади около 20 метров квадратных с зонами бухгалтерии, руководителя, секретаря, маленькой кухни, гардеробной.\n\nЖелательно использовать офисные перегородки мобильные или трансформеры, но другие идеи также приемлемы.\nОсмотр помещения и обмеры в районе метро Тульская.\n\nТел. 8 (985) 762 08 94, Александр`, // описание задачи
	// 	budget: 10000, // бюджет задачи
	// 	isAgreement: false, // по договорённости? Если true, то аннулирует budget
	// 	deadline: null, // срок выполнения задачи
	// 	isRush: true, // срочна ли задача? Если true, то аннулирует deadline
	// 	views: 168, // кол-во просмотров задачи
	// 	response: 12, // кол-во отлкликов
	// 	isEngaged: false, // указывает, есть ли исполнитель
	// 	completed: {
	// 		rate: 3, // оценка выполнения задачи
	// 		status: 'notCompleted', // статус задачи 'completed' | 'not completed' | 'cancelled'
	// 		review: '' // текст отзыва
	// 	}
	// }
];

const actions = {
  updateRate( { commit } , payload ) {
    commit( 'UPDATE_RATE' , payload )
  },
  updateReview( { commit } , payload ) {
    commit( 'UPDATE_REVIEW' , payload )
  },
  updateStatus( { commit } , payload ) {
    commit( 'UPDATE_STATUS' , payload )
  },
  changeTask( { commit } , payload ) {
    return API.post( `task/edit/${ payload[0] }` , payload[1] )
  },
  getTasks( { commit } , payload ) {
    return API.get('task/get/all')
      .then( ({ data }) => {
        commit( 'GET_TASKS' , data );
        return data;
      })
  },
  getTaskByID( { commit } , payload ) {
    return API.get(`task/get/${ payload }`)
  },
  clearTasks({ commit }) {
    commit( 'CLEAR_TASKS' );
  }
};

const mutations = {
  // payload[1] = task index
  // payload[0] = rate of task
	UPDATE_RATE( state , payload ) {
		state.find( item => {
			if ( item._id === payload[1] ) {
				item.completed.rate = payload[0];
			}
		})
	},
	UPDATE_REVIEW( state , payload ) {
		state.find( item => {
			if ( item._id === payload[1] ) {
				item.completed.review = payload[0];
			}
		})
	},
	UPDATE_STATUS( state , payload ) {
		state.find( item => {
			if ( item._id === payload[1] ) {
				item.completed.status = payload[0];
			}
		})
	},
  GET_TASKS( state , payload ) {
    state.splice( 0 , state.length );
    payload.forEach( task => state.unshift(task) );
  },
  CLEAR_TASKS( state ) {
    state.splice( 0 , state.length );
  }
};

const getters = {};

export default { state , getters , actions , mutations };
