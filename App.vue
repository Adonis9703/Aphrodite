<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    body {
        animation: bg-change 10s infinite;
    }
    @keyframes bg-change {
        0%  {background-color: #fef6c4
        }
        25% {background-color: rgb(233, 133, 134)
        }
        50% {background-color: #c2def5
        }
        75% {background-color: #eba8f6
        }
        100% {background-color: #ffa5d3;}
    }
</style>
