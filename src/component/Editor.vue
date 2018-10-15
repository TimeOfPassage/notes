<template>
	<div class="editor" v-model="content" hidefocus="true" contenteditable="true">
		
	</div>
</template>

<script>
export default {
	name: 'Editor',
	data() {
		return {
			content: 'aaaa'
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