import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		notes: [{
			id: 1,
			title: '测试标题',
			content: '测试内容',
			isSelect: true
		}, {
			id: 2,
			title: '测试标题2',
			content: '测试内容2',
			isSelect: false
		}],
		curNotes: {
			id: 1,
			title: '测试标题',
			content: '测试内容'
		}
	},
	mutations: {
		addNewNotes(state){
			//初始化位置
			state.notes.map(item => {
				item.id++
				item.isSelect = false
			})
			let newItem = {
				id:1,
				title: 'New Item',
				content:'New Content',
				isSelect: true
			}
			this.commit('selectSingleNotes',1)
			state.curNotes = newItem
			state.notes.unshift(newItem)
		},
		selectSingleNotes(state, id) {
			state.notes.find(notes => {
				if (notes.id == id) {
					notes.isSelect = true
					state.curNotes = notes
				} else {
					notes.isSelect = false
				}
			})
		},
		notesSelectChange(state, id) {
			state.curNotes = state.notes.find(notes => notes.id === id)
		},
		changeNotesTitle(state, val) {
			let notes = state.notes.find(notes => notes.id == state.curNotes.id)
			notes.title = val
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