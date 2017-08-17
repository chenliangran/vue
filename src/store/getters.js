export default {
    playBtnClass(state){
        if(state.playState==true){
            return 'iconfont icon-zanting'
        }else {
            return 'iconfont icon-bofang1'
        }
    },
    currentTime(state){
        if (state.musicList.length==0){
            return 0
        }else {
            return state.currentTime
        }
    },
    duration(state){
        if (state.musicList.length==0){
            return 0
        }else {
            return state.duration
        }
    },
    songImg(state){
        if (state.musicList.length==0){
            return 'static/img/defaultmusicImg.jpg'
        }else {
            if (!state.musicList[state.musicPlace].img){
                return 'static/img/img/defaultmusicImg.jpg'
            }else {
                return state.musicList[state.musicPlace].img
            }
        }
    },
    songInfo(state){
        if (state.musicList.length==0){
            return {name:'当前未播放歌曲',singer:'免费音乐播放器'}
        }else {
            return {name:state.musicList[state.musicPlace].name,singer:state.musicList[state.musicPlace].singer}
        }
    },
    getList(state){
        if (state.musicList.length==0){
            return false
        }else {
            return state.musicList
        }
    },
    getListState(state){
        return state.listState
    },
    getMusicPlace(state){
        return state.musicPlace;
    },
    hotListState(state){
        return state.hotListState;
    },
    isLoadingShow(state){
        return state.isLoadingShow
    },
    isPlayInfoShow(state){
        return state.isShowPlayInfo
    },
    nowSong(state){
        if(state.musicPlace == -1){
            return {songid:-1,name:'当前未播放歌曲',singer:'免费音乐播放器'}
        }else {
            return state.musicList[state.musicPlace]
        }
    },
    currentTime(state){
        return state.currentTime
    },
    duration(state){
        return state.duration
    }
}