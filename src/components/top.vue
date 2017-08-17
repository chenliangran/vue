<template>
    <ul class="toplist">
        <router-link  tag="li" class="top" v-for="(val,index) in list" :to="{ name: 'toplist', params: { topid: val.id }}">
            <img class="topImg" :src="val.picUrl" alt="">
            <div class="topBox">
                <p class="topTitle">{{val.topTitle}}</p>
                <p v-for="(value,index) in val.songList">
                    <b class="topSongName">{{index+1}}.{{value.songname}}</b>
                    <span class="topSingerName"> -{{value.singername}}</span>
                </p>
            </div>
        </router-link>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073',{
                jsonp:"jsonpCallback"
            }).then(res =>{
                this.list=res.body.data.topList;
            })
        }
    }
</script>
<style>
    .toplist{
        height:74vh;
        overflow: auto;
    }
    .top{
        display: flex;
        height: 15vh;
        margin: 2vh auto;
        width: 94%;
        background: #f1f1f1;
    }
    .topImg{
        display: block;
        height:15vh;
    }
    .topBox{
        margin-left: 15px;
        width: 60%;
        overflow: hidden;
    }
    .topTitle{
        font-size: 18px;
        color: red;
        margin-top: 10px;
    }
    .topBox p{
        text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
        font-size: 14px;
    }
    .topSongName{
        font-weight: normal;
    }
  
</style>