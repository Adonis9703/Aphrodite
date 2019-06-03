<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
		</view>
        <i type="" class="iconfont icon-Desert-0"></i>
		<button @click="test()">
			post
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			test() {
              this.$post({
                url: 'http://47.101.185.46:3000/test',
                param: {}
              }).then(res=> {
                console.log(res)
              },err=>{
                console.log(err)
              })
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
