<script>
  export default {
    onLaunch: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    }
  }
</script>

<style>
    /*每个页面公共css */
    body {
        /*font-family: 仿宋;*/
        /*font-family: iconfont;*/
        color: #333;
        height: 100%;
        background: linear-gradient(90deg, rgba(251, 239, 243, 0.5) 50%, transparent 0),
        linear-gradient(rgba(250, 237, 246, 0.5) 50%, transparent 0);
        background-size: 140upx 140upx;
        /*animation: bg-change 4s infinite ease;*/
        font-size: 28upx;
    }
    button {
        border: none
    }
    @keyframes bg-change {
        0% {
            background: linear-gradient(to bottom, #FBEFF3, #E1C2DA);
        }
        100% {
            background: linear-gradient(to bottom, #FBEFF3, #e16973);
        }
        /*100% {*/
            /*background: linear-gradient(to bottom, #E1C2DA, #FBEFF3);*/
        /*}*/
    }
</style>
