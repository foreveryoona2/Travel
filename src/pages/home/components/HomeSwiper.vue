<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		<swiper-slide v-for="item of list"
		  :key="item.id">
			<img class="swiper-img" :src="item.imgUrl" alt="">
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>			
	</div>

</template>
<script>
export default{
	name: 'HomeSwiper',
	props:{
		list:Array
	},
	data (){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay:2000,
				disableOnInteraction: true
			}
		}
	},
	computed:{
		showSwiper () {
			return this.list.length
		}
	}
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
		background:#fff !important
.wrapper
	overflow:hidden
	width:100%
	height:0
	background:#eee
	padding-bottom:26.67% 
	
	//宽高比，height为0，用padding撑开，或者写height:26.67vw(考虑兼容性还是选择前者)
	.swiper-img
		width:100%
</style>