import API from '../api';

const state = {
	common: {
		email: '',
		phone: '',
		link: '',
		bornDate: '2017-08-18T18:37:00.000Z',
		password: '',
		caption: '',
		publishEmail: false
	},
	confidential: {
		contacts: 1,
		teams: 2,
		messages: 3,
		reviews: 4
	},
	payments: {},
  about: {
    specialization: '',
    town: '',
    about: '',
    education: {
      place: '',
      faculty: ''
    },
    vk: '',
    fb: '',
    skype: '',
    telegram: ''
  },
	company: {
    title: '',
    link: '',
    activities: '',
    starts: '',
    achivements: ''
	}
};

const actions = {
	updateEmail( { commit } , payload ) {
		commit( 'UPDATE_EMAIL' , payload )
	},
	updatePassword( { commit } , payload ) {
		commit( 'UPDATE_PASSWORD' , payload )
	},
	updateLink( { commit } , payload ) {
		commit( 'UPDATE_LINK' , payload )
	},
	updatePhone( { commit } , payload ) {
		commit( 'UPDATE_PHONE' , payload )
	},
	updateBornDate( { commit } , payload ) {
		commit( 'UPDATE_BORN_DATE' , payload )
	},
	updateCaption( { commit } , payload ) {
		commit( 'UPDATE_CAPTION' , payload )
	},
	updateCheck( { commit } , payload ) {
		commit( 'UPDATE_CHECK' , payload )
	},
	saveCommon( { state } , payload ) {
		return API.post( `settings/common/${ payload }` , state.common )
	},
	saveAbout( { state } , payload ) {
		return API.post( `settings/about/${ payload }` , state.about )
	},
	saveCompany( { state } , payload ) {
		return API.post( `settings/company/${ payload }` , state.company )
	},
	// confidential
	updateContacts( { commit } , payload ) {
		commit( 'UPDATE_CONTACTS' , payload )
	},
	updateTeams( { commit } , payload ) {
		commit( 'UPDATE_TEAMS' , payload )
	},
	updateMessages( { commit } , payload ) {
		commit( 'UPDATE_MESSAGES' , payload )
	},
	updateReviews( { commit } , payload ) {
		commit( 'UPDATE_REVIEWS' , payload )
	},
	// saveConfidential({ state }) {
	// 	return API.post( 'user/ussser', state.confidential )
	// },
	saveConfidential( { state } , payload ) {
    console.log( payload );
		// return API.post( `settings/confidential/${ payload }` , state.confidential )
	}
};

const mutations = {
	UPDATE_EMAIL( { common } , payload ) {
		common.email = payload
	},
	UPDATE_PASSWORD( { common } , payload ) {
		common.password = payload
	},
	UPDATE_LINK( { common } , payload ) {
		common.link = payload
	},
	UPDATE_PHONE( { common } , payload ) {
		common.phone = payload
	},
	UPDATE_BORN_DATE( { common } , payload ) {
		common.bornDate = payload
	},
	UPDATE_CAPTION( { common } , payload ) {
		common.caption = payload
	},
	UPDATE_CHECK( { common } , payload ) {
		common.publishEmail = payload
	},
	// CONFIDENTIAL
	UPDATE_CONTACTS( { confidential } , payload ) {
		confidential.contacts = Number(payload)
	},
	UPDATE_MESSAGES( { confidential } , payload ) {
		confidential.messages = Number(payload)
	},
	UPDATE_TEAMS( { confidential } , payload ) {
		confidential.teams = Number(payload)
	},
	UPDATE_REVIEWS( { confidential } , payload ) {
		confidential.reviews = Number(payload)
	},
  // PERSONAL
  SETTINGS_UPDATE_SPECIALIZATION( { about } , payload ) {
    about.specialization = payload;
  },
  SETTINGS_UPDATE_TOWN( { about } , payload ) {
    about.town = payload;
  },
  SETTINGS_UPDATE_ABOUT( { about } , payload ) {
    about.about = payload;
  },
  SETTINGS_UPDATE_COUNTRY( { about } , payload ) {
    about.country = payload;
  },
  SETTINGS_UPDATE_EDUPLACE( { about } , payload ) {
    about.education.place = payload;
  },
  SETTINGS_UPDATE_FACULTY( { about } , payload ) {
    about.education.faculty = payload;
  },
  // SOCIAL
  SETTINGS_UPDATE_VK( { about } , payload ) {
    about.vk = payload;
  },
  SETTINGS_UPDATE_FB( { about } , payload ) {
    about.fb = payload;
  },
  SETTINGS_UPDATE_SKYPE( { about } , payload ) {
    about.skype = payload;
  },
  SETTINGS_UPDATE_TELEGRAM( { about } , payload ) {
    about.telegram = payload;
  },
  // company
  COMPANY_TITLE_UPDATE( { company } , payload ) {
    company.title = payload;
  },
  COMPANY_LINK_UPDATE( { company } , payload ) {
    company.link = payload;
  },
  COMPANY_ACTIVITIES_UPDATE( { company } , payload ) {
    company.activities = payload;
  },
  COMPANY_STARTS_UPDATE( { company } , payload ) {
    company.starts = payload;
  },
  COMPANY_ACHIVEMENTS_UPDATE( { company } , payload ) {
    company.achivements = payload;
  }
};

const getters = {};

export default { state , getters , actions , mutations };
