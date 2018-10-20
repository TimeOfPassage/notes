<template>
	<div class="toolbar">
		<div class="item" @click="handlePlusNotes">
			<font-icon id="icon-plus"></font-icon>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ToolBar',
	data() {
		return {
			
		}
	},
	methods: {
		handlePlusNotes: function(e) {
			console.log('add notes')
			this.$store.commit('addNewNotes')
		}
	}
}
</script>
<style lang="scss">
	.toolbar{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		background: #2e414f;
		width: 58px;
		color: #fff;
		.item{
			width:100%;
			line-height: 58px;
			text-align: center;
			i{
				font-size: 30px;
			}
		}
		.item:hover{
			background:rgba(45,55,10,1);
			cursor: pointer;
		}
	}
</style>