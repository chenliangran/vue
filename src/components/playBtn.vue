<template>
    <div class="playBtn">
    	<v-history></v-history>
         <ul class="playBtn_box">
            <li class="playBtn_l">
              <img :src="songImg" @click="showPlayInfo">
            </li>
            <li class="playBtn_m">
                <span class="song">{{songInfo.name}}</span>
                <p class="singer">{{songInfo.singer}}</p>
            </li>
            <li class="playBtn_r">
                <span :class="playBtnClass" @click="play" style="margin-top: 20px;"></span>
                <span class="iconfont icon-qianjin" @click="nextMusic"></span>
                <span class="iconfont icon-liebiao" @click.stop="openListState"></span>
            </li>
        </ul>
    </div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'
	import history from './history.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            'v-history':history
        },
        methods:mapActions(['play','nextMusic','openListState','closeListState','showPlayInfo']),
        computed:mapGetters(['playBtnClass','currentTime','duration','songImg','songInfo'])
    }
</script>
<style scoped>
    .playBtn{
        background: white;
        width: 100%;
        max-width: 700px;
        display: flex;
        height: 14vh;
    }
    .playBtn_box{
        display: flex;
        align-items: center;
        height: 14vh;
        overflow: hidden;
         width: 100%;
        justify-content: space-around;
        background: #f3aeed;
    }
    .playBtn_l{
        height:16vw;
        width: 16vw;
        max-width: 90px;
        max-height: 90px;
    }
    .playBtn_l img{
        height:16vw;
        width: 16vw;
        max-width: 80px;
        max-height: 80px;
    }
    .playBtn_m{
        margin-left:3vw;
        max-width: 180px;
    }
    .playBtn_r span{
        font-size: 30px!important;
       
    }
    .song{
    	margin-top: 10px;
    	display: block;
    	color: red;
    	font-size: 16px;
    	text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
    }
    .singer{
    	text-align: center;
    	padding: 10px 0;
    	color: red;
    	font-size: 16px;
    }
  
</style>
