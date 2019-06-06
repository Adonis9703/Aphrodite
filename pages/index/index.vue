<template>
    <div class="content">
        <login v-if="showLogin" ref="login" @getInfo="setInfo" :info="'登录'"></login>
    </div>
</template>

<script>
  import login from '../../components/login'

  export default {
    components: {login},
    data() {
      return {
        title: 'Hello',
        showLogin: false
      }
    },
    onLoad() {
      let temp = wx.getStorageSync('userInfo')
      if (!temp) {
        this.showLogin = true
        console.log('用户信息不存在')
        setTimeout(() => {
          console.log('fade in')
          this.$refs.login.fade = true
        }, 300)
      }
    },
    methods: {
      setInfo(e) {
        if (e.detail.rawData) {
          console.log('用户信息', e.detail.rawData)
          let data = e.detail.rawData
          wx.setStorageSync('userInfo', data)
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              this.showLogin = false
            }
          })
        }
      },
      test() {
        this.$post({
          url: 'http://127.0.0.1:3000/test',
          param: {}
        }).then(res => {
          console.log(res)
        }, err => {
          console.log(err)
        })
      },
      login() {
        let that = this
        wx.login({
          success(res) {
            if (res.code) {
              that.$post({
                url: 'http://127.0.0.1:3000/login',
                param: {
                  code: res.code
                }
              }).then(res1 => {
                console.log(`登录`, res1)
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
    .content {
        /*height: 100%;*/
        /*background-size: 30upx 30upx;*/
        /*!*animation: bg-change 10s infinite;*!*/
        /*background: linear-gradient(90deg, rgba(251, 239, 243, 0.5) 50%,transparent 0),*/
        /*linear-gradient(rgba(250, 237, 246, 0.5) 50%,transparent 0);*/
        /*width: 250px;*/
        /*height: 150px;*/

    }

</style>
