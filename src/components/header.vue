<template>
    <div class="header">
        <ul>
            <li><a href="javascript:;" class="iconfont icon-houtui" @click="open('left')"></a></li>
        </ul>
        <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
            <div class="left_img">
            	<img src="static/music-logo.png">
            </div>
            <ul class="optionsList">
                <li>MV</li>
                <li>音乐馆</li>
                <li>个性电台</li>
                <li>热门推荐</li>
                <li>歌曲分类</li>
                <li>数字专辑</li>
                <li>我的音乐</li>
                <li>会员中心</li>
                <li>作者:CLR</li>
            </ul>

        </mu-popup>
    </div>
</template>
<script>
   export default{
        data(){
            return{
                leftPopup: false
            }
        },
        methods:{
            open (position) {
                this[position + 'Popup'] = true
            },
            close (position) {
                this[position + 'Popup'] = false
            }
        }
    }
</script>
<style scoped>
    .header{
        width: 100%;
        background: white;
       position: relative;
    }
    .header ul{
        height:6vh;
        line-height: 6vh;
        display: flex;
    }
    .header ul li a{
        font-size: 26px;
        color: #f3aeed;
    }
    .header ul li{
        width:20vw
    }
   	.demo-popup-left .overlayColor{
   		background-color: #f3aeed;
   	}
    .left_img{
        height: 15vh;
        display: flex;
    }
    .optionsList{
        background: #fff;
        margin-top: 1rem;
    }
    .optionsList li{
        border-bottom: 1px #999999 solid;
        font-size: 1.6rem;
        line-height: 6vh;
        color: red;
        text-align: center;
    }

    .optionsList li:hover{
        background: #f3aeed;
    }
   
</style>