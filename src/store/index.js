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
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}, {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2'
		}],
		curNotes: {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}
	},
	mutations: {
		notesSelectChange(state, id) {
			state.curNotes = state.notes.find(notes => notes.id === id)
		}
	},
	getters: {
		getNotesList: state => {
			return state.notes
		},
		getCurNotes: (state) => {
			return state.curNotes
		}
	}
});