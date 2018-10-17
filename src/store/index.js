import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		notes: [{
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}]
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	getters: {
		getNotesList: state => {
			return state.notes
		},
		getNotesById: (state) => (id) => {
			return state.notes.find(notes => notes.id === id)
		}
	}
});