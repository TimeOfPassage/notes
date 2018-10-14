<template>
	<div class="toolbar">
		<div>
			+
		</div>
	</div>
</template>

<script>
export default {
	name: 'ToolBar',
	data() {
		return {
			
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
		div{
			text-align: center;
			font-size: 18px;
		}
	}
</style>