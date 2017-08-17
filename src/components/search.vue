<template>
    <div class="searchPage">
        <p class="searchBox">
            <b></b>
            <input type="text" placeholder="请搜索：歌手/歌曲" v-model="searchKey" @keyup.enter="search(searchKey)">
            <button class="iconfont icon-sousuo" @click="search(searchKey)"></button>
        </p>
       
        <ul class="hotList" v-show="hotListState">
             <li v-for="(val,index) in sendSearch" @click="search(val.k)">
                {{val.k}}
            </li>
        </ul>
         
	    <div class="searchListBox" v-show="searchListState">
	            <button class="iconfont icon-houtui" @click="closeList"></button>
	        <ul class="searchList">
	            <li v-for="(val,index) in searchList" @click="$store.dispatch('sendMusic',val)">
	                <div><img :src="val.img" alt=""></div>
	                <div>
		                <h1>{{val.name}}</h1>
		                <p>{{val.singer}}</p>
	                </div>
	            </li>
	        </ul>
	    </div>
           
    </div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'

	
    export default{
        data(){
            return{
                sendSearch:[],
                hotListState:true,
                searchListState:false,
                searchKey:'',
                searchList:[]
            }
        },
        methods:{
           search(key){
                this.$http.jsonp(
                    "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=30&w="+key+"",{
                    jsonp:"jsonpCallback"
                }).then(res => {
                    if (res.body.data.song.list !=[]){
                        this.hotListState=false;
                        this.searchListState=true;
                        this.searchList=[];
                        res.body.data.song.list.forEach(val => {
                            this.searchList.push({name:val.songname,
                                img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.albummid+".jpg?max_age=2592000",
                                songid:val.songid,
                                singer:val.singer[0].name})
                        });
                    }else {
                        return
                    }
                })
            },
            closeList(){
                this.hotListState=true;
                this.searchListState=false;
                this.notFound=false;
            }
        },
       
    }
</script>
<style scoped>
    .searchPage{
        height:74vh;
        width: 90%;
   		margin: 0 auto;
   		 overflow: hidden;
    }
    .searchBox{
	    margin: 1rem auto 0;
		height: 5vh;
	    border: 1px solid #ccc;
	    border-radius: 2.5vh;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
    }
    .searchBox input{
        border: none;
        flex: 1;
    }
    .searchBox b,.searchBox button{
        margin: 0 1rem;
    }
    .hotTitle{
        margin:1.2rem .3rem;
        font-size: 1.2rem;
        color: #999;
    }
    .hotList{
        display: flex;
        flex-wrap: wrap;
    }
    .hotList li{
        padding: .5rem 1rem;
        border:1px #ccc solid;
        margin:.4rem .3rem;
        font-size: 1rem;
    }
    .searchListBox{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 4vh;
    }
    .searchListBox>button{
        font-size: 2rem;
        margin-right: 10px;
    }
    .searchList{
        overflow: auto;
        height: 62vh;
        flex: 1;
    }
    .searchList li{
        border-bottom: 1px #ccc solid;
        display: flex;
        overflow: hidden;
    }
    .searchList li img{
        width:50px;
        margin: 2px 0;
    }
    .searchList li h1,.searchList li p{
        margin: .5rem 0;
        padding-left: 1rem;
    }
    .searchList li h1{
        font-size: 1.2rem;
    }
    .notFound{
        position: relative;
        height: 62vh;
    }
    .notFound button{
        font-size: 2rem;
        margin-right: 10px;
        margin-top: 10px;
    }
    .notFound h1{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin: auto;
        text-align: center;
        height:5vh;
        font-size: 1.2rem;
    }
</style>