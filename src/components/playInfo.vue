<template>
    <div class="playInfo">
    	<v-history></v-history>
        <div class="playInfoTitle">
            <button @click="hidPlayInfo" class="iconfont icon-houtui"></button>
            <p>{{this.nowSong.name}} - {{this.nowSong.singer}}</p>
        </div>
        <div class="lycBox">
           <img :src="songImg">
        </div>
        <div class="playbackProgress">
            <span>{{currentTime | date}}  </span>
            <mu-slider v-model="moveValue" class="demo-slider progress" @change="moveSetTime"/>
            
            <span>{{duration | date}}</span>
        </div>
        <div class="playBtnBox">
            <button @click="prevMusic" class="iconfont icon-houtui"></button>
            <button @click="play" :class="playBtnClass"></button>
            <button @click="nextMusic" class="iconfont icon-qianjin"></button>
            <button class="iconfont icon-liebiao" @click.stop="openListState"></button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapActions,mapGetters} from 'vuex';
    import history from './history.vue'
    

    Vue.filter('date',function(input){
        let time = new Date();
        time.setTime(input*1000);
        let seconds = time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds();
        return time.getMinutes()+'.'+seconds;
    });
    export default{
        data(){
            return{
                time:0,
                moveValue:0
            }
        },
        mounted(){
            let _this =this;
            document.onclick=function () {
                _this.closeListState()
            };
           
        },
        methods:{
            moveSetTime(){
                if (this.duration>0){
                    setTimeout( () =>{
                        this.setCurrentTime(this.moveValue*this.duration/100);
                    },0);
                }
            },
            ...mapActions([
                'hidPlayInfo',
                'openListState',
                'closeListState',
                'play',
                'nextMusic',
                'prevMusic',
                'setCurrentTime',
                'movePlay'
            ]),
            
        },
        computed:{
            ...mapGetters(['nowSong','currentTime','playBtnClass','duration','songImg'])
        },
        watch:{
          	currentTime(){
                this.time=parseInt(this.currentTime)
            },
            time(){
            	this.moveValue=(this.currentTime/this.duration).toFixed(3)*100
            }
        },
         components:{
            'v-history':history
        }
    }
</script>
<style scoped>
    .playInfo{
        position: absolute;
        top: 0;
        left:0;
        bottom:0;
        right:0;
        height:100vh;
        width:100%;
        max-width: 633px;
        background: #fff;
        margin: 0 auto;
        z-index: 3;
    }
    .playInfoTitle{
        height:6vh;
        display: flex;
    }
    .playInfoTitle p{
        line-height: 6vh;
        font-size: 1.4rem;
        color:red
    }
    .playInfoTitle button{
        margin-right: 1rem;
        margin-left: 0.5rem;
        font-size: 2rem;
        color: #999;
    }
     .lycBox{
        margin-top: 15.5vh;
    }
    .playbackProgress{
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3aeed;
        margin-top: 21vh;
    }
    .progress{
        width:70%;
        margin: 0 1rem;
        position: relative;
        color: #00e09e;
        
    }
    .progress p{
        position: absolute;
        background: #00e09e;
        height:.5vh;
       
    }
    .progress button{
        width:2vh;
        height:2vh;
        border-radius: 1vh;
        background: #00e09e;
        position: absolute;
        top:0.8vh;
    }
    .playBtnBox{
        height:12vh;
        display: flex;
        justify-content: space-around;
        background:#f3aeed;
       
    }
    .playBtnBox button{
        font-size: 2.5rem;
        flex: 1;
    }
    .playBtnBox .songList{
        flex: 0;
        font-size: 2rem;
    }
    .lycBox img {
    height: 250px;
    width: 250px;
    margin: 0 auto;
    display: block;
    border-radius: 125px;
    animation:run 8s linear infinite;  
}
  @keyframes run{  
        from{  
            -webkit-transform:rotate(0deg);  
        }  
        to{  
            -webkit-transform:rotate(360deg);  
        }  
    }  
</style>