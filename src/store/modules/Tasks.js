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
	// {
	// 	id: 2,
	// 	authorID: 2,
	// 	engagedID: 2,
	// 	title: 'Отрисовка макетов внутренних страниц интернет-магазина',
	// 	picture: 'project2.jpg',
	// 	published: '3 часа 22 минуты назад',
	// 	description: 'Уважаемые Господа!\nВы профессиональные дизайнеры, я же могу оценить вашу работу только субъективно.\nВы можете помочь мне выбрать именно Вас – для этого',
	// 	budget: null,
	// 	isAgreement: true,
	// 	deadline: '7 дней',
	// 	isRush: false,
	// 	views: 1042,
	// 	response: 42,
	// 	isEngaged: true,
	// 	completed: {
	// 		rate: 3,
	// 		status: 'notCompleted',
	// 		review: ''
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
  saveComplete( { commit } , payload ) {
    return API.post( `tasks/${ payload[1] }` , state[1] )
  },
  getTasks( { commit } , payload ) {
    return API.get('task/get/all')
    .then( response => {
      commit( 'GET_TASKS' , response.data );
      return response.data;
    })
  },
  clearTasks( { commit } , payload ) {
    commit( 'CLEAR_TASKS' , payload )
  }
};

const mutations = {
	UPDATE_RATE( state , payload ) {
    // payload[1] = task index
    // payload[0] = rate of task
		state.find( item => {
			if ( item.id === payload[1] ) {
				item.completed.rate = payload[0];
			}
		})
	},
	UPDATE_REVIEW( state , payload ) {
		state.find( item => {
			if ( item.id === payload[1] ) {
				item.completed.review = payload[0];
			}
		})
	},
	UPDATE_STATUS( state , payload ) {
		state.find( item => {
			if ( item.id === payload[1] ) {
				item.completed.status = payload[0];
			}
		})
	},
  GET_TASKS( state , payload ) {
    state.splice( 0 , state.length );
    payload.forEach( task => state.push(task) );
  },
  CLEAR_TASKS( state , payload ) {
    state.splice( 0 , state.length );
  }
};

const getters = {};

export default { state , getters , actions , mutations };
