<template>
    <div class="home">
    	<span>作者推荐</span>
        <ul>
            <li v-for="(val,index) in arr">
                <a href="javascript:;" @click="sendMusic(val)">
                    <img :src="val.img" :alt="val.name">
                    <p class="songName">{{val.name}}</p>
                    <p class="singer">{{val.singer}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default{
        data(){
            return{
                arr:[]
            }
        },
        methods:mapActions(['sendMusic']),
        mounted(){
            this.$http.get("static/music.json").then(res => { //jQuery递延对象中的then方法可以按照顺序依次处理多个异步请求，即第一个请求处理完后，再处理第二个请求，以此类推，这样既可以减轻服务器压力，又可以先发送首屏(从上到下)页面部分的请求，使页面响应更快
                this.arr=res.body.data;
            },error =>{
                console.log(error);
            });
        },
       
    }

</script>
<style scoped>
    .home{
        height:74vh;
        overflow: auto;
    }
    .home span{
    	background: #31c27c;
    	color: white;
    	display: block;
    	height: 30px;
    	line-height: 30px;
    	width: 80px;
    	font-size: 14px;
    	text-align: center;
    	margin-top: 10px;
    }
    .home ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 3vh;
    }
    .home ul li{
        margin-bottom: 20px;
    }
    .songName{
        font-size: 1.2rem;
        margin: 5px 0;
    }
    .singer{
        text-align: center;
    }
    .goToSeniority{
        margin-top: 20px;
        display: block;
        text-align: center;
    }
</style>