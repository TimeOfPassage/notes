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
			<div class="recordRow" v-for="(item,index) of notes" :key="index" @click="selectRecord">
				{{item.title}} - {{item.content}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotesList',
	data() {
		return {
			isSelect: true,
			notes: [{
				id: 1,
				title: 'this is title',
				content: 'this is content'
			},{
				id: 2,
				title: 'this is title',
				content: '美味的额午餐'
			},{
				id: 3,
				title: 'this is title',
				content: '丰盛的午餐'
			},{
				id: 4,
				title: 'this is title',
				content: '难吃的午餐'
			},{
				id: 5,
				title: 'this is title',
				content: '西安面馆'
			}]
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
		selectRecord: function(e){
			var eNodes = this.siblings(e.target);
			for(var node of eNodes){
				node.classList.remove('selected');
			}
			e.target.classList.add('selected');
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
		position: absolute;
		top: 0;
		left: 58px;
		bottom: 0;
		background: #fff;
		width: 228px;
		border-right:1px solid #ccc;
		.title{
			width: 100%;
			height: 20%;
			padding-top:30px;
			padding-bottom:10px;
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
			width:100%;
			cursor:pointer;
			height:80%;
			overflow: hidden;
			background:#fff;
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