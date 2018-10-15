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
		margin-left:286px;
		height:100%;
		background: #fff;
		outline:0;
		padding:15px;
		font-size:16px;
	}
</style>