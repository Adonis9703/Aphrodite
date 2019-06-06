<template>
    <div class="flex-justify">
        <div class="bgcolor-theme opacity_5 height100 absolute width100"></div>
        <section :class="{'fade-in': fade}" class="absolute opacity_0 border-radius20 paddingX44 padding34X"
                 style="min-width: 300rpx;max-width: 400rpx;height: 300rpx; top: 400rpx;">
            <div class="text-align-center color-theme-deep bold font-size10">授权授权授权授权</div>
            <!--<div class="text-align-center color-theme-deep bold font-size10">想要知道你的小心思</div>-->
            <div class="margin-top40 color-666">
                1. 获取头像
               <div class="margin-top20"> 2. 获取昵称</div>
            </div>
            <button class="margin-top60 font-size0 absolute bgcolor-theme-deep color-white" open-type="getUserInfo"
                    @getuserinfo="userInfo"><i class="iconfont2 color-theme bold inline-block icon-check"></i>同意
            </button>
        </section>
    </div>
</template>

<script>
  export default {
    props: ['info'],
    name: "login",
    data() {
      return {
        fade: false
      }
    },
    methods: {
      userInfo(e) {
        this.$emit('getInfo', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .fade-in {
        opacity: 1;
        transform: translateY(-40px);
        transition: all .35s ease-out;
    }
</style>
