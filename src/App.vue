<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
      
    	<router-view></router-view>
    <v-playBtn></v-playBtn>
   <v-playInfo v-if="isPlayInfoShow"></v-playInfo>
    <audio src="" ref="audio" autoplay="autoplay" @ended="loopPlayback" @timeupdate="getcurrentTime" @canplay="getDuration"></audio>
  </div>
  
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
  import Header from './components/header.vue'
	import Nav from './components/nav.vue'
  import playBtn from './components/playBtn.vue'
  import playInfo from './components/playInfo.vue'

export default {
  name: 'app',
  data(){
    return{
       
    }
  },
  components:{
          'v-header':Header,
          'v-nav':Nav,
          'v-playBtn':playBtn,
          'v-playInfo':playInfo
      },
   mounted(){
   	    this.$store.dispatch('sendAudio',this.$refs.audio);
    },
   methods:{
        routerChange(path){
            path=path.substring(1);
            if (path.indexOf('toplist') !=-1){
                this.headerShow=false;
                this.navShow=false;
            }else {
                this.headerShow=true;
                this.navShow=true;
            }
        },
        ...mapActions([
            'nextSong',
            'loopPlayback',
            'getcurrentTime',
            'getDuration'
        ])
    },
    computed:mapGetters([
        'isLoadingShow',
        'isPlayInfoShow'
    ]),
    watch:{
      $route(to){
          this.routerChange(to.path)
      }
    }
 }   
</script>

<style>

</style>
