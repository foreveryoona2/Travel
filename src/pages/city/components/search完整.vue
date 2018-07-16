<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div class="search-content">
			<ul class="">
				<li v-for="item of list">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CitySearch',
	props: {
		cities :Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	watch: {
		keyword () {
			if(this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
							result.push(value)

						}
					})
				}
				this.list = result
			},100)
		}
	}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height .72rem
	background-color $bgColor
	padding 0 .1rem
	.search-input
		width 99%
		height .62rem
		line-height .62rem
		text-align center
		border-radius .06rem
		outline-style none
		color #666
		box-sizing border-box
		padding 0 .1rem
.search-content
	z-index 1
	overflow hidden
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	background-color green
</style>
