<template>
	 <div class="history_box" v-show="getListState">
        <h1>播放记录： {{getList?getList.length:0}}首</h1>
    <ul class="history">
        <li v-for="(val,index) in getList" :class="{playing:getMusicPlace==index}">
            <span>{{index+1}}.</span>
            <b  @click.stop="selectMusic(index)">
                {{val?val.name:当前未播放歌曲}}
            </b>
            <button class="iconfont icon-guanbi" @click.stop="delMusic(index)"></button>
        </li>
    </ul>
        <a href="javascript:;" class="closeList" @click="closeListState">关&nbsp;&nbsp;闭</a>
    </div>
   
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
    export default{
        computed:mapGetters(['getList','getListState','getMusicPlace']),
        methods:mapActions(['closeListState','selectMusic','delMusic'])
    }
</script>

<style>
    .history_box{
        position: fixed;
        bottom: 0;
        z-index: 10;
        width: 100%;
        overflow: auto;
        background: #eee;
    	opacity: 0.85;
    }
    .history .playing{
        color: red;
    }
    .history_box h1{
        text-align: center;
        color: red;
        height:24px;
        line-height: 24px;
        font-size: 18px;
    }
    .history{
        overflow: auto;
        height: 25vh;
    }
    .history li{
        display: flex;
        justify-content: space-between;
        height:5vh;
        color: #000;
        line-height: 5vh;
        font-size: 1.2rem;
    }
    .history li span{
    	margin-left: 10px;
    	font-size: 16px;
    }
    .history li button{
        color: #000;
        margin-right: 10px
    }
    .history li b{
        flex:1;
        font-size: 16px;
        font-weight: normal;
        text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
    }
    .closeList{
        display: block;
        color: black;
        text-align: center;
        font-size: 18px;
    }
</style>