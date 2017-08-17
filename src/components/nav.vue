<template>
    <div class="nav">
        <ul>
            <router-link to="/home" tag="li" active-class="target">精选</router-link>
            <router-link to="/top" tag="li" active-class="target">排行</router-link>
            <router-link to="/search" tag="li" active-class="target">搜索</router-link>
        </ul>
    </div>
</template>

<style scoped>
	.nav{
		height:6vh;
		width: 100%;
        background: white;
        max-width: 700px;
    }
	.nav ul{
		display: flex;
        justify-content: space-around;
        height:6vh;
        border: 1px solid pink;
    }
    .nav ul li{
        line-height: 6vh;
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    .target{
        background:pink
    }
</style>