<template>
	<div class="noteslist">
		<div class="title">
			<div class="head">NOTES</div>
			<div class="switch">
				<div class="cate" :class="{on: isSelect}" @click="show">
					All Notes
				</div>
				<div class="cate" :class="{on: !isSelect}" @click="show">
					Favorites
				</div>
			</div>
		</div>
		<div class="body">
			<div class="recordRow" v-for="(item,index) of getNotesList" :key="index" :class="item.isSelect?'selected':''" @click="selectRecord(item.id)">
				{{item.title}}
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'NotesList',
	data() {
		return {
			isSelect: true
		}
	},
	computed: {
		getNotesList () {
			let notes = this.$store.getters.getNotesList;
			notes.find(notes => {
				if(notes.title != null && notes.title.length > 15){
					notes.title = notes.title.substr(0,15).trim() + '...';
				}
			})
			return notes
		}
	},
	methods: {
		show: function(e){
			if(this.isSelect){
				this.isSelect = false;
			}else{
				this.isSelect = true;
			}
		},
		selectRecord: function(id,e){
			this.$store.commit('selectSingleNotes',id);
		},
		siblings: function(elm) {
			var a = [];
			var p = elm.parentNode.children;
			for(var i =0,pl= p.length;i<pl;i++) {
				if(p[i] !== elm) a.push(p[i]);
			}
			return a;
		}
	}
}
</script>
<style lang="scss">
	.noteslist{
		background: #fff;
		width: 228px;
		position: absolute;
		top:0;
		left:56px;
		bottom:0;
		height:100%;
		border-right:1px solid #ccc;
		.title{
			width: 100%;
			height:100px;
			padding-top:10px;
			.head{
				text-align:center;
				font-size:18px;
			}
			.switch{
				border:1px solid gray;
				width:80%;
				height:30px;
				border-radius: 5px;
				margin:0px auto;
				margin-top:10px;
				cursor: pointer;
				.cate{
					float: left;
					width:50%;
					line-height: 28px;
					text-align:center;
				}
				.cate:nth-child(1){
					border-right:1px solid #000;
				}
			}
		}
		.body{
			position: absolute;
			width:100%;
			bottom:0;
			top:100px;
			left:0;
			overflow: hidden;
			overflow-y: auto;
			.recordRow{
				width:100%;
				height:40px;
				line-height:40px;
				padding-left:10px;
				padding-right:5px;
				background:#fff;
			}
			.selected{
				background:#007cff;
				color:#fff;
			}
		}
	}
	.on{
		background:#ccc;
		box-shadow: 10px;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	*::-webkit-scrollbar
	{
	    width: 2px;
	    height: 2px;
	    background-color: #fff;
	}

	/*定义滑块 内阴影+圆角*/
	*::-webkit-scrollbar-thumb
	{
	    border-radius: 2px;
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: #ccc;
	}
</style>