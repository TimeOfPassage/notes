<template>
	<div class="editor" hidefocus="true" contenteditable="true">
		{{getContent}}
	</div>
</template>

<script>
export default {
	name: 'Editor',
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
	}
</style>