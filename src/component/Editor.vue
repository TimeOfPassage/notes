<template>
	<div class="editor">
		<textarea class="editorArea" v-model="content"></textarea>
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
		margin-left:286px;
		height:100%;
		background: #fff;
		.editorArea{
			width:100%;
			height:99.6%;
			padding:15px;
			border:0;
			border-radius: 0;
		}
	}
</style>