<template>
	<div class="editor">
		<title class="title" @keyup="handleKeyUp">
			<input type="text" v-model="getContent.title" value="sfsdfdsf" hidefocus="true" />
		</title>
		<hr>
		<content class="content" contenteditable="true">
			{{getContent.content}}
		</content>
	</div>
</template>

<script>
export default {
	name: 'Editor',
	data() {
		return {
			
		}
	},
	methods: {
		handleKeyUp: function(e){
			this.$store.commit('changeNotesTitle',e.target.value)
		}
	},
	computed: {
		getContent () {
			return this.$store.getters.getCurNotes
		}
	}
}
</script>

<style lang="scss">
	.editor{
		position: absolute;
		top:0;
		right:0;
		bottom:0;
		left:286px;
		width:auto;
		height:100%;
		background: #fff;
		outline:0;
		padding:15px;
		font-size:16px;
		overflow: hidden;
		overflow-y: auto;
		.title{
			width:auto;
			height:40px;
			background:#ccc;
			display: block;
			input{
				outline:0;
				border:0;
				width:100%;
				height:100%;
				font-weight:bold;
			}
		}
		hr{
			margin-top:0px;
		}
		.content{
			width:100%;
			height:100%;
			outline:0;
			border:0;
		}
	}
</style>