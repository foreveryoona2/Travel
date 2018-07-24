<template>
	<div class="container" @click="handleContainerClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
				<swiper-slide v-for="(item,index) of imgs" :key="index">
					<img class="gallary-img" :src="item" alt="">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>	
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		imgs: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			showGallary: false,
			swiperOptions: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observeParents: true,
				observer: true
				//检测到dom变化即会触发刷新一次
			}
		}
	},
	methods: {
		handleContainerClick () {
			this.$emit('close')
		}
	}
};	
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
	overflow inherit
.container
	display flex
	flex-direction column
	justify-content center
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	background-color #000
	z-index 99
	.wrapper
		width 100%
		height 0
		padding-bottom 58.7%
		.gallary-img
			width 100%
		.swiper-pagination
			color #fff
			bottom -1rem
			z-index 1000
</style>